#!/usr/bin/env node
/**
 * Script: populate-project-fields.js
 * Rellena Story Points, Priority y Epic en GitHub Project v2 vía GraphQL.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const BACKLOG_PATH = path.join(__dirname, "..", "docs", "BACKLOG.json");

function gql(cmd) {
  return JSON.parse(execSync(cmd, { encoding: "utf-8", stdio: "pipe" }));
}

function runSilent(cmd) {
  return execSync(cmd, { encoding: "utf-8", stdio: "pipe" }).trim();
}

// ──────────────────────────────────────────────
// 1. Cargar backlog
// ──────────────────────────────────────────────
const backlog = JSON.parse(fs.readFileSync(BACKLOG_PATH, "utf-8"));

const issueMap = {};
for (const sp of backlog.sprints) {
  for (const st of sp.stories) {
    const num = parseInt(st.id.replace("H", ""), 10);
    issueMap[num] = {
      points: st.points,
      epic_id: st.epic_id.toUpperCase(),
      sprint: sp.number,
    };
  }
}

// ──────────────────────────────────────────────
// 2. Obtener items del proyecto
// ──────────────────────────────────────────────
const PROJECT_NUMBER = 1;
const OWNER = "carlosjim83";

const itemsQuery = `query {
  user(login:"${OWNER}") {
    projectV2(number:${PROJECT_NUMBER}) {
      items(first:100) {
        nodes { id content { ... on Issue { number } } }
      }
    }
  }
}`;

const itemsRes = gql(`gh api graphql -f query='${itemsQuery}'`);
const items = itemsRes.data.user.projectV2.items.nodes;

// ──────────────────────────────────────────────
// 3. Obtener field IDs y opciones
// ──────────────────────────────────────────────
const fieldsQuery = `query {
  user(login:"${OWNER}") {
    projectV2(number:${PROJECT_NUMBER}) {
      fields(first:20) {
        nodes {
          ... on ProjectV2Field { id name }
          ... on ProjectV2SingleSelectField { id name options { id name } }
          ... on ProjectV2IterationField { id name }
        }
      }
    }
  }
}`;

const fieldsRes = gql(`gh api graphql -f query='${fieldsQuery}'`);
const fields = fieldsRes.data.user.projectV2.fields.nodes;

const spField = fields.find((f) => f.name === "Story Points");
const prField = fields.find((f) => f.name === "Priority");
const epField = fields.find((f) => f.name === "Epic");

if (!spField || !prField || !epField) {
  console.error("Faltan campos personalizados"); process.exit(1);
}

const epicOptMap = {};
for (const opt of epField.options) {
  const m = opt.name.match(/^(E\d+)/i);
  if (m) epicOptMap[m[1].toUpperCase()] = opt.id;
}

const priOptMap = {};
for (const opt of prField.options) priOptMap[opt.name] = opt.id;

// ──────────────────────────────────────────────
// 4. Obtener projectId
// ──────────────────────────────────────────────
const pidRes = gql(`gh api graphql -f query='query { user(login:"${OWNER}") { projectV2(number:${PROJECT_NUMBER}) { id } } }'`);
const projectId = pidRes.data.user.projectV2.id;

// ──────────────────────────────────────────────
// 5. Actualizar cada item (query inline sin variables)
// ──────────────────────────────────────────────
let updated = 0;
for (const item of items) {
  const num = item.content?.number;
  if (!num || !issueMap[num]) continue;
  const d = issueMap[num];
  const itemId = item.id;

  // Story Points
  const spQuery = `mutation {
    updateProjectV2ItemFieldValue(
      input: { projectId: "${projectId}", itemId: "${itemId}", fieldId: "${spField.id}", value: { number: ${d.points} } }
    ) { projectV2Item { id } }
  }`;
  try { gql(`gh api graphql -f query='${spQuery}'`); } catch (e) { /* ignore */ }

  // Priority
  const priName = d.points >= 8 ? "High" : d.points >= 5 ? "Medium" : "Low";
  const priQuery = `mutation {
    updateProjectV2ItemFieldValue(
      input: { projectId: "${projectId}", itemId: "${itemId}", fieldId: "${prField.id}", value: { singleSelectOptionId: "${priOptMap[priName]}" } }
    ) { projectV2Item { id } }
  }`;
  try { gql(`gh api graphql -f query='${priQuery}'`); } catch (e) { /* ignore */ }

  // Epic
  const epicOptId = epicOptMap[d.epic_id];
  if (epicOptId) {
    const epQuery = `mutation {
      updateProjectV2ItemFieldValue(
        input: { projectId: "${projectId}", itemId: "${itemId}", fieldId: "${epField.id}", value: { singleSelectOptionId: "${epicOptId}" } }
      ) { projectV2Item { id } }
    }`;
    try { gql(`gh api graphql -f query='${epQuery}'`); } catch (e) { /* ignore */ }
  }

  console.log(`✅ #${num} — SP:${d.points} | Priority:${priName} | Epic:${d.epic_id}`);
  updated++;
}

console.log(`\n🎉 ${updated} items actualizados.`);
