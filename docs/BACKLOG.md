# Backlog de Desarrollo — Personal Shopping Luxury

> **Stack**: TypeScript · Fastify (backend) · Next.js (frontend web) · PostgreSQL + Prisma · Stripe · Socket.io  
> **Metodología**: SCRUM · Sprints de 2 semanas · Story points ilustrativos  
> **Duración MVP**: 10 sprints (~5 meses)

---

## 1. Épicas

| ID | Épica | Descripción | Sprints |
|----|-------|-------------|---------|
| **E01** | Infraestructura & DevOps | Monorepo, Docker, CI/CD, despliegues | 1, 10 |
| **E02** | Autenticación y Autorización | Registro, login, roles, JWT | 1, 2 |
| **E03** | API Core — Backend (Fastify) | REST API, base de datos, lógica de negocio | 2, 3, 4, 5, 6, 7 |
| **E04** | Web Cliente — Next.js | Landing, perfil, catálogo, reservas, chat | 2, 3, 4, 5, 7, 10 |
| **E05** | Sistema de Reservas & Booking | Calendario, disponibilidad, geolocalización | 4 |
| **E06** | Pasarela de Pagos (Stripe) | Membresías anuales, cobro por visita, webhooks | 5 |
| **E07** | Panel de Administración | Dashboard, gestión de usuarios, citas, reporting | 6, 10 |
| **E08** | CRM y Perfiles | Preferencias de estilo, historial, notas | 3, 6 |
| **E09** | Chat y Notificaciones | Chat cliente-shopper, emails, push | 7, 9 |
| **E10** | App Móvil (React Native) | iOS/Android: reservas, chat, historial | 8, 9 |
| **E11** | Operativa y Logística | Agenda operaciones, reportes, calendario interno | 10 |
| **E12** | Lanzamiento & Marketing Web | SEO, performance, staging, demo | 10 |

---

## 2. Roadmap de Sprints

### Sprint 1 — Cimientos (Semanas 1-2)
**Objetivo**: Tener un repo funcional, login/registro operativo y base de datos local.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H01** | Como dev, quiero un monorepo con workspaces para trabajar en paralelo. | 5 | Crear estructura `apps/web`, `apps/api`, `packages/db`, `packages/shared`. Configurar TypeScript, ESLint, Prettier. |
| **H02** | Como dev, quiero levantar todo con Docker Compose localmente. | 3 | Dockerfiles para web y api. `docker-compose.yml` con Postgres 15 y Redis. Healthchecks. |
| **H03** | Como equipo, quiero CI/CD en GitHub Actions para no romper `main`. | 3 | Workflow: lint + typecheck + tests en PR. Protección de rama. |
| **H04** | Como visitante, quiero registrarme con email y contraseña para acceder. | 5 | Endpoint `POST /auth/register`. Validación Zod. Hash bcrypt. JWT access + refresh tokens. |
| **H05** | Como visitante, quiero iniciar sesión para acceder a mi perfil. | 3 | Endpoint `POST /auth/login`. Middleware JWT en Fastify. Cookies httpOnly. |

**Sprint Total**: 19 pts

---

### Sprint 2 — API Core & Landing (Semanas 3-4)
**Objetivo**: Landing publicada, API REST base y perfil editable.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H06** | Como dev, quiero Prisma ORM con migraciones para persistir datos. | 5 | Schema: `User`, `Profile`, `City`, `Role`. Migraciones. Seed básico. |
| **H07** | Como visitante, quiero ver una landing premium para entender el servicio. | 8 | Hero, Cómo funciona, Marcas aliadas, Precios, FAQ. Animaciones suaves. Responsive. |
| **H08** | Como cliente, quiero ver y editar mi perfil básico. | 3 | Página `/perfil`. Formulario datos personales. Subida de avatar a S3/Cloudinary. |
| **H09** | Como sistema, quiero endpoints REST de usuarios y perfiles. | 5 | CRUD `/users`, `/profiles`. Validaciones Zod. Manejo de errores uniforme. |

**Sprint Total**: 21 pts

---

