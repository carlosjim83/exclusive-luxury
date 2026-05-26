# Plan de Gestión de las Adquisiciones — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Planificación |
| **Fecha** | 2026-05-26 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Adquisiciones |

## 2. Objetivo del Plan

Definir el proceso para adquirir bienes, servicios y resultados externos necesarios para el proyecto, garantizando el mejor valor dentro del presupuesto y cronograma aprobados.

## 3. Política de Adquisiciones

- **Presupuesto aprobado**: 660.000€ Año 1. Ninguna adquisición puede exceder el presupuesto asignado a su área sin autorización del Director del Proyecto.
- **Umbral de autorización**:
  - < 500€: Gestor de área (autónomo).
  - 500€ - 5.000€: Director del Proyecto.
  - > 5.000€: Patrocinador / Junta.
- **Proceso competitivo obligatorio** para adquisiciones > 10.000€: mínimo 3 presupuestos.
- **Contratos escritos obligatorios** para todo proveedor > 1.000€.
- **Transparencia**: Todas las adquisiciones se registran en hoja de cálculo compartida.

## 4. Adquisiciones Clave del Proyecto

### 4.1 Tecnología y Desarrollo

| Adquisición | Tipo | Estimado | Proveedores Potenciales | Criterio Selección |
|-------------|------|----------|------------------------|-------------------|
| Desarrollo backend (2 developers) | Servicio (obra) | 72.000€ | Freelance, agencia tech, equipo propio | Experiencia Node.js/Python; portfolio; disponibilidad inmediata |
| Desarrollo frontend (1 developer) | Servicio (obra) | 36.000€ | Freelance, agencia | Experiencia React/Vue; responsive design |
| Desarrollo mobile (2 developers) | Servicio (obra) | 54.000€ | Freelance, agencia mobile | iOS + Android nativo o Flutter; experiencia en apps de servicios |
| Infraestructura cloud | Bien / Servicio | 18.000€ | AWS, GCP, Azure, Hetzner | Coste; escalabilidad; soporte en español; ubicación datos (UE) |
| Pasarela de pagos | Servicio (SaaS) | Incluido en cloud | Stripe, Redsys, Adyen | Comisión por transacción; compliance PSD2; soporte recurrente |
| Herramientas dev (GitHub, Figma, etc.) | SaaS | 6.000€ | GitHub, GitLab, Figma, Linear | Integración; precio equipo startup; funcionalidades |
| Auditoría de seguridad | Servicio (consultoría) | 12.000€ | Deloitte, EY, consultora ciber especializada | Certificación; experiencia sector; precio |

### 4.2 Operativa y Logística

| Adquisición | Tipo | Estimado | Proveedores Potenciales | Criterio Selección |
|-------------|------|----------|------------------------|-------------------|
| Vehículos de empresa (leasing operativo) | Bien / Servicio | 46.000€ | LeasePlan, Alphabet, Santander Renting | Cuota mensual; km incluidos; seguro; flota premium (imagen marca); descuento por flota 10 unidades |
| Seguros (RC, mercancía, vehículos, ciber) | Servicio | 9.000€ | Mapfre, AXA, Allianz | Cobertura; precio; gestión de siniestros; reputación |
| iPads para shoppers | Bien | 6.000€ | Apple, distribuidor autorizado | Garantía; soporte; gestión empresarial (MDM) |
| Material de formación | Bien | 6.000€ | Imprenta premium, proveedores de moda | Calidad; sostenibilidad; imagen de marca |

### 4.3 Marketing y Eventos

| Adquisición | Tipo | Estimado | Proveedores Potenciales | Criterio Selección |
|-------------|------|----------|------------------------|-------------------|
| Agencia de branding e identidad | Servicio (obra) | 18.000€ | Agencias de lujo, freelance senior | Portfolio sector lujo; creatividad; precio; referencias |
| Agencia de PR y comunicación | Servicio (retainer) | 6.000€ | Agencias especializadas en lujo | Red de contactos medios; experiencia sector; resultados medibles |
| Publicidad digital | Servicio | 36.000€ | Meta Business, Google Ads, agencia performance | CPA; CAC medible; transparencia en reporting |
| Eventos de lanzamiento (2) | Servicio | 24.000€ | Event planner premium, venue de lujo | Ubicación; catering; exclusividad; capacidad de storytelling |

