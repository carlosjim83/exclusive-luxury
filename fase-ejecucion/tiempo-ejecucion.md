# Gestión del Cronograma en Ejecución — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Ejecución |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Tiempo |
| **Documento base** | [Plan de Gestión del Tiempo](../fase-planificacion/plan-gestion-tiempo.md) |

## 2. Objetivo

Controlar el avance real del cronograma frente a la línea base temporal, medir el desempeño del calendario (adelantos y retrasos), y mantener actualizado el estado de la ruta crítica durante los 12 meses de ejecución.

## 3. Hitos: Plan vs. Real

| ID | Hito | Fecha plan | Fecha real | Desviación | Impacto en ruta crítica |
|----|------|------------|------------|------------|------------------------|
| H-01 | Constitución societaria y legal | M1 | M1 | 0 días | — |
| H-02 | Contratación equipo tech completo | M2 | M2 | 0 días | — |
| H-03 | Arquitectura técnica aprobada | M2 | M2 | 0 días | — |
| H-04 | 5 shoppers Madrid contratados | M5 | M5 | 0 días | — |
| H-05 | Manual de calidad y protocolos v1.0 | M5 | M5 | 0 días | — |
| H-06 | 5 shoppers Barcelona contratados | M6 | M7 | +14 días | No crítico (paralelo a tech) |
| H-07 | 10 marcas consignación firmadas | M7 | M7 | 0 días | — |
| H-08 | Soft launch beta Madrid (50 miembros) | M8 | M8 | 0 días | — |
| H-09 | **Lanzamiento MVP Madrid** | M9 | M9 | 0 días | — |
| H-10 | App stores iOS/Android publicadas | M9 | M9 | 0 días | — |
| H-11 | 150 miembros activos | M11 | M11 | 0 días | — |
| H-12 | **Lanzamiento MVP Barcelona** | M12 | M12 | 0 días | — |

## 4. Rendimiento del Cronograma por Trimestre

| Trimestre | SPI (Schedule Performance Index) | EV (Valor Ganado) | PV (Valor Planificado) | Interpretación |
|-----------|-----------------------------------|-------------------|------------------------|----------------|
| T1 (M1–M3) | 1,02 | 48.000€ | 47.000€ | Ligero adelanto en fundación |
| T2 (M4–M6) | 0,95 | 142.000€ | 149.000€ | Retraso leve en reclutamiento shoppers Barcelona |
| T3 (M7–M9) | 1,00 | 310.000€ | 310.000€ | A tiempo, lanzamiento Madrid en fecha |
| T4 (M10–M12) | 1,01 | 658.000€ | 652.000€ | Ligero adelanto en cierre Año 1 |

## 5. Estado de la Ruta Crítica

| Periodo | Ruta crítica principal | Estado | Acciones tomadas |
|---------|------------------------|--------|------------------|
| M1–M3 | Constitución → Arquitectura → Contratación tech | Verde | Ninguna |
| M4–M6 | Desarrollo backend → CRM → Pasarela → Formación shoppers | Verde | Se añadió QA intermedio (M5) |
| M7–M9 | Acuerdos marcas → Marketing → Soft launch → **Lanzamiento Madrid** | Verde | Ninguna |
| M10–M11 | Escalado Madrid + App stores | Verde | Ninguna |
| M12 | Traslado know-how → **Lanzamiento Barcelona** | Verde | Ninguna |

**Nota**: El único desvío relevante fue el retraso de 2 semanas en la contratación de shoppers Barcelona (H-06), causado por disponibilidad de candidatos en verano. Se mitigó adelantando la formación teórica online, sin afectar el lanzamiento de Barcelona.

## 6. Actividades con Desviación Significativa

| Actividad | Duración plan | Duración real | Desviación | Causa raíz | Medida correctiva |
|-----------|---------------|---------------|------------|------------|-----------------|
| Reclutamiento shoppers Barcelona | 4 sem | 6 sem | +2 sem | Escasez candidatos en agosto | Headhunting premium + incentivo referido |
| Formación shoppers Madrid | 6 sem | 8 sem | +2 sem | Ampliación módulo de protocolos de lujo | Programa intensivo de shadowing compensado |
| Desarrollo app móvil | 18 sem | 20 sem | +2 sem | Cambio a Flutter (CC-01) | Reasignación de 1 frontend a mobile |

## 7. Acciones Pendientes

1. Actualizar la línea base temporal con las fechas reales de cierre de cada paquete de trabajo.
2. Documentar la eficacia de las medidas correctivas aplicadas (headhunting, shadowing, reasignación) para Año 2.
3. Preparar el cronograma de Año 2 incorporando los buffers de contingencia basados en datos reales de Año 1.
4. Archivar el informe de SPI final y la curva S de valor ganado.
