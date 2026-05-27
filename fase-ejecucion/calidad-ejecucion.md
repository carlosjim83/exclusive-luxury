# Gestión de la Calidad en Ejecución — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Ejecución |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Calidad |
| **Documento base** | [Plan de Gestión de la Calidad](../fase-planificacion/plan-gestion-calidad.md) |

## 2. Objetivo

Auditar la calidad del servicio y de la plataforma durante la ejecución, registrar defectos e incidencias, certificar a los shoppers y aplicar mejoras de proceso basadas en datos reales de los primeros 12 meses.

## 3. Auditorías de Calidad Realizadas

| ID | Tipo | Área auditada | Fecha | Resultado | Hallazgos | Acciones |
|----|------|---------------|-------|-----------|-----------|----------|
| AUD-01 | Interna | Proceso de reclutamiento shoppers | M5 | Aprobado | 2 de 10 candidatos no cumplen criterio senior | Rechazados, nueva búsqueda |
| AUD-02 | Interna | Plataforma web + CRM | M7 | Aprobado con observaciones | 3 bugs menores en filtrado de citas | Corregidos antes de soft launch |
| AUD-03 | Externa | Cumplimiento RGPD | M8 | Aprobado | 1 recomendación: política cookies más visible | Implementada en M8 |
| AUD-04 | Interna | Protocolo de visita (Madrid) | M9 | Aprobado | 1 incidencia: presentación shopper descuidada | Revisión dress code |
| AUD-05 | Interna | App móvil iOS/Android | M9 | Aprobado | Crash rate 0,3% (dentro de objetivo < 0,5%) | Ninguna |
| AUD-06 | Interna | Servicio post-lanzamiento Madrid | M11 | Aprobado | NPS 54, CSAT 4,6/5 | Ninguna crítica |
| AUD-07 | Externa | Seguridad cibernética (pentest) | M10 | Aprobado | Sin vulnerabilidades críticas | 2 mejoras menores aplicadas |
| AUD-08 | Interna | Lanzamiento Barcelona | M12 | Aprobado | Puntualidad 97%, NPS 48 | Acción de mejora en onboarding |

## 4. Métricas de Calidad: Plan vs. Real

| Métrica | Objetivo | M9 (Madrid) | M12 (Total) | Estado |
|---------|----------|-------------|-------------|--------|
| NPS | > 50 | 52 | 51 | Cumple |
| CSAT visita | > 4,5/5 | 4,6/5 | 4,5/5 | Cumple |
| Rating shopper | > 4,5/5 | 4,7/5 | 4,6/5 | Cumple |
| Churn mensual | < 5% | 3,8% | 4,0% | Cumple |
| Tiempo respuesta reserva | < 5 min | 3,2 min | 3,5 min | Cumple |
| Tasa de incidencias | < 2% | 1,5% | 1,8% | Cumple |
| Puntualidad visitas | > 95% | 96% | 97% | Cumple |
| Uptime plataforma | > 99,5% | 99,7% | 99,6% | Cumple |
| Tiempo carga web | < 2s | 1,4s | 1,3s | Cumple |
| Crash rate app | < 0,5% | 0,3% | 0,3% | Cumple |
| Bugs críticos | 0 | 0 | 0 | Cumple |

## 5. Registro de Defectos e Incidencias

| ID | Descripción | Severidad | Fecha detección | Fecha resolución | Estado | Impacto |
|----|-------------|-----------|-----------------|------------------|--------|---------|
| DEF-01 | Bug filtrado citas por zona horaria | Menor | M7 | M7 | Cerrado | 0 visitas afectadas |
| DEF-02 | Error cálculo comisión shopper (5%) | Crítico | M8 | M8 | Cerrado | 3 shoppers, corregido y pagado |
| DEF-03 | Retraso notificación push de confirmación | Menor | M9 | M9 | Cerrado | 12 clientes, reenvío manual |
| DEF-04 | Confusión en política de cancelación (< 48h) | Menor | M10 | M10 | Cerrado | 5 quejas, aclaración comunicada |
| DEF-05 | iPad shopper sin carga antes de visita | Menor | M11 | M11 | Cerrado | 1 visita, protocolo carga añadido |
| DEF-06 | Presentación no uniforme shopper Barcelona | Menor | M12 | M12 | Cerrado | Revisión dress code en formación |

## 6. Certificaciones de Shoppers

| Shopper | Ciudad | Fecha certificación | Re-certificación | Shadowing completado | Estado |
|---------|--------|--------------------:|------------------|:--------------------:|:------:|
| PS-M01 | Madrid | M6 | — | 3 visitas | Activo |
| PS-M02 | Madrid | M6 | — | 3 visitas | Activo |
| PS-M03 | Madrid | M6 | — | 3 visitas | Activo |
| PS-M04 | Madrid | M7 | — | 3 visitas | Activo |
| PS-M05 | Madrid | M7 | — | 3 visitas | Activo |
| PS-B01 | Barcelona | M8 | — | 3 visitas | Activo |
| PS-B02 | Barcelona | M8 | — | 3 visitas | Activo |
| PS-B03 | Barcelona | M8 | — | 3 visitas | Activo |
| PS-B04 | Barcelona | M8 | — | 3 visitas | Activo |
| PS-B05 | Barcelona | M8 | — | 3 visitas | Activo |

## 7. Mejoras de Proceso Aplicadas

| ID | Mejora | Origen | Fecha implantación | Resultado medible |
|----|--------|--------|--------------------|-------------------|
| MJP-01 | Checklist pre-visita en app (vestuario, iPad cargado, muestras) | AUD-04 | M9 | Incidencias presentación: 3 → 0 |
| MJP-02 | Confirmación automática 24h + recordatorio 2h | DEF-04 | M10 | No-shows: 4% → 1,5% |
| MJP-03 | Dashboard de calidad en tiempo real para Operations | AUD-06 | M11 | Tiempo respuesta a incidencia: 24h → 4h |
| MJP-04 | Protocolo de carga iPad obligatorio antes de cada jornada | DEF-05 | M11 | Incidencias técnicas en visita: 2 → 0 |

## 8. Acciones Pendientes

1. Programar auditoría externa de calidad de servicio (mystery shopper) para Q1 Año 2.
2. Definir plan de formación continua bimensual para shoppers activos.
3. Evaluar implantación de módulo feedback post-visita descartado en CC-05 para roadmap Año 2.
4. Archivar evidencias de todas las auditorías y certificaciones en repositorio de calidad.