### Sprint 3 — Catálogo & Shoppers (Semanas 5-6)
**Objetivo**: Mostrar marcas y shoppers; dar de alta shoppers desde admin.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H10** | Como cliente, quiero ver un catálogo de marcas de lujo. | 5 | Modelo `Brand`. Endpoint listado con filtros (ciudad, categoría). Grid UI con logos. |
| **H11** | Como admin, quiero dar de alta personal shoppers. | 5 | CRUD shoppers. Campos: nombre, ciudad, especialidad, bio, foto, tarifa, rating. |
| **H12** | Como cliente, quiero ver el perfil detallado de un shopper. | 3 | Página `/shoppers/[id]`. Portfolio, reseñas mock, botón "Reservar". |
| **H13** | Como dev, quiero seed de datos de demo para pruebas. | 3 | Seed: 10 marcas, 10 shoppers (5 Madrid, 5 Barcelona), 2 ciudades. |

**Sprint Total**: 16 pts

---

### Sprint 4 — Booking v1 (Semanas 7-8)
**Objetivo**: Un cliente puede reservar una cita con un shopper en una fecha concreta.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H14** | Como cliente, quiero solicitar una cita eligiendo fecha y shopper. | 8 | Flujo: ciudad → shopper → calendario → hora → confirmar. Estados: `pending`, `confirmed`. |
| **H15** | Como shopper, quiero definir mi disponibilidad semanal. | 5 | Modelo `Availability`. UI calendario shopper. Slots de 1h. Excepciones (días libres). |
| **H16** | Como cliente, quiero ver el mapa de cobertura del shopper. | 5 | Integración Google Maps. Geocodificar dirección cliente. Mostrar radio de cobertura. |
| **H17** | Como sistema, quiero bloquear slots al confirmar para evitar duplicados. | 3 | Transacción atómica Prisma. Estados de cita. Soft-delete en cancelaciones. |

**Sprint Total**: 21 pts

---

### Sprint 5 — Pagos (Semanas 9-10)
**Objetivo**: Cobrar membresías anuales y visitas puntuales vía Stripe.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H18** | Como cliente, quiero pagar la membresía anual online. | 8 | Stripe Checkout Subscription (2000€/año). Webhook `invoice.paid`. Flag `isMember`. |
| **H19** | Como cliente, quiero pagar una visita puntual online. | 5 | Stripe PaymentIntent (100€/visita). Cobro al confirmar cita. Recibo digital. |
| **H20** | Como admin, quiero ver transacciones para conciliar. | 3 | Panel listado pagos. Filtros: estado, fecha, cliente. Export CSV. |
| **H21** | Como cliente, quiero recibir email de confirmación de pago. | 3 | Integración Resend. Template confirmación de pago. Trigger post-webhook. |

**Sprint Total**: 19 pts

---

### Sprint 6 — Admin & CRM (Semanas 11-12)
**Objetivo**: El equipo interno puede gestionar el negocio y los clientes tienen perfiles enriquecidos.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H22** | Como admin, quiero un dashboard con KPIs. | 8 | Métricas: miembros activos, citas mes, ingresos, NPS. Gráficas con Recharts/Tremor. |
| **H23** | Como admin, quiero gestionar citas (reagendar / cancelar). | 5 | CRUD citas. Notificación automática a cliente y shopper por email. |
| **H24** | Como admin, quiero ver el perfil completo de un cliente. | 3 | Vista ficha cliente. Historial citas, preferencias, notas internas. |
| **H25** | Como cliente, quiero guardar mis preferencias de estilo. | 3 | Formulario: tallas, colores, marcas favoritas, estilo (classic, trendy, minimal). |

**Sprint Total**: 19 pts

---

### Sprint 7 — Chat & Notificaciones (Semanas 13-14)
**Objetivo**: Comunicación fluida cliente-shopper y recordatorios automáticos.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H26** | Como cliente, quiero chatear con mi shopper antes de la visita. | 8 | WebSocket con Socket.io. Sala por cita. Historial persistente. Indicador "escribiendo". |
| **H27** | Como cliente, quiero recibir recordatorios de mi cita. | 3 | Job programado (BullMQ / node-cron). Email 24h antes. SMS opcional (Twilio mock). |
| **H28** | Como shopper, quiero notificaciones push cuando me reserven. | 5 | FCM server-side. Guardar tokens de dispositivo. Notif: nueva reserva, cancelación, mensaje. |
| **H29** | Como sistema, quiero enviar emails transaccionales sin caer en spam. | 3 | Configurar dominio remitente, DKIM básico. Templates: bienvenida, confirmación cita, recibo. |

**Sprint Total**: 19 pts

---

