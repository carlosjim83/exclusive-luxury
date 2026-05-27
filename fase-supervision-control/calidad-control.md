# Control de la Calidad — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Calidad |

## 2. Objetivo

Verificar que los entregables y el servicio operativo cumplen los estándares de calidad premium definidos en la planificación, analizar las métricas de calidad (NPS, CSAT, defectos) y documentar los resultados de inspección de las visitas domiciliarias.

## 3. Mediciones de Control de Calidad

### 3.1 Métricas del Servicio (M5-M9)

| Métrica | Objetivo | Valor Actual | Tendencia | Estado |
|---------|----------|--------------|-----------|--------|
| **NPS** | > 50 | **52** | Subiendo (M7: 38; M8: 46; M9: 52) | Verde |
| **CSAT post-visita** | > 4,5/5 | **4,4/5** | Estable (4,3-4,5) | Amarillo |
| **Rating del shopper** | > 4,5/5 | **4,6/5** | Estable | Verde |
| **Churn mensual** | < 5% | **4,2%** | Bajando (5,8% en M8) | Verde |
| **Puntualidad de visitas** | > 95% | **93%** | Mejorando (89% en M7) | Amarillo |
| **Tasa de incidencias** | < 2% | **2,1%** | Subiendo ligeramente | Amarillo |
| **Tiempo reserva a confirmación** | < 5 min | **3,2 min** | Estable | Verde |

### 3.2 Métricas de la Plataforma (M1-M9)

| Métrica | Objetivo | Valor Actual | Estado |
|---------|----------|--------------|--------|
| Uptime | > 99,5% | 99,7% | Verde |
| Tiempo de carga (homepage) | < 2s | 1,4s | Verde |
| Crash rate app | < 0,5% | 0,3% | Verde |
| Bugs críticos abiertos | 0 | 0 | Verde |
| Bugs graves abiertos | < 5 | 3 | Amarillo |

## 4. Entregables Validados por Calidad

| Entregable | Inspección / QA | Defectos Encontrados | Resueltos | Estado |
|------------|-----------------|---------------------|-----------|--------|
| Web responsive | Lighthouse + manual | 4 leves (contrastes) | 4 | Aprobado |
| App iOS / Android | TestFlight + Play Console | 2 graves (reserva offline), 8 leves | 2 graves, 6 leves | Aprobado con observaciones |
| Panel admin | Testing funcional | 1 grave (filtro fechas), 5 leves | 1 grave, 5 leves | Aprobado |
| Manual de calidad | Revisión por Operations | 0 | — | Aprobado |
| Shoppers certificados | Examen + shadowing | 1 suspendido (repetición) | 1 | 10/10 aprobados |
| Protocolo visita | Auditoría M8-M9 | 2 desviaciones menores (presentación) | 2 | Aprobado |

## 5. Análisis de Defectos e Incidencias

| Categoría | Total M5-M9 | Tasa | Acción Correctiva | Responsable |
|-----------|-------------|------|-------------------|-------------|
| Quejas de puntualidad | 14 | 7,0% de visitas | Recordatorio automático 30 min antes; GPS tracking shopper | Operations |
| Fallo técnico reserva | 3 | 1,5% | Fix bug sincronización calendario; test de integración | CTO |
| Prenda dañada / equivocada | 2 | 1,0% | Checklist de inspección pre-visita reforzado | Quality |
| Quejas de trato / protocolo | 4 | 2,0% | Coaching individual a shopper; re-visita gratuita | Operations |
| Cancelaciones de última hora | 6 | 3,0% | Política <48h reforzada; penalización suave aplicada | Operations |

**Tasa global de incidencias**: 2,1% (objetivo < 2%). La mayoría son leves; ninguna crítica post-M9.

## 6. Resultados de Inspecciones de Visita (Auditoría M9)

| Elemento Inspeccionado | Muestra | Cumple | No Cumple | % Cumplimiento |
|------------------------|---------|--------|-----------|----------------|
| Presentación personal (vestimenta, higiene) | 20 visitas | 19 | 1 | 95% |
| Puntualidad (>5 min antes) | 20 visitas | 17 | 3 | 85% |
| Protocolo de entrada y despedida | 20 visitas | 20 | 0 | 100% |
| Duración 60-90 min | 20 visitas | 18 | 2 | 90% |
| Uso de iPad / catálogo digital | 20 visitas | 20 | 0 | 100% |
| Resumen y próximos pasos claros | 20 visitas | 19 | 1 | 95% |

## 7. Acciones Pendientes

- [ ] Lanzar plan de mejora de puntualidad: GPS + recordatorio push 30 min antes; objetivo M10: > 95%.
- [ ] Reducir tasa de incidencias a < 1,8% en M10 mediante coaching shopper mensual.
- [ ] Subir CSAT a 4,5/5 con encuesta post-visita más corta y incentivo (cupón 50€).
- [ ] Resolver 3 bugs graves restantes del panel admin antes del lanzamiento Barcelona.
- [ ] Programar auditoría de calidad de visitas Barcelona pre-lanzamiento (M11).

---

**Documento elaborado por**: Gestor de Calidad  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Calidad](../fase-planificacion/plan-gestion-calidad.md) · [Supuestos y Restricciones](../fase-inicio/supuestos-restricciones.md)
