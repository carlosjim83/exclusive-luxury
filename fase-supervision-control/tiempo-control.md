# Control del Cronograma — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Director del Proyecto / Gestor de Tiempo |

## 2. Objetivo

Medir las desviaciones del cronograma respecto a la línea base temporal, calcular las métricas de desempeño (SV, SPI), actualizar las fechas de finalización previstas y documentar las acciones de compresión de plazo aplicadas.

## 3. Métricas de Desempeño del Cronograma

| Métrica | Valor | Fórmula | Estado |
|---------|-------|---------|--------|
| **Valor Ganado (EV)** | 495.000€ | — | — |
| **Valor Planificado (PV)** | 494.000€ | — | — |
| **Schedule Variance (SV)** | +1.000€ | EV - PV | Verde |
| **SPI** | 1,002 | EV / PV | Verde |
| **Retraso acumulado (días)** | +3 días | Suma retrasos - adelantos | Verde |
| **Retraso ruta crítica** | +3 días | Impacto en hito M9 | Amarillo |

## 4. Estado de Actividades Clave y Hitos

| ID | Actividad / Hito | Fecha Plan | Fecha Real / Prevista | Desviación (días) | Acción Tomada |
|----|------------------|------------|----------------------|-------------------|---------------|
| M-01 | Equipo tech contratado | M1 | M1 | 0 | — |
| M-02 | API base operativa | M3 | M3+2d | +2 | Refuerzo backend en sprint M3 |
| M-03 | 5 shoppers Madrid certificados | M5 | M5 | 0 | — |
| M-04 | 5 contratos consignación | M5 | M5+5d | +5 | Ampliación a 12 marcas negociada en paralelo |
| M-05 | App móvil en test interno | M6 | M6+4d | +4 | Freelance mobile contratado (RIE-12) |
| M-06 | Soft launch Madrid (50 beta) | M8 | M8 | 0 | — |
| M-07 | **Hard launch Madrid** | **M9** | **M9+3d** | **+3** | QA reforzado; bug pasarela priorizado; fix en 48h |
| M-08 | Lanzamiento Barcelona | M12 | M12 (est.) | 0 | En curso; shoppers Barcelona contratados a tiempo |

## 5. Análisis de Desviaciones Temporales

| Desviación | Causa Raíz | Impacto en Ruta Crítica | Compresión Aplicada |
|------------|------------|-------------------------|---------------------|
| +4d app móvil (M6) | Falta de recurso mobile nativo; complejidad iOS mayor de lo previsto | Sí | Contratación freelance mobile por 3.000€ (fast tracking + crashing) |
| +3d hard launch Madrid (M9) | Bug pasarela de pagos detectado en soft launch | Sí (hito duro) | QA reforzado 24/7; fix crítico; test de regresión acelerado |
| +5d contratos consignación (M5) | Marca piloto solicitó revisión legal adicional | No (flotación disponible) | Negociación paralela con marcas alternativas; no afectó ruta crítica |
| -2d landing page marketing (M7) | Template reutilizado de evento piloto | No | Adelanto liberado para siguiente paquete (campaña embajadores) |

## 6. Fechas de Finalización Previstas (Forecast)

| Escenario | Fecha Fin Barcelona (M-08) | Fecha 200 Miembros (ENT-08) | Fundamento |
|-----------|---------------------------|----------------------------|------------|
| **Optimista** | M12 | M12 | Si Barcelona replica Madrid sin fricciones y conversión acelera |
| **Base (más probable)** | M12+2d | M12+7d | Buffer de 2 días por micro-retrasos acumulados; membresías llegan con ligero retraso post-lanzamiento |
| **Pesimista** | M12+10d | M13 | Si retraso en marketing Barcelona o problemas de escalado tech |

## 7. Acciones Pendientes

- [ ] Revisar criticidad de la ruta Barcelona tras incorporar las lecciones de Madrid (M10).
- [ ] Aplicar fast tracking a campaña Barcelona: lanzar pre-lanzamiento y hard launch simultáneamente si Madrid estabiliza.
- [ ] Validar disponibilidad de developers para soporte post-lanzamiento sin afectar la fecha de liberación prevista (M10).
- [ ] Actualizar Gantt v1.1 con fechas reales M1-M9 y nuevas previsiones M10-M12.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Tiempo](../fase-planificacion/plan-gestion-tiempo.md) · [Plan Gestión Integración](../fase-planificacion/plan-gestion-integracion.md)
