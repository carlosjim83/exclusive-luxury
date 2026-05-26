# Plan de Gestión de las Comunicaciones — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Planificación |
| **Fecha** | 2026-05-26 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Comunicaciones |

## 2. Objetivo del Plan

Garantizar que la información fluye de manera oportuna, completa y precisa entre todos los interesados del proyecto, evitando malentendidos, duplicidades y bloqueos por falta de información.

## 3. Análisis de Necesidades de Comunicación

| Interesado | Información que necesita | Frecuencia | Formato | Emisor |
|------------|-------------------------|------------|---------|--------|
| Patrocinador / Inversores | Avance, métricas, riesgos, decisiones estratégicas | Mensual | Informe ejecutivo + reunión | Director |
| Director del Proyecto | Estado de todas las áreas, bloqueos, desviaciones | Diaria | Dashboard + reuniones semanales | Todo el equipo |
| Equipo tech | Backlog, prioridades, dependencias técnicas | Diaria | Stand-up + Jira/Notion | CTO |
| Shoppers | Citas, protocolos, feedback, novedades de marcas | Semanal | App interna + chat grupal | Operations |
| Clientes miembros | Confirmaciones, recordatorios, ofertas exclusivas | Según interacción | App + email + WhatsApp | Customer Success |
| Marcas de lujo | Ventas, stock, eventos, reportes | Mensual | Email + reunión presencial | Partnerships |
| Reguladores | Cumplimiento, auditorías, incidencias | Según requerimiento | Documentación formal | Legal |
| Medios / Influencers | Noticias, acceso exclusivo, contenido | Eventos + campañas | Press kit + eventos | Marketing |

## 4. Plan de Comunicación Interna

### 4.1 Reuniones Regulares

| Reunión | Participantes | Frecuencia | Duración | Objetivo | Medio |
|---------|---------------|------------|----------|----------|-------|
| Daily stand-up | Tech team (CTO + devs + QA) | Diaria | 15 min | Sincronización, bloqueos | Slack huddle / Zoom |
| Weekly sync | Director + CTO + Ops + Marketing + Partnerships | Semanal | 45 min | Estado global, KPIs, decisiones | Zoom / Presencial |
| Sprint review | Tech team + Director + Ops | Cada 2 semanas | 60 min | Demo funcionalidades, feedback | Zoom |
| Sprint retrospective | Tech team | Cada 2 semanas | 30 min | Mejora de proceso | Zoom |
| Monthly board | Director + Patrocinador + Inversores clave | Mensual | 90 min | Métricas, riesgos, aprobaciones | Presencial |
| All-hands | Todo el equipo | Trimestral | 60 min | Visión, celebración, Q&A | Presencial |

### 4.2 Canales de Comunicación

| Canal | Uso | Herramienta propuesta | Acceso |
|-------|-----|----------------------|--------|
| Chat instantáneo | Duda rápida, coordinación diaria | Slack | Todo el equipo |
| Videollamadas | Reuniones, demos, entrevistas | Zoom / Google Meet | Todo el equipo |
| Gestión de tareas | Backlog, asignaciones, seguimiento | Jira / Linear / Notion | Equipo interno |
| Documentación | Wikis, manuales, procesos | Notion / Confluence | Equipo interno |
| Email formal | Comunicaciones externas, contratos | Gmail / Google Workspace | Director, Legal, Partnerships |
| App interna shoppers | Citas, notificaciones, rating | Propio (panel admin) | Shoppers |

### 4.3 Flujo de Escalado

```
Nivel 1: Equipo operativo (resuelve en < 2h)
    ↓ No resuelto
Nivel 2: Manager de área (resuelve en < 24h)
    ↓ No resuelto
Nivel 3: Director del Proyecto (resuelve en < 48h)
    ↓ No resuelto
Nivel 4: Patrocinador / Junta (decisión estratégica)
```

## 5. Plan de Comunicación Externa

### 5.1 Clientes Miembros

| Tipo de mensaje | Canal | Frecuencia | Emisor |
|-----------------|-------|------------|--------|
| Bienvenida / onboarding | Email + App | Al alta | Customer Success (automático) |
| Confirmación de cita | App + WhatsApp | Al reservar | Plataforma (automático) |
| Recordatorio de cita | App + WhatsApp | 24h antes | Plataforma (automático) |
| Resumen post-visita | Email + App | < 2h después del shopper | Plataforma (automático) |
| Novedades y ofertas exclusivas | Email | Semanal | Marketing |
| Encuesta NPS | Email + App | Mensual | Customer Success |

### 5.2 Marcas de Consignación

| Tipo de mensaje | Canal | Frecuencia | Emisor |
|-----------------|-------|------------|--------|
| Reporte de ventas | Email + dashboard | Mensual | Partnerships |
| Evento de colección | Email + llamada | Trimestral | Partnerships |
| Devolución de stock | Email + app interna | Según contrato | Operations |
| Propuesta de nueva marca | Email + reunión | Según pipeline | Partnerships |

### 5.3 Medios de Comunicación y Público

| Tipo de mensaje | Canal | Momento | Responsable |
|-----------------|-------|---------|-------------|
| Comunicado de prensa (pre-lanzamiento) | RR.PP. + email medios | M7 | Marketing |
| Nota de lanzamiento Madrid | Medios digitales + prensa lujo | M9 | Marketing |
| Nota de lanzamiento Barcelona | Medios digitales + prensa lujo | M12 | Marketing |
| Entrevistas exclusivas | Medios seleccionados | M9-M12 | Director + Marketing |
| Contenido redes sociales | Instagram, LinkedIn | Continuo | Marketing |

## 6. Gestión de la Información

### 6.1 Clasificación

| Nivel | Descripción | Ejemplo | Acceso |
|-------|-------------|---------|--------|
| Público | Web, prensa, redes | Landing page, press kit | Público |
| Interno | Equipo y colaboradores | Backlog, manuales, métricas | Equipo |
| Confidencial | Datos sensibles | Contratos, finanzas, datos clientes | Director + Legal |
| Estrictamente confidencial | Información financiera detallada | Cap table, términos inversores | Patrocinador + Director |

### 6.2 Almacenamiento

| Tipo | Ubicación | Backup |
|------|-----------|--------|
| Código fuente | GitHub (privado) | GitHub + backup semanal |
| Documentación | Notion / Google Drive | Export automático semanal |
| Contratos | Google Drive (carpeta Legal) | Cifrado + backup mensual |
| Datos clientes | Base de datos propia (PostgreSQL) | Backup diario encriptado |
| Correos | Google Workspace | Retención 7 años |

## 7. Acciones Pendientes

- [ ] Crear workspace en Slack / Teams con canales estructurados.
- [ ] Configurar Notion / Confluence como repositorio central de documentación.
- [ ] Definir plantillas de informes mensuales para inversores.
- [ ] Preparar kit de prensa (dossier, fotos, bio fundadores, FAQs).
- [ ] Establecer calendario editorial para redes sociales (3 meses pre-lanzamiento).

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-26  
**Versión**: 1.0 — Fase de Planificación
