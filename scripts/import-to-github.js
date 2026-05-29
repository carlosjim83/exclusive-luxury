#!/usr/bin/env node
/**
 * Script: import-to-github.js
 * Lee docs/BACKLOG.json y crea en GitHub:
 *   - Milestones (1 por sprint)
 *   - Labels (story, sprint-N, epic:<id>)
 *   - Issues (1 por historia)
 *   - Proyecto v2 "Backlog MVP" (opcional)
 *   - Añade los issues al proyecto (opcional)
 *
 * Requisitos:
 *   - Node.js >= 18
 *   - GitHub CLI (gh) instalado y autenticado
 *   - Repo con remote apuntando a GitHub
 *
 * Uso:
 *   node scripts/import-to-github.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const BACKLOG_PATH = path.join(__dirname, "..", "docs", "BACKLOG.json");
const TEMP_DIR = path.join(__dirname, ".tmp-gh-import");

function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf-8", stdio: opts.silent ? "pipe" : "inherit", ...opts }).trim();
}

function runSilent(cmd) {
  return run(cmd, { silent: true });
}

function die(msg) {
  console.error("\n❌ " + msg);
  process.exit(1);
}

function info(msg) {
  console.log("\nℹ️  " + msg);
}

function ok(msg) {
  console.log("✅ " + msg);
}

// ──────────────────────────────────────────────
// 1. Validaciones
// ──────────────────────────────────────────────

info("Verificando entorno...");

try {
  runSilent("gh auth status");
} catch {
  die("No estás autenticado con gh. Ejecuta: gh auth login");
}

const remoteUrl = runSilent("git remote get-url origin");
const match = remoteUrl.match(/github\.com[:/]([^/]+)\/(.+?)(?:\.git)?$/);
if (!match) die("No se pudo detectar OWNER/REPO desde git remote: " + remoteUrl);
const [OWNER, REPO] = [match[1], match[2]];
ok(`Repo detectado: ${OWNER}/${REPO}`);

if (!fs.existsSync(BACKLOG_PATH)) die(`No se encontró ${BACKLOG_PATH}`);
const backlog = JSON.parse(fs.readFileSync(BACKLOG_PATH, "utf-8"));
ok("Backlog cargado: " + backlog.project);

// ──────────────────────────────────────────────
// 2. Crear labels
// ──────────────────────────────────────────────

info("Creando labels...");

const labelsToCreate = [
  { name: "epic", color: "3B82F6", desc: "Épica del backlog" },
  { name: "story", color: "A855F7", desc: "Historia de usuario" },
  { name: "task", color: "22C55E", desc: "Tarea técnica" },
  { name: "backend", color: "1F2937", desc: "Trabajo de backend" },
  { name: "frontend", color: "F59E0B", desc: "Trabajo de frontend" },
  { name: "mobile", color: "EC4899", desc: "Trabajo de app móvil" },
  { name: "devops", color: "6366F1", desc: "Infra / DevOps" },
];

for (const lbl of labelsToCreate) {
  try {
    runSilent(
      `gh label create "${lbl.name}" --color "${lbl.color}" --description "${lbl.desc}" --repo ${OWNER}/${REPO}`
    );
    ok(`Label '${lbl.name}' creado`);
  } catch {
    console.log(`   Label '${lbl.name}' ya existe (ignorado)`);
  }
}

// Labels de sprint
for (const sp of backlog.sprints) {
  const name = `sprint-${sp.number}`;
  try {
    runSilent(
      `gh label create "${name}" --color "10B981" --description "Sprint ${sp.number}: ${sp.name}" --repo ${OWNER}/${REPO}`
    );
    ok(`Label '${name}' creado`);
  } catch {
    console.log(`   Label '${name}' ya existe (ignorado)`);
  }
}

// Labels de épica
for (const epic of backlog.epics) {
  const name = `epic:${epic.id.toLowerCase()}`;
  try {
    runSilent(
      `gh label create "${name}" --color "EF4444" --description "${epic.title}" --repo ${OWNER}/${REPO}`
    );
    ok(`Label '${name}' creado`);
  } catch {
    console.log(`   Label '${name}' ya existe (ignorado)`);
  }
}

// ──────────────────────────────────────────────
// 3. Crear milestones (sprints)
// ──────────────────────────────────────────────

info("Creando milestones (sprints)...");

const milestones = [];
for (const sp of backlog.sprints) {
  const title = `Sprint ${sp.number}: ${sp.name}`;
  const desc = `Goal: ${sp.goal} | Semanas: ${sp.weeks}`;
  try {
    runSilent(
      `gh api repos/${OWNER}/${REPO}/milestones -f title="${title}" -f state=open -f description="${desc}"`
    );
    ok(`Milestone '${title}' creado`);
  } catch {
    console.log(`   Milestone '${title}' ya existe o error (ignorado)`);
  }
  milestones.push({ number: sp.number, title });
}

// Recuperar milestones existentes para mapear número -> milestone_number
const milestonesJson = JSON.parse(
  runSilent(`gh api repos/${OWNER}/${REPO}/milestones?state=all`)
);
const milestoneMap = {};
for (const m of milestonesJson) {
  const num = m.title.match(/Sprint (\d+):/);
  if (num) milestoneMap[parseInt(num[1])] = m.title;
}

// ──────────────────────────────────────────────
// 4. Crear issues
// ──────────────────────────────────────────────

info("Creando issues...");

if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

const epicMap = {};
for (const e of backlog.epics) epicMap[e.id] = e;

const createdIssues = []; // { number, url, sprintNumber }

for (const sp of backlog.sprints) {
  for (const story of sp.stories) {
    const epic = epicMap[story.epic_id];
    const labels = [
      "story",
      `sprint-${sp.number}`,
      `epic:${story.epic_id.toLowerCase()}`,
    ];

    // Añadir label de área según las tareas (heurística simple)
    const taskText = (story.tasks || []).join(" ").toLowerCase();
    if (taskText.includes("react native") || taskText.includes("expo") || taskText.includes("mobile")) {
      labels.push("mobile");
    } else if (taskText.includes("docker") || taskText.includes("ci/cd") || taskText.includes("deploy")) {
      labels.push("devops");
    } else if (taskText.includes("next.js") || taskText.includes("ui") || taskText.includes("landing") || taskText.includes("pantalla")) {
      labels.push("frontend");
    } else if (taskText.includes("endpoint") || taskText.includes("prisma") || taskText.includes("api") || taskText.includes("fastify")) {
      labels.push("backend");
    }

    const bodyLines = [
      `## Historia de Usuario`,
      `> **Como** ${story.as}, **quiero** ${story.want}, **para que** ${story.so_that}.`,
      ``,
      `## Story Points`,
      `**${story.points}**`,
      ``,
      `## Épica`,
      `[${epic.id}] ${epic.title}`,
      ``,
      `## Sprint`,
      `**Sprint ${sp.number}: ${sp.name}** — ${sp.goal}`,
      ``,
      `## Criterios de Aceptación`,
      ...(story.acceptance_criteria || []).map((c) => `- ${c}`),
      ``,
      `## Tareas Técnicas`,
      ...(story.tasks || []).map((t) => `- [ ] ${t}`),
    ];

    const body = bodyLines.join("\n");
    const tmpFile = path.join(TEMP_DIR, `issue-${story.id}.md`);
    fs.writeFileSync(tmpFile, body, "utf-8");

    const labelArg = labels.map((l) => `--label "${l}"`).join(" ");
    const milestoneArg = milestoneMap[sp.number] ? `--milestone "${milestoneMap[sp.number]}"` : "";

    try {
      const out = runSilent(
        `gh issue create --repo ${OWNER}/${REPO} --title "[${story.id}] ${story.title}" --body-file "${tmpFile}" ${labelArg} ${milestoneArg}`
      );
      ok(`Issue ${story.id} creado: ${out}`);
      createdIssues.push({ id: story.id, url: out, sprintNumber: sp.number });
    } catch (err) {
      console.error(`   ❌ Error creando issue ${story.id}:`, err.message || err);
    }
  }
}

// ──────────────────────────────────────────────
// 5. Crear proyecto v2 y añadir items
// ──────────────────────────────────────────────

info("Creando GitHub Project v2...");

let projectUrl = null;
try {
  const out = runSilent(
    `gh project create --title "Backlog MVP" --owner "${OWNER}" --format json`
  );
  const proj = JSON.parse(out);
  projectUrl = proj.url;
  ok(`Proyecto creado: ${projectUrl}`);
} catch (err) {
  console.log(`   Posiblemente el proyecto ya existe. Error: ${err.message || err}`);
  // Intentar recuperar URL del proyecto existente
  try {
    const list = runSilent(`gh project list --owner "${OWNER}" --format json`);
    const projects = JSON.parse(list);
    const existing = projects.projects?.find((p) => p.title === "Backlog MVP" || p.name === "Backlog MVP");
    if (existing) projectUrl = existing.url;
  } catch {
    // noop
  }
}

if (projectUrl) {
  info("Añadiendo issues al proyecto...");
  for (const issue of createdIssues) {
    try {
      runSilent(`gh project item-add "Backlog MVP" --owner "${OWNER}" --url "${issue.url}"`);
      ok(`Añadido al proyecto: ${issue.id}`);
    } catch (err) {
      console.log(`   No se pudo añadir ${issue.id} al proyecto: ${err.message || err}`);
    }
  }
}

// ──────────────────────────────────────────────
// 6. Limpieza y resumen
// ──────────────────────────────────────────────

fs.rmSync(TEMP_DIR, { recursive: true, force: true });

console.log("\n" + "=".repeat(60));
console.log("🎉 IMPORTACIÓN COMPLETADA");
console.log("=".repeat(60));
console.log(`\n📁 Repo:  https://github.com/${OWNER}/${REPO}`);
if (projectUrl) console.log(`📋 Proyecto: ${projectUrl}`);
console.log(`\n📊 Resumen:`);
console.log(`   • Milestones (sprints): ${Object.keys(milestoneMap).length}`);
console.log(`   • Issues creados:         ${createdIssues.length}`);
console.log(`   • Historias totales:      ${backlog.sprints.reduce((acc, s) => acc + s.stories.length, 0)}`);
console.log(`\n💡 Próximos pasos:`);
console.log(`   1. Ve a la pestaña 'Issues' del repo para ver todo el backlog.`);
console.log(`   2. Abre el Proyecto 'Backlog MVP' para ver el tablero Kanban.`);
console.log(`   3. En el proyecto, añade campos personalizados: Story Points, Épica, Prioridad.`);
console.log(`   4. Configura las vistas: Board (Kanban por status), Roadmap (por sprint).`);
console.log("\n");
