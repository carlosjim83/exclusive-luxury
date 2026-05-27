# Control de Recursos — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Recursos |

## 2. Objetivo

Supervisar la utilización de recursos humanos (equipo core y shoppers), materiales (vehículos, equipos) y detectar desviaciones de disponibilidad o rendimiento respecto al plan de recursos aprobado.

## 3. Utilización de Recursos Humanos

### 3.1 Equipo Core (M1-M9)

| Rol | FTE Plan | FTE Real | Utilización | Desviación | Issue |
|-----|----------|----------|-------------|------------|-------|
| Director del Proyecto | 50-75% | 65% | 100% plan | — | — |
| CTO / Tech Lead | 100% | 110% | Sobreasignado | +10% | Horas extra M7-M9 por bug pasarela |
| Backend Developer (x2) | 100% | 95% | 95% | -5% | — |
| Frontend Developer | 100% | 90% | 90% | -10% | Baja puntual M4 (gripe estacional) |
| Mobile Developer (x2) | 50-100% | 105% | Sobreasignado | +5% | Refuerzo freelance necesario |
| QA / Tester | 0-100% | 100% | 100% | — | — |
| Operations Manager | 0-100% | 100% | 100% | — | — |
| Marketing Manager | 25-100% | 95% | 95% | -5% | Reasignación parcial M8 a tech |
| Partnerships Manager | 0-100% | 100% | 100% | — | — |

### 3.2 Personal Shoppers (M5-M9)

| Ciudad | Shoppers | Visitas / mes (avg) | Capacidad máx. | Utilización | Estado |
|--------|----------|---------------------|-----------------|-------------|--------|
| Madrid | 5 | 28 visitas/shopper | 35 visitas | **80%** | Verde |
| Barcelona | 5 | 0 (pre-operativos) | 35 visitas | 0% | En preparación M10 |

**Compensación real promedio por shopper Madrid (M9)**:
- Fijo: 1.200€
- Variable visitas: 420€ (28 x 15€)
- Comisión venta: 280€ (est. 5.600€ vendidos)
- **Total**: ~1.900€/mes (cerca de la estimación de 2.000€).

## 4. Recursos Materiales — Disponibilidad

| Recurso | Cantidad Plan | Cantidad Real | Disponibilidad | Desviación | Acción |
|---------|---------------|---------------|----------------|------------|--------|
| Vehículos empresa (leasing) | 10 | 10 | 9 operativos; 1 taller (M8) | -10% temporal | Vehículo de sustitución gestionado en 24h; coste cubierto por seguro |
| iPads shoppers | 10 | 10 | 10 | 0% | — |
| Portátiles equipo tech | 5-6 | 6 | 6 | 0% | — |
| Smartphones testers | 4 | 4 | 4 | 0% | — |
| Oficina / coworking | 1 | 1 | 1 | 0% | — |

## 5. Issues de Rendimiento del Equipo

| Issue | Recurso Afectado | Gravedad | Desde | Acción Correctiva | Estado |
|-------|------------------|----------|-------|-------------------|--------|
| Shopper con rating < 4,0 dos meses seguidos | Shopper M-03 (Madrid) | Medio | M7-M8 | Plan de mejora individual; shadowing con shopper senior; revisión M10 | En seguimiento |
| Baja por enfermedad > 5 días | Frontend Developer | Bajo | M4 | Cubierto por CTO en tareas menores; no afectó hitos | Cerrado |
| Rotación voluntaria imprevista | Mobile Developer 1 | Medio | M5 | Riesgo RIE-04 parcial; cubierto por freelance + contratación exprés en 2 semanas | Cerrado |
| Sobrecarga CTO (bug crítico M8-M9) | CTO | Alto | M8 | Reconocido; compensación horas post-M9 planificada; no escalado a nuevo recurso | Mitigado |

## 6. Varianza de Recursos

| Métrica | Valor Plan | Valor Real | Varianza |
|---------|------------|------------|----------|
| Coste total recursos humanos core | 265.000€ a M9 | 268.200€ | +3.200€ (+1,2%) |
| Coste shoppers acumulado | 78.000€ a M9 | 76.500€ | -1.500€ (-1,9%) |
| Coste vehículos y logística | 22.000€ a M9 | 23.800€ | +1.800€ (+8,2%) |
| Total recursos a M9 | 365.000€ | 368.500€ | +3.500€ (+1,0%) |

## 7. Acciones Pendientes

- [ ] Revisar contrato de reemplazo del vehículo en taller; confirmar fecha de devolución a flota operativa.
- [ ] Evaluar resultado del plan de mejora del shopper M-03 a M10; decidir renovación o baja.
- [ ] Negociar con leasing penalización por avería para reducir coste de vehículo sustitución.
- [ ] Planificar compensación de horas extra del CTO (días libre post-Barcelona o bonus).
- [ ] Validar capacidad de shoppers Barcelona (35 visitas/mes) frente a previsiones de demanda M12.

---

**Documento elaborado por**: Gestor de Recursos  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Recursos](../fase-planificacion/plan-gestion-recursos.md) · [Plan Gestión Costes](../fase-planificacion/plan-gestion-costes.md)
