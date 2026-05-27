# Monitorización del Compromiso de los Interesados — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Interesados |

## 2. Objetivo

Evaluar el nivel de compromiso de los grupos de interesados clave tras el lanzamiento de Madrid, actualizar la matriz de poder/interés con datos reales y gestionar los conflictos o expectativas desajustadas detectadas.

## 3. Evaluación de Nivel de Compromiso (M9)

Escala: 1 = Desconocido / hostil, 2 = Resistente, 3 = Neutral, 4 = Apoyador, 5 = Comprometido / líder.

| ID | Grupo | Compromiso Deseado | Compromiso Actual | Diferencia | Tendencia |
|----|-------|--------------------|-------------------|------------|-----------|
| INT-04 | Patrocinador / Inversores | 5 | 4 | -1 | Estable |
| INT-02 | Personal shoppers | 5 | 5 | 0 | Positiva |
| INT-03 | Marcas de lujo | 4 | 4 | 0 | Estable |
| INT-01 | Clientes miembros | 4 | 4 | 0 | Positiva (NPS subiendo) |
| INT-06 | Equipo central | 4 | 4 | 0 | Estable |
| INT-09 | Medios e influencers | 3 | 3 | 0 | Estable |
| INT-11 | Escuelas de moda | 3 | 3 | 0 | Estable |
| INT-08 | Reguladores | 4 | 4 | 0 | Estable |
| INT-07 | Competidores | 2 | 2 | 0 | Estable |
| INT-10 | Proveedores tecnológicos | 3 | 3 | 0 | Estable |

**Conclusión**: Ningún grupo ha descendido de nivel. El único gap significativo es Patrocinador (-1), motivado por la preocupación del cash flow pre-M9.

## 4. Matriz de Poder / Interés Actualizada (M9)

```
                    INTERÉS
           Bajo              Alto
        ┌─────────┬─────────┐
  Alto  │ INT-07  │ INT-04  │  <- Gestión activa
        │Competid.│Inversor.│
        ├─────────┼─────────┤
  Bajo  │ INT-11  │ INT-01  │  <- Satisfacer / Escuchar
        │Escuelas │Clientes │
        └─────────┴─────────┘

Grupos de gestión activa (alto poder / alto interés):
- INT-04 Patrocinador / Inversores
- INT-02 Personal shoppers
- INT-03 Marcas de lujo
- INT-06 Equipo central
- INT-08 Reguladores
```

## 5. Issues Detectados por Interesados

| ID | Interesado | Issue / Queja | Impacto en Proyecto | Respuesta Dada | Estado |
|----|------------|---------------|---------------------|----------------|--------|
| INT-04-01 | Patrocinador | Preocupación por cash flow negativo hasta M8 y EAC +2,8% | Alto (decisión de inversión Año 2) | Informe ejecutivo M9 con escenarios; reunión presencial; compromiso de contención costes | Mitigado |
| INT-02-01 | Shoppers | Solicitan revisión de comisión del 5% (consideran baja si venta es < 500€) | Medio (retención) | Respuesta diferida a Año 2; estudiar escalado de comisión por volumen | Diferido |
| INT-02-02 | Shoppers | Quejas sobre exceso de canales de comunicación (WhatsApp + app + email) | Bajo | Plan de consolidación de canales M10 (ver [comunicaciones-control.md](./comunicaciones-control.md)) | En curso |
| INT-03-01 | Marcas | Solicitan reporte quincenal en lugar de mensual y acceso a dashboard en tiempo real | Medio (relación) | Evaluación técnica M10; propuesta de dashboard auto-servicio para Año 2 | En curso |
| INT-01-01 | Clientes | 3 quejas de no recibir recordatorio 24h (filtro spam) | Bajo | Revisión SPF/DKIM; alternativa WhatsApp | En curso |
| INT-08-01 | Reguladores | Solicitud de documentación adicional sobre contratos shoppers (autónomos) | Medio (legal) | Documentación entregada en 48h; asesoría laboral valida independencia | Cerrado |

## 6. Gestión de Conflictos Activos

| Conflicto | Partes | Mediador | Estado | Resolución |
|-----------|--------|----------|--------|------------|
| Revisión comisión shoppers | Shoppers vs. Dirección | Director del Proyecto | Diferido | Año 2: estudiar modelo escalonado (5% base + 7% sobre >2.000€/mes) |
| Frecuencia reportes marcas | Marcas vs. Partnerships | Partnerships Manager | En negociación | Dashboard en tiempo real para Año 2; reporte quincenal piloto con 3 marcas Q4 |
| Priorización tech post-lanzamiento | Marketing vs. Tech | CTO + Director | Resuelto | 70% capacidad tech a bugs/estabilidad; 30% a features marketing Año 2 |

## 7. Acciones Pendientes

- [ ] Organizar reunión presencial con Patrocinador e inversores clave en M10 para validar forecast y plan Año 2.
- [ ] Presentar propuesta de modelo escalonado de comisiones a shoppers en asamblea M11.
- [ ] Desplegar módulo de dashboard para marcas (acceso a ventas en tiempo real) como piloto Año 2.
- [ ] Confirmar recepción y satisfacción de documentación entregada a reguladores; archivar respuesta.
- [ ] Actualizar registro de interesados con contactos directos de las 12 marcas activas y sus preferencias de comunicación.

---

**Documento elaborado por**: Gestor de Interesados  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Interesados](../fase-planificacion/plan-gestion-interesados.md) · [Registro Interesados](../fase-inicio/registro-interesados.md)
