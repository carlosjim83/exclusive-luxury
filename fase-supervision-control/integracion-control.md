# Control de la Integración — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Director del Proyecto |
| **Documento** | Monitor and Control Project Work + Perform Integrated Change Control |

## 2. Objetivo

Revisar de forma integrada el rendimiento del proyecto tras el lanzamiento en Madrid (M9) y antes del cierre de Año 1, comparando los tres baselines (alcance, tiempo, coste) contra los valores reales, gestionando los cambios aprobados por el CCB y actualizando las previsiones de cierre.

## 3. Resumen Integrado de Rendimiento

| Parámetro | Baseline | Real / Actual | Desviación | Estado |
|-----------|----------|---------------|------------|--------|
| **Alcance** | 10 entregables MVP | 7 validados, 3 en curso | — | Verde |
| **Tiempo** | Madrid M9, Barcelona M12 | Madrid M9+3d, Barcelona M12 | +3 días Madrid | Verde |
| **Coste acumulado (AC)** | 494.000€ a M9 | 508.800€ a M9 | +2,8% | Amarillo |
| **Valor ganado (EV)** | 495.000€ a M9 | 495.000€ | 0% | Verde |
| **Ingresos acumulados** | 100.000€ a M9 | 96.000€ a M9 | -4,0% | Amarillo |
| **Beneficio Año 1 (previsión)** | 24.000€ | 18.500€ (est.) | -5.500€ | Amarillo |

## 4. Decisiones del Comité de Control de Cambios (CCB)

| Reunión CCB | Fecha | Cambios tratados | Aprobados | Rechazados | Diferidos |
|-------------|-------|------------------|-----------|------------|-----------|
| CCB-01 | M3 | Ampliación reserva cloud (+1.200€/mes) | 1 | 0 | 0 |
| CCB-02 | M6 | Contratación freelance mobile de refuerzo (RIE-12) | 1 | 0 | 0 |
| CCB-03 | M8 | Solicitud Avatar 3D (RIE-xx nueva) | 0 | 1 | 0 |
| CCB-04 | M9 | Ajuste landing page marketing (+3.000€) | 1 | 0 | 0 |
| **TOTAL** | — | **5 SC** | **3** | **1** | **1** |

**Cambios aprobados acumulados**: +18.480€ (desviación presupuestaria integrada +2,8%).

## 5. Análisis de Desviaciones Integradas

| Desviación | Causa raíz | Impacto integrado | Acción correctora | Estado |
|------------|------------|-------------------|-------------------|--------|
| Coste tech +4,2% | Mayor consumo cloud y horas extra sprint M7-M8 | AC supera PV en 14.800€ | Reasignación de 2.000€ desde marketing a tech aprobada por CCB | Mitigado |
| Ingresos M8-M9 -4% | Conversión de lista de espera más lenta de lo previsto | Flujo de caja se estrecha | Campaña embajadores intensificada; descuento 10% primeros 50 miembros aplicado | En curso |
| Retraso Madrid +3d | Bug crítico en pasarela de pagos detectado en soft launch | Hito M9 cumplido en M9+3d | Fix priorizado; QA reforzado; no impacta Barcelona | Cerrado |

## 6. Pronósticos (Forecast)

| Métrica | Fórmula / Cálculo | Valor | Interpretación |
|---------|-------------------|-------|----------------|
| **EAC** | BAC / CPI = 660.000 / 0,973 | **678.480€** | Coste final estimado +2,8% sobre BAC |
| **VAC** | BAC - EAC | **-18.480€** | Se consume margen de beneficio; el proyecto seguirá siendo rentable si se contiene el crecimiento de costes en M10-M12 |
| **Fecha fin estimada** | — | **M12+2d** | Barcelona se mantiene en M12; riesgo de +2d por acumulación de micro-retrasos |
| **Beneficio final estimado** | Ingresos 684K - EAC 678,5K | **~5.500€** | Escenario conservador; si ingresos se recuperan, beneficio podría alcanzar 15.000€ |

## 7. Acciones Pendientes

- [ ] Convocar CCB-05 tras cierre M10 para revisar forecasts y decidir sobre reserva de contingencia remanente (~47.500€).
- [ ] Actualizar líneas base a versión 1.1 con cambios aprobados hasta M9.
- [ ] Preparar informe ejecutivo M10 para Patrocinador con escenarios optimista/base/pesimista.
- [ ] Documentar lección aprendida del bug de pasarela como caso de estudio para Año 2.
- [ ] Revisar integración entre planes de calidad y operativa tras incidencias de shopper en Madrid.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Integración](../fase-planificacion/plan-gestion-integracion.md) · [Plan Gestión Costes](../fase-planificacion/plan-gestion-costes.md) · [Plan Gestión Tiempo](../fase-planificacion/plan-gestion-tiempo.md)
