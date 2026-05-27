# Control de Costes — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Director del Proyecto / Gestor de Costes |

## 2. Objetivo

Medir el desempeño de costes mediante análisis del valor ganado (EVM), calcular varianzas (CV, CPI), estimar el coste final (EAC) y el índice de rendimiento a completar (TCPI), comparando contra el BAC de 660.000€.

## 3. Métricas de Valor Ganado a Corte M9

| Métrica | Valor | Fórmula | Interpretación |
|---------|-------|---------|----------------|
| **BAC** | 660.000€ | Presupuesto aprobado Año 1 | Línea base de coste |
| **PV (Plan Value)** | 494.000€ | Curva S a M9 | Gasto planificado acumulado |
| **EV (Earned Value)** | 495.000€ | 75% del BAC realizado | Valor del trabajo completado |
| **AC (Actual Cost)** | 508.800€ | Gasto real acumulado | 2,8% sobre PV |
| **CV (Cost Variance)** | -13.800€ | EV - AC | Ligera sobrecoste |
| **CPI** | 0,973 | EV / AC | Por debajo de 1; cada € gastado genera 0,973€ de valor |
| **SV (Schedule Variance)** | +1.000€ | EV - PV | Ligero adelanto valorado |
| **SPI** | 1,002 | EV / PV | Prácticamente según plan |

## 4. Análisis de Varianza por Área de Coste (M1-M9)

| Área | Presupuesto M1-M9 | Gasto Real | Desviación | % Var. | Estado | Causa Principal |
|------|-------------------|------------|------------|--------|--------|-----------------|
| 1.1 Gestión Proyecto | 18.000€ | 17.200€ | -800€ | -4,4% | Verde | Menor viaje a Barcelona |
| 1.2 Plataforma Tecnológica | 171.000€ | 180.500€ | +9.500€ | +5,6% | Rojo | Cloud + freelance mobile + horas extra |
| 1.3 Operativa Shopping | 147.000€ | 149.200€ | +2.200€ | +1,5% | Amarillo | Combustible superior por re-rutas Madrid |
| 1.4 Alianzas Consignación | 19.500€ | 20.100€ | +600€ | +3,1% | Verde | Material adicional para 12 marcas |
| 1.5 Marketing | 79.500€ | 78.000€ | -1.500€ | -1,9% | Verde | Reasignación parcial a tech |
| 1.6 Legal / Calidad | 19.500€ | 19.300€ | -200€ | -1,0% | Verde | — |
| Reserva Contingencia | 39.600€ | 8.000€ | -31.600€ | — | Verde | 23,6% utilizada; 54K€ remanentes |
| **Reserva no asignada** | 0€ | 44.500€ | +44.500€ | — | — | Parte del exceso de tech absorbido por reserva remanente |
| **TOTAL** | **494.000€** | **508.800€** | **+14.800€** | **+3,0%** | **Amarillo** | Desbordamiento tech compensado parcialmente por reserva |

*Nota: El valor real de 508.800€ incluye 8.000€ de reserva de contingencia consumida en el retraso tech (RIE-12).*

## 5. Pronósticos de Coste Final

| Métrica | Cálculo | Valor | Umbral / Objetivo |
|---------|---------|-------|-------------------|
| **EAC (Estimate at Completion)** | BAC / CPI = 660.000 / 0,973 | **678.480€** | < 660.000€ (objetivo) |
| **ETC (Estimate to Complete)** | EAC - AC = 678.480 - 508.800 | **169.680€** | — |
| **VAC (Variance at Completion)** | BAC - EAC | **-18.480€** | > -5.000€ (objetivo base) |
| **TCPI (To-Complete Performance Index)** | (BAC - EV) / (BAC - AC) = 165.000 / 151.200 | **1,091** | < 1,1 (tolerancia) |
| **TCPI para VAC=0** | (BAC - EV) / (EAC - AC) = 165.000 / 169.680 | **0,972** | — |

**Interpretación**: El TCPI base (1,091) indica que, para terminar dentro del BAC original, el proyecto debe rendir al 109,1% de eficiencia en M10-M12. Es exigente pero alcanzable si se contienen los costes tech y operativos. El TCPI para VAC=0 (0,972) muestra que, con el EAC actual, la eficiencia requerida es menor porque ya se asume el sobrecoste.

## 6. Acciones Pendientes

- [ ] Revisar presupuesto tech M10-M12 para contener cloud y evitar nuevas horas extra (objetivo: < 45.000€).
- [ ] Negociar descuento por volumen con proveedor cloud ante crecimiento de tráfico post-lanzamiento.
- [ ] Aplicar reserva de contingencia remanente (54.000€) solo para riesgos materiales aprobados por CCB.
- [ ] Preparar escenario de recuperación: si CPI sube a 0,985 en M10, el VAC se reduciría a -10.000€.
- [ ] Reportar a Patrocinador el EAC 678.480€ y solicitar decisión sobre aceptar desviación o reducir alcance.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Costes](../fase-planificacion/plan-gestion-costes.md) · [Plan Gestión Integración](../fase-planificacion/plan-gestion-integracion.md) · [Business Case](../fase-inicio/business-case.md)