### Sprint 8 — App Móvil v1 (Semanas 15-16)
**Objetivo**: App funcional con login, reservas y historial.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H30** | Como cliente, quiero usar la app para reservar citas. | 8 | React Native setup (Expo). Navegación con React Navigation. Pantallas: login, home, reserva. |
| **H31** | Como cliente, quiero ver mi historial de visitas en la app. | 5 | Pantalla "Mis Visitas". Estados: upcoming / completed. Detalle con notas del shopper. |
| **H32** | Como cliente, quiero recibir push en el móvil cuando me envíen un mensaje. | 5 | Integración FCM en RN. Manejo de tokens. Deep link a pantalla de chat. |

**Sprint Total**: 18 pts

---

### Sprint 9 — App Móvil v2 & Chat (Semanas 17-18)
**Objetivo**: Chat móvil, catálogo en app y gestión de suscripción.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H33** | Como cliente, quiero chatear con mi shopper desde la app. | 8 | Chat UI en RN. Conexión Socket.io. Envío de imágenes (opcional). |
| **H34** | Como cliente, quiero ver el catálogo de marcas en la app. | 3 | Pantalla marcas. Grid, filtros. Reutilizar endpoint `/brands`. |
| **H35** | Como cliente, quiero gestionar mi membresía desde la app. | 5 | Pantalla suscripción. Ver estado, renovar. Integración Stripe mobile / Apple Pay mock. |
| **H36** | Como shopper, quiero marcar citas como completadas desde la app. | 3 | Pantalla agenda shopper. Acción "Completar". Formulario notas post-visita. |

**Sprint Total**: 19 pts

---

### Sprint 10 — Operativa & Lanzamiento (Semanas 19-20)
**Objetivo**: MVP estable, entorno de demo y web optimizada.

| ID | Historia | Pts | Tareas técnicas |
|----|----------|-----|-----------------|
| **H37** | Como operaciones, quiero una vista calendario de citas del día. | 5 | Vista calendario admin (día/semana). Filtros shopper y ciudad. Export PDF diario. |
| **H38** | Como dirección, quiero un informe semanal automático. | 3 | Cron semanal. Email con métricas clave: citas, ingresos, NPS, shoppers activos. |
| **H39** | Como visitante, quiero una web rápida y bien posicionada. | 5 | SEO básico (metadata, sitemap, robots). Optimización imágenes (Next/Image). Lighthouse > 90. |
| **H40** | Como equipo, quiero un entorno de staging estable para demos. | 5 | Despliegue: Vercel (web), Render/Railway (API). Variables de entorno. Base de datos staging. |

**Sprint Total**: 18 pts

---

## 3. Definición de Ready & Done

### Definition of Ready (para entrar a sprint)
- Historia escrita con formato "Como… quiero… para…"
- Criterios de aceptación claros (mínimo 3)
- Dependencias técnicas identificadas
- Diseño UI/UX aprobado (si aplica)
- Estimación en story points consensuada

### Definition of Done (para salir de sprint)
- Código mergeado en `main` vía PR revisado
- Tests unitarios pasando (cobertura > 70%)
- Tests de integración para el flujo crítico
- Documentación técnica actualizada (README, ADR si aplica)
- Desplegado en staging y validado por QA/PO
- No deuda técnica crítica pendiente

---

## 4. Roles asignados (ilustrativo)

| Rol | Responsabilidad en el MVP |
|-----|---------------------------|
| **Product Owner** | Priorizar backlog, validar criterios de aceptación, definir mockups |
| **Scrum Master** | Facilitar ceremonias, eliminar bloqueos, métricas de sprint |
| **Backend Dev (Fastify)** | API, DB, integraciones (Stripe, Maps, Email) |
| **Frontend Dev (Next.js)** | Web cliente, panel admin, landing, chat web |
| **Mobile Dev (React Native)** | App iOS/Android, push notifications, chat móvil |
| **DevOps / QA** | CI/CD, Docker, staging, tests E2E, Lighthouse |

---

## 5. Métricas de seguimiento (por sprint)

- **Velocity**: puntos completados / sprint
- **Burndown**: progreso diario dentro del sprint
- **Escaped defects**: bugs encontrados en staging
- **NPS técnico**: deuda técnica documentada en ADRs

---

*Backlog generado para fines ilustrativos del desarrollo del MVP. Prioridades y estimaciones son orientativas.*
