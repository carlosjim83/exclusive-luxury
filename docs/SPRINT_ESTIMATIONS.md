# Estimaciones de Sprint — Personal Shopping Luxury

> **Metodología**: SCRUM · Sprints de 2 semanas · Story Points (secuencia modificada de Fibonacci: 1, 2, 3, 5, 8, 13)  
> **Team size ilustrativo**: 3 devs (1 Backend, 1 Frontend, 1 Mobile/DevOps)  
> **Capacidad teórica por sprint**: ~20-24 story points (considerando ceremonias, bugs imprevistos y deuda técnica)

---

## 1. Resumen de Velocity por Sprint

| Sprint | Nombre | Puntos Planificados | Puntos Completados (ilustrativo) | Velocity |
|--------|--------|---------------------|----------------------------------|----------|
| 1 | Cimientos | 19 | 19 | 19 |
| 2 | API Core & Landing | 21 | 18 | 18 |
| 3 | Catálogo & Shoppers | 16 | 16 | 16 |
| 4 | Booking v1 | 21 | 18 | 18 |
| 5 | Pagos | 19 | 19 | 19 |
| 6 | Admin & CRM | 19 | 15 | 15 |
| 7 | Chat & Notificaciones | 19 | 16 | 16 |
| 8 | App Móvil v1 | 18 | 14 | 14 |
| 9 | App Móvil v2 & Chat | 19 | 15 | 15 |
| 10 | Operativa & Lanzamiento | 18 | 16 | 16 |
| **Total MVP** | | **189** | **166** | **Avg: 16.6** |

---

## 2. Desglose por Sprint

### Sprint 1 — Cimientos (Semanas 1-2)
**Goal**: Repo funcional, login/registro operativo y base de datos local.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H01 Monorepo con workspaces | 5 | DevOps | Medio |
| H02 Docker Compose local | 3 | DevOps | Bajo |
| H03 CI/CD básico en GitHub Actions | 3 | DevOps | Medio |
| H04 Registro con email y contraseña | 5 | Backend | Medio |
| H05 Inicio de sesión | 3 | Backend | Bajo |
| **Total** | **19** | | |

**Notas**: Sprint de setup. Alta probabilidad de completarse al 100% porque no hay dependencias externas complejas.

---

### Sprint 2 — API Core & Landing (Semanas 3-4)
**Goal**: Landing publicada, API REST base y perfil editable.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H06 Prisma ORM con migraciones | 5 | Backend | Medio |
| H07 Landing page premium | 8 | Frontend | Alto (diseño) |
| H08 Perfil básico editable | 3 | Frontend | Bajo |
| H09 API REST de usuarios y perfiles | 5 | Backend | Medio |
| **Total** | **21** | | |

**Notas**: H07 (Landing) puede desbordar si el diseño no está cerrado. **Buffer**: reescalar H08 a 2 pts si H07 se alarga.

---

### Sprint 3 — Catálogo & Shoppers (Semanas 5-6)
**Goal**: Mostrar marcas y shoppers; dar de alta shoppers desde admin.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H10 Catálogo de marcas de lujo | 5 | Backend+Frontend | Medio |
| H11 Alta de personal shoppers | 5 | Backend+Frontend | Medio |
| H12 Perfil detallado de shopper | 3 | Frontend | Bajo |
| H13 Seed de datos de demo | 3 | Backend | Bajo |
| **Total** | **16** | | |

**Notas**: Sprint relativamente seguro. Las historias son CRUDs estándar.

---

### Sprint 4 — Booking v1 (Semanas 7-8)
**Goal**: Un cliente puede reservar una cita con un shopper en una fecha concreta.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H14 Solicitar cita con shopper | 8 | Frontend+Backend | Alto (flujo complejo) |
| H15 Definir disponibilidad semanal | 5 | Backend+Frontend | Medio |
| H16 Mapa de cobertura del shopper | 5 | Frontend+Backend | Medio (Maps API) |
| H17 Bloqueo atómico de slots | 3 | Backend | Medio |
| **Total** | **21** | | |

**Notas**: H14 es la historia más compleja del MVP. Si se desborda, mover H17 al Sprint 5.

---

### Sprint 5 — Pagos (Semanas 9-10)
**Goal**: Cobrar membresías anuales y visitas puntuales vía Stripe.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H18 Pago de membresía anual | 8 | Backend | Alto (Stripe, webhooks) |
| H19 Pago de visita puntual | 5 | Backend | Medio |
| H20 Panel de transacciones | 3 | Frontend | Bajo |
| H21 Email de confirmación de pago | 3 | Backend | Bajo |
| **Total** | **19** | | |

**Notas**: Stripe y webhooks son puntos de fricción comunes. Recomendable usar Stripe Test Mode + webhook local con Stripe CLI.

---

### Sprint 6 — Admin & CRM (Semanas 11-12)
**Goal**: Equipo interno gestiona el negocio; clientes tienen perfiles enriquecidos.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H22 Dashboard con KPIs | 8 | Frontend | Alto (datos agregados) |
| H23 Gestión de citas desde admin | 5 | Frontend+Backend | Medio |
| H24 Ficha completa de cliente | 3 | Frontend | Bajo |
| H25 Preferencias de estilo | 3 | Frontend+Backend | Bajo |
| **Total** | **19** | | |