### 4.4 Legal y Asesoría

| Adquisición | Tipo | Estimado | Proveedores Potenciales | Criterio Selección |
|-------------|------|----------|------------------------|-------------------|
| Asesoría legal (contratos, sociedad) | Servicio (retainer) | 15.000€ | Despacho especializado startups + lujo | Experiencia sector; velocidad; precio hora; red de contactos |
| Auditoría RGPD | Servicio (consultoría) | 6.000€ | Consultora privacidad, DPO externo | Certificación; experiencia; precio fijo vs. hora |

## 5. Proceso de Adquisición

### 5.1 Flujo General

1. **Identificación de necesidad**: El responsable de área detecta la necesidad y la documenta.
2. **Definición de requisitos**: Especificaciones técnicas, funcionales y de calidad.
3. **Solicitud de presupuestos**: Mínimo 3 si > 10.000€; mínimo 2 si > 5.000€.
4. **Evaluación y selección**: Matriz de puntuación (precio 40%, calidad/técnico 40%, servicio 20%).
5. **Negociación**: Mejora de condiciones; contrato con SLA y penalizaciones.
6. **Aprobación**: Según umbral de autorización.
7. **Orden de compra / Contrato**: Documento formal de compromiso.
8. **Recepción y verificación**: Control de calidad del entregable.
9. **Pago**: Según condiciones contractuales (30% inicio, 40% entrega, 30% aceptación final).
10. **Cierre y evaluación**: Lección aprendida del proveedor.

### 5.2 Plantilla de Evaluación de Proveedores

| Criterio | Peso | Puntuación (1-5) | Peso x Nota |
|----------|------|------------------|-------------|
| Precio / Coste total | 40% | | |
| Calidad técnica / portfolio | 30% | | |
| Plazo de entrega | 15% | | |
| Servicio post-venta / soporte | 15% | | |
| **Total** | **100%** | | **(Máximo 5)** |

## 6. Gestión de Contratos

### 6.1 Tipos de Contrato por Adquisición

| Adquisición | Tipo de Contrato | Riesgo para el Proyecto |
|-------------|-----------------|------------------------|
| Desarrollo tech (developers) | Precio fijo por hito (obra) | Medio (scope creep) |
| Infraestructura cloud | Consumo / Suscripción | Bajo (escalable) |
| Vehículos | Leasing operativo | Bajo |
| Seguros | Prima anual fija | Bajo |
| Agencia branding | Precio fijo por entregable | Medio (revisiones) |
| Publicidad digital | Consumo (variable) | Alto (si no se controla) |

### 6.2 Cláusulas Clave

- **Entregables y fechas**: Hitos claros con penalización por retraso (0,5% del importe por día de retraso, máximo 10%).
- **Confidencialidad**: NDA obligatorio para proveedores con acceso a datos clientes o estrategia.
- **Propiedad intelectual**: Todo el código, diseños y contenidos generados son propiedad del proyecto.
- **Rescisión**: El proyecto puede rescindir con 30 días de preaviso si el proveedor incumple SLA.
- **Seguros y responsabilidad**: El proveedor debe tener RC profesional vigente.

## 7. Acciones Pendientes

- [ ] Crear plantilla de solicitud de compra y orden de compra.
- [ ] Establecer lista de proveedores pre-cualificados (3 por categoría clave).
- [ ] Negociar descuento por startup con Stripe / AWS / Google.
- [ ] Definir proceso de gestión de incidencias con proveedores (SLA, ticket, escalado).
- [ ] Registrar todas las adquisiciones en hoja de cálculo compartida (Drive / Notion).

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-26  
**Versión**: 1.0 — Fase de Planificación
