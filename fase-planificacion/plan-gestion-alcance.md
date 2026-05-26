# Plan de Gestión del Alcance — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Planificación |
| **Fecha** | 2026-05-26 |
| **Versión** | 1.0 |
| **Responsable** | Director del Proyecto / Gestor de Alcance |

## 2. Objetivo del Plan

Este documento define cómo se gestionará el alcance del proyecto desde su planificación hasta su cierre. Incluye la EDT (Estructura de Desglose de Trabajo), el diccionario de la EDT, criterios de aceptación detallados, y el proceso formal de control de cambios de alcance.

## 3. Enfoque de Gestión del Alcance

- **Planificación bottom-up**: El alcance se descompone en entregables y actividades trabajables.
- **Validación por fases**: Cada entregable del MVP (Madrid primero, Barcelona después) se valida antes de continuar.
- **Control estricto**: Todo cambio de alcance requiere solicitud formal, análisis de impacto y aprobación del comité de cambios.
- **Baseline**: El alcance aprobado en este documento será la línea base contra la que se medirá el desempeño.

## 4. Línea Base del Alcance

### 4.1 Descripción del Producto

Plataforma tecnológica + operativa de personal shopping de lujo a domicilio, lanzada en Madrid (mes 0-9) y Barcelona (mes 6-12), con modelo de membresías, consignación con marcas, y red de 10 personal shoppers.

### 4.2 Entregables Principales

| ID | Entregable | Fecha Objetivo |
|----|------------|----------------|
| ENT-01 | Plataforma web responsive operativa | Mes 8 |
| ENT-02 | App móvil iOS/Android operativa | Mes 9 |
| ENT-03 | Panel de administración + CRM + pasarela de pagos | Mes 8 |
| ENT-04 | Red de 10 shoppers reclutados y formados | Mes 6 |
| ENT-05 | Acuerdos de consignación con 10-15 marcas | Mes 7 |
| ENT-06 | Lanzamiento operativo en Madrid | Mes 9 |
| ENT-07 | Lanzamiento operativo en Barcelona | Mes 12 |
| ENT-08 | 200 miembros activos pagados | Mes 12 |
| ENT-09 | Manual de calidad y protocolos de servicio | Mes 5 |
| ENT-10 | Campaña de lanzamiento y programa de embajadores | Mes 8-9 |

## 5. EDT — Estructura de Desglose de Trabajo

### 5.1 Nivel 0: Proyecto

```
1.0 Personal Shopping Luxury — MVP Año 1
```

### 5.2 Nivel 1: Fases / Áreas

```
1.1 Gestión del Proyecto
1.2 Plataforma Tecnológica
1.3 Operativa de Personal Shopping
1.4 Alianzas y Consignación
1.5 Marketing y Lanzamiento
1.6 Legal, Calidad y Cumplimiento
```

### 5.3 Nivel 2: Entregables / Paquetes de Trabajo

```
1.1 Gestión del Proyecto
   1.1.1 Acta de constitución y gobierno
   1.1.2 Planificación integrada (alcance, tiempo, costes, calidad, riesgos)
   1.1.3 Seguimiento y control de proyectos
   1.1.4 Cierre de fase y lecciones aprendidas

1.2 Plataforma Tecnológica
   1.2.1 Arquitectura y diseño técnico
   1.2.2 Backend y API
   1.2.3 Frontend web responsive
   1.2.4 App móvil iOS
   1.2.5 App móvil Android
   1.2.6 Panel de administración
   1.2.7 CRM integrado
   1.2.8 Pasarela de pagos
   1.2.9 Infraestructura, hosting y seguridad
   1.2.10 Testing y QA

1.3 Operativa de Personal Shopping
   1.3.1 Diseño del perfil de shopper ideal
   1.3.2 Reclutamiento y selección (10 shoppers)
   1.3.3 Formación y certificación de shoppers
   1.3.4 Diseño de procesos de visita domiciliaria
   1.3.5 Sistema de booking y calendarización
   1.3.6 Logística de visitas (vehículos, rutas)
   1.3.7 Atención al cliente y concierge
   1.3.8 Sistema de rating y feedback post-visita

1.4 Alianzas y Consignación
   1.4.1 Identificación de marcas objetivo
   1.4.2 Negociación de contratos de consignación
   1.4.3 Integración de catálogo de marcas en plataforma
   1.4.4 Trazabilidad y gestión de inventario en consignación
   1.4.5 Eventos trimestrales de presentación de colecciones

1.5 Marketing y Lanzamiento
   1.5.1 Branding, identidad visual y material corporativo
   1.5.2 Landing page y pre-lanzamiento
   1.5.3 Estrategia de adquisición de miembros (Madrid)
   1.5.4 Estrategia de adquisición de miembros (Barcelona)
   1.5.5 Programa de embajadores e influencers
   1.5.6 PR y relaciones con medios
   1.5.7 Eventos de lanzamiento presenciales

1.6 Legal, Calidad y Cumplimiento
   1.6.1 Asesoría legal y estructura societaria
   1.6.2 Contratos: shoppers, marcas, clientes
   1.6.3 Cumplimiento RGPD y protección de datos
   1.6.4 Manual de calidad del servicio
   1.6.5 Seguros (RC, mercancía, vehículos)
   1.6.6 Auditoría de cumplimiento pre-lanzamiento
```

