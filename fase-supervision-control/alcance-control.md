# Control del Alcance — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Director del Proyecto / Gestor de Alcance |

## 2. Objetivo

Validar que los entregables completados cumplen los criterios de aceptación definidos en la línea base del alcance, controlar el scope creep y documentar las desviaciones de alcance detectadas hasta el cierre del lanzamiento de Madrid.

## 3. Verificación del Alcance (Validate Scope)

| Entregable | Fecha Plan | Fecha Real | Criterios de Aceptación | Estado | Validado por |
|------------|------------|------------|------------------------|--------|--------------|
| ENT-01 Plataforma web | M8 | M8+1d | Lighthouse >80; 0 errores críticos; responsive | Cumple | QA + CTO |
| ENT-02 App móvil | M9 | M9+3d | Publicada en stores; 0 crashes; flujo reserva operativo | Cumple | QA + CTO |
| ENT-03 Panel admin + CRM + pagos | M8 | M8+2d | 100% endpoints; pasarela operativa; RGPD ok | Cumple | QA + Legal |
| ENT-04 Red 10 shoppers | M6 | M6 | 10 contratos firmados; examen >80%; shadowing aprobado | Cumple | Operations |
| ENT-05 Acuerdos consignación | M7 | M7+5d | 12 marcas firmadas (objetivo 10-15) | Cumple | Partnerships |
| ENT-06 Lanzamiento Madrid | M9 | M9+3d | 100 miembros; plataforma estable; shoppers operativos | Cumple | Director |
| ENT-07 Lanzamiento Barcelona | M12 | — | Pendiente de ejecución M10-M12 | En curso | — |
| ENT-08 200 miembros activos | M12 | — | 105 miembros a M9 (52% del objetivo) | En curso | — |
| ENT-09 Manual de calidad | M5 | M5 | Aprobado por Operations; versión 1.0 | Cumple | Quality |
| ENT-10 Campaña lanzamiento | M8-9 | M8-9 | Evento ejecutado; embajadores activos; press kit difundido | Cumple | Marketing |

**Tasa de aceptación de entregables**: 8/8 validados = 100% (2 aún no terminados).

## 4. Control del Alcance (Control Scope) — Análisis de Scope Creep

| Solicitud | Origen | Impacto | Decisión | Documento |
|-----------|--------|---------|----------|-----------|
| Funcionalidad "lista de deseos" en app | Marketing | +2 sem backend | **Rechazada** | SC-04; aplazada a Año 2 |
| Avatar 3D virtual para clientes | Patrocinador | +45.000€; +2 meses | **Rechazada** | SC-08; fuera de MVP por restricción explícita |
| Ampliación a 12 marcas (vs. 10-15 plan) | Partnerships | +1.500€ negociación | **Aprobada** | SC-06; dentro de rango baseline |
| Dashboard de ventas para marcas | Partnerships | +1 sem; +800€ | **Aprobada** | SC-07; requisito implícito en contratos |
| App interna shoppers (notificaciones push) | Operations | +3.000€; +1 sem | **Aprobada** | SC-03; mejora operativa crítica |

**Scope creep controlado**: 5 solicitudes, 3 aprobadas (+5.300€), 2 rechazadas. Todas las aprobaciones pasaron por CCB o autorización delegada según umbral.

## 5. Análisis de Varianza de Alcance

| Métrica | Valor | Interpretación |
|---------|-------|----------------|
| Entregables aceptados / planificados | 8 / 10 | 80% del alcance validado; 20% pendiente de Barcelona y cierre |
| Paquetes de trabajo completados (EDT) | 42 / 52 | 80,8% de la EDT nivel 3 ejecutada |
| Solicitudes de cambio de alcance | 5 | 100% documentadas en Log de Cambios |
| Alcance aprobado vs. baseline original | +5.300€ | 0,8% del BAC; dentro del umbral de tolerancia (<1%) |
| Requisitos trazados y validados | 5/5 core | Trazabilidad completa REQ-01 a REQ-05 |

## 6. Acciones Pendientes

- [ ] Validar ENT-07 (Barcelona operativa) en la reunión de cierre de fase M12 con checklist de replicación.
- [ ] Auditar que los 2 entregables pendientes no incorporen scope creep no documentado.
- [ ] Actualizar diccionario de la EDT v1.1 con los paquetes de trabajo adicionales aprobados (app interna shoppers, dashboard marcas).
- [ ] Revisar trazabilidad de requisitos post-M10 tras introducción de métricas de marca en dashboard.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Alcance](../fase-planificacion/plan-gestion-alcance.md) · [Declaración Alcance Preliminar](../fase-inicio/declaracion-alcance-preliminar.md)