**Notas**: H22 requiere queries agregadas eficientes. Monitorear rendimiento en PostgreSQL.

---

### Sprint 7 — Chat & Notificaciones (Semanas 13-14)
**Goal**: Comunicación fluida cliente-shopper y recordatorios automáticos.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H26 Chat cliente-shopper | 8 | Backend+Frontend | Alto (WebSocket, estado) |
| H27 Recordatorios de cita | 3 | Backend | Bajo |
| H28 Notificaciones push para shoppers | 5 | Backend+Mobile | Medio (FCM) |
| H29 Emails transaccionales robustos | 3 | Backend | Bajo |
| **Total** | **19** | | |

**Notas**: H26 es la segunda historia más compleja. Socket.io requiere manejo de reconexiones y estado de "escribiendo".

---

### Sprint 8 — App Móvil v1 (Semanas 15-16)
**Goal**: App funcional con login, reservas y historial.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H30 Reservar citas desde app | 8 | Mobile | Alto (RN setup + flujo) |
| H31 Historial de visitas en app | 5 | Mobile | Medio |
| H32 Push notifications en app | 5 | Mobile+Backend | Medio (FCM RN) |
| **Total** | **18** | | |

**Notas**: Primer sprint mobile. Curva de aprendizaje de React Native + Expo. Velocidad esperada menor.

---

### Sprint 9 — App Móvil v2 & Chat (Semanas 17-18)
**Goal**: Chat móvil, catálogo en app y gestión de suscripción.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H33 Chat desde app móvil | 8 | Mobile | Alto (Socket.io RN) |
| H34 Catálogo de marcas en app | 3 | Mobile | Bajo |
| H35 Gestión de membresía en app | 5 | Mobile | Medio (Stripe mobile) |
| H36 Completar citas desde app shopper | 3 | Mobile | Bajo |
| **Total** | **19** | | |

**Notas**: H33 es crítica. Reutilizar lógica de chat web pero adaptar UI a mobile.

---

### Sprint 10 — Operativa & Lanzamiento (Semanas 19-20)
**Goal**: MVP estable, entorno de demo y web optimizada.

| Historia | Puntos | Área | Riesgo |
|----------|--------|------|--------|
| H37 Vista calendario operaciones | 5 | Frontend | Medio |
| H38 Informe semanal automático | 3 | Backend | Bajo |
| H39 SEO y performance web | 5 | Frontend | Medio (Lighthouse) |
| H40 Entorno de staging estable | 5 | DevOps | Medio |
| **Total** | **18** | | |

**Notas**: Sprint de cierre. Incluye bugfixing de sprints anteriores y preparación de demo.

---

## 3. Burndown Chart Ilustrativo (Sprint 4)

| Día | Puntos Restantes | Ideal | Notas |
|-----|------------------|-------|-------|
| 1 (planning) | 21 | 21 | Sprint planning, refinamiento |
| 2 | 19 | 17 | H14 inicio (flujo de reserva) |
| 3 | 16 | 15 | H14 avance, H15 inicio |
| 4 | 14 | 13 | H15 disponibilidad shopper |
| 5 | 12 | 11 | H14 integración con H15 |
| 6 | 10 | 9 | H16 inicio (Google Maps) |
| 7 | 8 | 7 | H16 avance, H17 inicio |
| 8 | 6 | 5 | H17 bloqueo atómico |
| 9 | 4 | 3 | Testing integración, bugfix |
| 10 (review) | 2 | 0 | Sprint review, demo |

---

## 4. Capacidad del Equipo (ilustrativo)

| Rol | Dedicación | SP / Sprint | Notas |
|-----|------------|-------------|-------|
| Backend Dev (Fastify) | 100% | 8-10 | API, DB, integraciones |
| Frontend Dev (Next.js) | 100% | 8-10 | Web, admin, landing |
| Mobile / DevOps | 100% | 6-8 | RN, Docker, CI/CD |
| **Total equipo** | | **22-28** | Con 10% de imprevistos = **20-24** |

---

## 5. Reglas de Planificación

1. **No sobrepasar 24 SP por sprint**. Si el backlog del sprint supera 24 pts, mover la historia de menor prioridad al siguiente sprint.
2. **1 historia High + 2-3 Medium por sprint** como mínimo. Asegura entregables de valor.
3. **Buffer del 15%** para bugfixing y deuda técnica. Si un sprint tiene 20 pts planificados, reservar ~3 pts de capacidad para imprevistos.
4. **Revisión de estimaciones en el Sprint Retrospective**. Ajustar velocity real tras 3 sprints.

---

## 6. Métricas de Seguimiento

| Métrica | Cómo medir | Objetivo |
|---------|------------|----------|
| **Velocity** | SP completados / sprint | Estabilizar en 18-20 |
| **Carryover** | SP no terminados que pasan al siguiente sprint | < 10% |
| **Escaped Defects** | Bugs encontrados en staging / producción | < 2 por sprint |
| **Cycle Time** | Días desde "In progress" hasta "Done" | < 5 días por historia |
| **Burndown Variance** | Diferencia entre ideal y real al final del sprint | ± 3 SP |

---

*Documento ilustrativo para simular la planificación SCRUM del MVP.*
