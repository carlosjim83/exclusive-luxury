# Tiempo — Fase de Inicio

## 1. Objetivo

Definir los hitos clave y el cronograma preliminar del proyecto **Personal Shopping Luxury** para establecer expectativas de duración y marcos temporales antes de desarrollar el plan detallado en la fase de Planificación.

## 2. Duración Total del Proyecto (MVP Año 1)

**12 meses** desde la aprobación de la fase de Inicio hasta el cierre del Año 1 con 200 miembros activos.

## 3. Hitos Principales

| ID | Hito | Fecha Estimada | Descripción |
|----|------|----------------|-------------|
| H-01 | Aprobación fase de Inicio | Mes 0 | Firma del acta de constitución por patrocinador |
| H-02 | Constitución societaria y equipo tech contratado | Mes 1 | Sociedad constituida; 4-5 developers con contrato |
| H-03 | API base operativa | Mes 3 | Autenticación, usuarios, pagos funcionando |
| H-04 | 5 shoppers de Madrid certificados | Mes 5 | Formación + shadowing aprobados |
| H-05 | 5 contratos de consignación firmados | Mes 5 | Primeras marcas integradas en plataforma |
| H-06 | App móvil en test interno | Mes 6 | iOS y Android con flujo de reserva completo |
| H-07 | Soft launch Madrid (50 miembros beta) | Mes 8 | Lanzamiento controlado para validar operativa |
| H-08 | **Lanzamiento MVP Madrid** | Mes 9 | 100 miembros; plataforma estable; shoppers operativos |
| H-09 | **Lanzamiento Barcelona** | Mes 12 | 100 miembros; operativa replicada; 200 totales |
| H-10 | Cierre Año 1 y planificación Año 2 | Mes 12 | Informe de métricas y decisión de expansión |

## 4. Secuencia Lógica

```
Aprobación (M0)
    ↓
Constitución + Equipo (M1)
    ↓
Arquitectura + Desarrollo tech (M1-M6)
    ↓
Reclutamiento shoppers Madrid (M1-M5) ─┐
    ↓                                     │
Formación Madrid (M4-M5)                │
    ↓                                     │
Negociación marcas (M2-M7) ◄────────────┘
    ↓
Soft launch Madrid (M8)
    ↓
Hard launch Madrid (M9) ─────────────────────────┐
    ↓                                              │
Reclutamiento + Formación Barcelona (M6-M9)       │
    ↓                                              │
Lanzamiento Barcelona (M12) ◄─────────────────────┘
    ↓
Cierre Año 1 (M12)
```

## 5. Dependencias Críticas

| Predecesora | Sucesora | Razón |
|-------------|----------|-------|
| Arquitectura técnica (M1) | Desarrollo backend/frontend (M2) | No se puede codificar sin diseño técnico |
| API base operativa (M3) | App móvil (M3) | La app consume la API |
| 5 shoppers Madrid certificados (M5) | Soft launch Madrid (M8) | Se necesita equipo formado antes de atender clientes |
| 5 contratos consignación (M5) | Soft launch Madrid (M8) | Se necesita oferta de productos para las visitas |
| Soft launch Madrid (M8) | Hard launch Madrid (M9) | La versión beta valida estabilidad antes del lanzamiento completo |
| Hard launch Madrid (M9) | Lanzamiento Barcelona (M12) | Madrid debe estar madura antes de replicar recursos |

## 6. Restricciones Temporales

| ID | Restricción | Origen |
|----|-------------|--------|
| T-01 | Lanzamiento MVP Madrid: máximo mes 9 | Acuerdo con inversores; punto de equilibrio financiero |
| T-02 | Barcelona: no antes de mes 6, no después de mes 12 | Recursos limitados; aprendizajes de Madrid necesarios |
| T-03 | Málaga/Mallorca: no antes de mes 18 (Año 2) | Presupuesto Año 1 agotado; expansión con nuevos fondos |

## 7. Criterios de Aceptación de la Fase de Inicio

| ID | Criterio | Métrica |
|----|----------|---------|
| CT-01 | Hitos validados como realistas por equipo técnico | Reunión de validación documentada |
| CT-02 | Fechas de lanzamiento aceptadas por inversores | Confirmación por escrito |
| CT-03 | Dependencias críticas identificadas y mitigadas | Lista de riesgos asociados a retrasos |

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-26  
**Versión**: 1.0 — Fase de Inicio