## 6. Diccionario de la EDT (Extracto)

| ID | Paquete de Trabajo | Descripción | Responsable | Entregable | Criterios de Aceptación |
|----|--------------------|-------------|-------------|------------|------------------------|
| 1.2.2 | Backend y API | Servidor, base de datos, APIs REST para app, web y admin. | CTO / Backend Lead | API documentada y desplegada | 100% endpoints funcionales;Swagger/OpenAPI;tests >80% cobertura |
| 1.2.3 | Frontend web responsive | Landing, perfil cliente, reserva de citas, catálogo marcas. | Frontend Lead | Web desplegada | Lighthouse >80 en performance y accesibilidad; responsive en 3 breakpoints |
| 1.2.4 | App móvil iOS | Swift / Flutter; reserva, chat, historial. | Mobile Lead | App en TestFlight/App Store | Review de Apple aprobada; sin crashes críticos |
| 1.2.5 | App móvil Android | Kotlin / Flutter; mismas funcionalidades que iOS. | Mobile Lead | App en Play Store (internal) | Review de Google aprobada; sin ANR |
| 1.3.2 | Reclutamiento shoppers | Headhunting, screening, entrevistas, selección final. | HR / Talent | 10 shoppers contratados | 5 por ciudad; background check; contrato firmado |
| 1.3.3 | Formación shoppers | Curso de 40h: marca, protocolo, CRM, venta, atención. | Operations Manager | Shoppers certificados | Examen teórico >80%; shadowing de 3 visitas aprobadas |
| 1.4.2 | Negociación contratos consignación | Acuerdos con 10-15 marcas de lujo. | Partnerships Manager | Contratos firmados | Cláusulas de margen, devolución, seguro, exclusividad territorial |
| 1.5.3 | Adquisición miembros Madrid | Campañas digitales, eventos, referidos. | Marketing Manager | 100 miembros Madrid | CAC <400€; conversión >3% |
| 1.5.4 | Adquisición miembros Barcelona | Campañas digitales, eventos, referidos. | Marketing Manager | 100 miembros Barcelona | CAC <400€; conversión >3% |
| 1.6.3 | Cumplimiento RGPD | Registro de actividades, consentimientos, DPO. | Legal / DPO | Documentación RGPD | Auditoría externa sin hallazgos críticos |

## 7. Criterios de Aceptación Detallados por Entregable

### ENT-01: Plataforma web responsive
- Todas las funcionalidades core operativas (landing, registro, perfil, reserva, pago).
- Responsive en desktop, tablet, mobile.
- Lighthouse performance >80.
- 0 errores críticos en testing.

### ENT-02: App móvil iOS/Android
- Publicación en App Store y Play Store (o distribución interna para MVP).
- 0 crashes en las primeras 1000 sesiones.
- Rating promedio >4.0 en stores (si es pública).

### ENT-04: Red de 10 shoppers
- 5 shoppers por ciudad.
- Contrato firmado y background check superado.
- Formación certificada (examen + shadowing).
- Rating interno >4.5/5 en evaluación de prueba.

### ENT-08: 200 miembros activos
- 200 cuentas con membresía anual pagada y vigente.
- Distribución mínima: 80 Madrid, 80 Barcelona, 40 mixtos.
- Churn mensual <5%.

## 8. Matriz de Trazabilidad de Requisitos (Preliminar)

| ID Requisito | Descripción | Entregable | Criterio Aceptación | Estado |
|--------------|-------------|------------|---------------------|--------|
| REQ-01 | El cliente puede registrarse y pagar membresía | 1.2.3, 1.2.8 | Pago procesado en <30s; confirmación por email | Pendiente |
| REQ-02 | El cliente puede reservar una visita con un shopper | 1.2.3, 1.2.4, 1.3.5 | Booking con disponibilidad en tiempo real; confirmación <5s | Pendiente |
| REQ-03 | El shopper puede acceder al perfil y medidas del cliente | 1.2.6, 1.2.7 | CRM muestra historial completo; carga <2s | Pendiente |
| REQ-04 | La marca puede ver reportes de ventas de consignación | 1.2.6, 1.4.4 | Dashboard con filtros por fecha y ciudad; export CSV/PDF | Pendiente |
| REQ-05 | El cliente puede valorar la visita y al shopper | 1.2.3, 1.3.8 | Rating 1-5 + comentario; visible para operations | Pendiente |

## 10. Acciones Pendientes para Ejecución

- [ ] Desarrollar EDT completa hasta nivel 4 (actividades individuales) para los paquetes críticos.
- [ ] Validar EDT con el equipo técnico y operativo.
- [ ] Definir herramienta de gestión de alcance (Jira, Linear, o Notion).
- [ ] Comunicar la línea base del alcance a todos los interesados clave.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-26  
**Versión**: 1.0 — Fase de Planificación
