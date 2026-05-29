# Riesgos de Shoppers — Ficha de Categoría

> Riesgos relacionados con la red de personal shoppers, su gestión, calidad del servicio, retención, seguridad y relación con clientes y marcas.  
> Basado en el [Plan de Gestión de Riesgos](../fase-planificacion/plan-gestion-riesgos.md), metodología PMI y contexto operativo del proyecto.

---

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Categoría** | Shoppers (Personal Shoppers / Colaboradores) |
| **Fecha** | 2026-05-29 |
| **Versión** | 1.0 |
| **Responsable** | Operations Manager / HR / Talent |

## 2. Alcance de la Categoría

Esta ficha cubre los riesgos inherentes a la red de 10 personal shoppers que ejecutan el servicio premium a domicilio. Incluye: reclutamiento, retención, calidad del servicio, relación con clientes, seguridad personal y de datos, cumplimiento legal (autonomía, seguros, contratos), logística (vehículos, desplazamiento) y gestión de incidencias durante las visitas.

**Contexto**: Los shoppers son colaboradores autónomos con compensación de 1.200€ fijo + 15€/visita + 5% comisión venta. Operan en Madrid (5 shoppers) y Barcelona (5 shoppers) con vehículo de empresa (leasing) y iPad para catálogo digital.

## 3. Escala de Evaluación (PMI — Matriz de Probabilidad × Impacto)

| Probabilidad | Valor | Impacto | Valor |
|--------------|-------|---------|-------|
| Muy baja (≤ 10 %) | 1 | Mínimo (sin afectación crítica) | 1 |
| Baja (10–25 %) | 2 | Bajo (retrasa entregables leves) | 2 |
| Media (25–50 %) | 3 | Moderado (afecta coste/plazo 5–10 %) | 3 |
| Alta (50–75 %) | 4 | Alto (afecta coste/plazo > 10 % o calidad) | 4 |
| Muy alta (> 75 %) | 5 | Crítico (amenaza viabilidad del proyecto) | 5 |

**Umbral de criticidad**: Puntuación ≥ 12 → Riesgo crítico.

## 4. Riesgos Identificados

### 4.1 Riesgos Críticos (Puntuación ≥ 12)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario | Reserva | KRI | Umbral KRI |
|----|--------|-------------|-------|------|-------|----------------|-------------------|-------------|---------|-----|------------|
| **RIE-04** | Incapacidad para reclutar 10 shoppers cualificados | No se consiguen 10 personal shoppers expertos en lujo dentro de los 6 primeros meses. Escasez de talento, competencia salarial, expectativas altas. | 3 | 5 | **15** | Mitigar | Convenios con escuelas de moda (IED, ESNE, ESDi); headhunting premium desde tiendas de lujo; incentivo por recomendación (500€); programa de formación propia con certificación. | HR / Talent | 2.500€ | Candidatos preseleccionados / mes | < 2 viables/mes |
| **RIE-05** | Rotación alta de shoppers (> 3 bajas en Año 1) | Los shoppers abandonan tras pocos meses por mejores ofertas, insatisfacción o falta de pertenencia a la marca. | 3 | 4 | **12** | Mitigar | Bonus por antigüedad (3 meses + 6 meses + 1 año); comunidad de shoppers con eventos trimestrales; mentoring entre pares; participación en decisiones operativas; revisión salarial a los 6 meses. | Operations | 1.000€ | Tasa de rotación de shoppers | > 1 baja/trimestre |
| **RIE-06** | Calidad de servicio inconsistente (NPS < 40) | Visitas que no cumplen estándar premium generan quejas, churn y daño reputacional. Formación insuficiente, shoppers poco comprometidos, expectativas desalineadas. | 3 | 4 | **12** | Mitigar | Manual de calidad detallado; shadowing obligatorio (3 primeras visitas acompañadas); evaluación post-visita por cliente (CSAT > 4.5/5); coaching individualizado para shoppers con rating < 4.0; QA de visitas aleatorias (10 % mensual). | Quality / Ops | 1.500€ | NPS promedio | < 45 |
| **RIE-08** | Incidentes durante visitas (daños, robos, accidentes) | Robo de mercancía, rotura de objetos del cliente, accidente de tráfico con vehículo de empresa durante desplazamiento a visita. | 2 | 5 | **10** | Transferir | Seguro de responsabilidad civil para shoppers; seguro de mercancía en tránsito; seguro de vehículos (leasing con cobertura a todo riesgo); protocolo de actuación ante incidentes; cláusulas contractuales de responsabilidad. | Legal / Ops | 2.000€ | Incidentes con coste > 1.000€ | > 0 |
| **SHO-01** | Reclasificación laboral de shoppers por Inspección de Trabajo | La autoridad reclasifica a los shoppers como empleados, generando sanciones, costes de cotización a la Seguridad Social y obligaciones laborales. | 2 | 5 | **10** | Mitigar | Contratos claros de colaboración / autónomos; autonomía real en gestión de agenda y rutas; facturación por servicios; asesoría laboral especializada en modelo colaborativo; seguro de responsabilidad civil. | Legal / HR | 1.500€ | Denuncias de trabajadores o inspecciones | > 0 |
| **SHO-02** | Escándalo de conducta de shopper frente a cliente VIP | Comportamiento inapropiado, discriminación, indiscreción o incidente personal de un shopper que genera denuncia pública o mediática. | 2 | 5 | **10** | Mitigar | Código de conducta estricto firmado; formación en protocolo de lujo y confidencialidad; NDAs con cláusula de reputación; protocolo de crisis con respuesta en < 4 h; derecho de terminación inmediata por conducta grave. | Legal / Marketing | 1.000€ | Quejas formales de conducta | > 0 |
| **SHO-03** | Baja productividad por enfermedad o incapacidad simultánea de varios shoppers | COVID-19, gripe estacional o accidente que deja sin servicio a Madrid o Barcelona con solo 5 shoppers por ciudad. | 3 | 4 | **12** | Mitigar | Bench de shoppers de reserva (2 por ciudad entrenados y listos); cross-training Madrid-Barcelona; servicio digital de emergencia (videoconsulta); política de baja cubierta por seguro de incapacidad temporal. | Operations | 500€ | Shoppers activos por ciudad | < 3 disponibles |
| **SHO-04** | Robo o extravío de mercancía de consignación durante visita | El shopper pierde o es víctima de hurto de prendas de alto valor transportadas en el vehículo o en el domicilio del cliente. | 3 | 4 | **12** | Mitigar | Protocolo de transporte (bolsas cerradas con precinto, inventario firmado); seguro de mercancía en tránsito; máximo 8 prendas por visita; checklist de entrega y recogida firmado por cliente. | Operations | 500€ | Valor de mercancía no localizada | > 2.000€/mes |
| **SHO-05** | Falta de puntualidad crónica de shoppers | Retrasos repetidos (> 15 min) que degradan la experiencia premium y generan cancelaciones o reclamaciones. | 3 | 4 | **12** | Mitigar | Geofencing con alerta de llegada; buffer de 15 min entre citas; formación en gestión del tiempo; penalización en variable por retrasos reiterados (> 3 en un mes); reasignación de zonas según residencia. | Operations | 500€ | Visitas con retraso > 15 min | > 5 % |

### 4.2 Riesgos Significativos (Puntuación 8–11)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------------|-------------|
| **SHO-06** | Deterioro de vehículos de flota sin mantenimiento preventivo | Averías mecánicas, desgaste acelerado o falta de mantenimiento que dejan shoppers sin transporte, afectando puntualidad y operativa. | 3 | 3 | **9** | Mitigar | Contrato de leasing con mantenimiento incluido; revisiones obligatorias cada 10.000 km; app para reportar incidencias de vehículo; reserva de 1 vehículo de backup por ciudad. | Operations | 500€ |
| **SHO-07** | Uso indebido del vehículo de empresa para fines personales | El shopper utiliza el vehículo fuera de horario de visitas, generando costes de combustible, desgaste y riesgo de accidente sin cobertura. | 3 | 3 | **9** | Mitigar | GPS en vehículo con geofencing de zona de trabajo; informe semanal de uso; cláusula de uso exclusivo profesional en contrato; franquicia de 500€ por siniestro en uso particular. | Operations | 500€ |
| **SHO-08** | Conflicto shopper-cliente por expectativas desalineadas | El cliente espera un servicio distinto al ofrecido (ej. sastrería, alquiler, styling para evento) generando tensión o queja formal. | 3 | 3 | **9** | Mitigar | Confirmación escrita de alcance de la visita antes de cita; brief del cliente registrado en CRM; manual de shopper con guía de manejo de objeciones; ops manager como mediador. | Operations | 500€ |
| **SHO-09** | Dificultad de acceso a domicilios de clientes VIP (porteros, seguridad, urbanizaciones cerradas) | El shopper no consigue acceder al domicilio en hora acordada por falta de autorización previa, degradando la experiencia inicial. | 3 | 3 | **9** | Mitigar | Protocolo de contacto con cliente 24h antes para instrucciones de acceso; checkbox en reserva de «necesita autorización de portería»; shopper con contacto directo del cliente para llamar en llegada. | Operations | 0€ |
| **SHO-10** | Comunicación deficiente shopper-ops en tiempo real | El shopper no reporta incidencias (retraso, cliente ausente, mercancía defectuosa) por falta de conectividad o app con bugs, dejando a Operations sin visibilidad. | 3 | 3 | **9** | Mitigar | App con modo offline y sincronización automática; botón de «reportar incidencia» con 3 taps; número directo a ops manager; confirmación de llegada por geofencing. | Lead Mobile / Ops | 500€ |
| **SHO-11** | Formación insuficiente en nuevas colecciones o marcas | El shopper desconoce características de piezas nuevas en consignación, reduciendo capacidad de asesoramiento y venta. | 3 | 3 | **9** | Mitigar | Briefing mensual de colecciones vía webinar; material digital en iPad (fichas de producto, lookbooks); visita a showroom obligatoria por temporada; examen de marca > 80 % para activar. | Partnerships / Ops | 500€ |
| **SHO-12** | Dependencia de 1-2 shoppers estrella por ciudad | 2 shoppers concentran el 60 % de las visitas y ventas; su baja repentina deja sin capacidad y afecta ingresos. | 2 | 4 | **8** | Mitigar | Distribución forzada de citas entre shoppers (capacidad de 8 citas/mes por shopper); incentivar cross-selling entre shoppers; identificación de «high potential» shoppers para acelerar desarrollo. | Operations | 500€ |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------|
| **SHO-13** | Pérdida o robo del iPad con acceso a catálogo y datos de clientes | El iPad asignado al shopper contiene información de clientes y catálogo digital; su pérdida expone datos y deja sin herramienta de venta. | 2 | 3 | **6** | Mitigar | iPad con Find My / localización remota; borrado remoto habilitado; acceso por Face ID / PIN; sesión con expiración diaria; seguro de equipos electrónicos. | IT / Ops |
| **SHO-14** | Conflictos interpersonales entre shoppers (celos, competencia) | Rivalidad por citas de clientes VIP o comisiones altas genera ambiente tóxico, filtración de información o sabotaje. | 2 | 3 | **6** | Mitigar | Política de asignación de citas transparente y basada en disponibilidad; sesiones de team building trimestrales; código de conducta inter-shopper; canal anónimo de denuncias. | HR / Ops |
| **SHO-15** | Deterioro físico / estético del shopper que afecta imagen de marca | El shopper presenta imagen descuidada (vestimenta, higiene, actitud) que no corresponde al estándar luxury esperado por clientes. | 2 | 3 | **6** | Mitigar | Manual de imagen personal (dress code, higiene, actitud); kit de bienvenida con uniformidad sutil; feedback directo de ops manager; revisión de imagen en auditorías de calidad. | Quality / Ops |
| **SHO-16** | Shoppers usando redes sociales para promocionarse por cuenta propia | El shopper aprovecha contactos de clientes VIP para ofrecer servicio directo, evadiendo la plataforma y competencia desleal. | 2 | 3 | **6** | Mitigar | NDA con cláusula de no competencia post-baja (6 meses); seguimiento de redes sociales; incentivo de comisión superior a lo que podría cobrar solo; programa de embajador interno. | Legal / Ops |

## 5. Plan de Respuesta a Incidentes (Activación)

### 5.1 SHO-02 — Escándalo de conducta de shopper

- **Trigger**: Queja formal de cliente, denuncia en redes sociales, o detección interna de conducta inapropiada.
- **Acciones inmediatas (0–4 h)**:
  1. Suspensión inmediata del shopper (sin prejuzgar).
  2. Contacto personal con el cliente afectado para escucha activa y disculpa formal.
  3. Recopilación de evidencia (capturas, testimonios, logs de visita).
  4. Comunicar a Director, Legal y Marketing vía canal #crisis-shopper.
- **Acciones a corto plazo (4–48 h)**:
  1. Decisión de terminación o sanción según gravedad (código de conducta).
  2. Si es terminación: reasignación inmediata de citas pendientes a otro shopper; comunicación al cliente explicando «cambio de personal asignado».
  3. Evaluar compensación al cliente (visita gratuita, upgrade de membresía).
  4. Comunicado externo si hay exposición mediática (comunicado pre-aprobado por Legal).
- **Escalación**: Director informa a inversores en < 24 h si hay riesgo reputacional mediático.

### 5.2 SHO-03 / SHO-04 — Incidencia operativa (baja masiva o extravío)

- **Trigger**: Ausencia de > 2 shoppers en una ciudad en un mismo día, o reporte de extravío/robó de mercancía.
- **Acciones inmediatas**: Activar bench de reserva; contactar a shoppers de otra ciudad para cubrir si es viable; reportar a seguro en < 2 h para siniestros.
- **Acciones a corto plazo**: Revisar protocolo de transporte; audit de cumplimiento del shopper afectado; actualizar runbooks si el root cause es sistémico.

### 5.3 SHO-01 — Alerta de reclasificación laboral

- **Trigger**: Denuncia de un shopper, inspección de Trabajo notificada, o señales de autonomía limitada (control horario excesivo).
- **Acciones inmediatas**: Revisión de contratos con asesoría laboral; suspensión temporal de políticas que limiten autonomía (horarios rígidos, uniformidad obligatoria, multas).
- **Acciones a corto plazo**: Implementar autonomía real (agenda propia, facturación, elección de ruta); documentar independencia; negociar convenio especial si es necesario.

## 6. Dependencias con Otras Categorías

| Riesgo ID | Categoría Relacionada | Tipo de Dependencia |
|-----------|----------------------|---------------------|
| RIE-04 / RIE-05 | **Plataforma** | Causa: sin shoppers cualificados no hay servicio; la plataforma debe soportar onboarding, rating y gestión de disponibilidad. |
| RIE-06 | **Plataforma** | Efecto: NPS bajo se mide y gestiona desde la plataforma (encuestas, rating, CRM). |
| SHO-01 | **Administrativo / Regulación** | Causa: reclasificación laboral es un riesgo legal/regulatorio con sanciones administrativas. |
| SHO-02 | **Seguridad / Fraude** | Efecto: conducta inapropiada puede incluir filtración de datos (cross a PLA-05). |
| SHO-04 | **Consignación Marcas** | Causa: extravío de mercancía afecta stock consignado y relación con marca. |
| SHO-06 / SHO-07 | **Plataforma** | Causa: vehículos dependen de leasing logístico y tracking GPS (PLA-18). |
| SHO-13 | **Plataforma** | Causa: iPad expone datos de clientes (cross a PLA-05, PLA-23). |

## 7. Acciones Pendientes

- [ ] Validar compensación de shoppers (1.200€ fijo + 15€/visita + 5% comisión) con asesoría laboral — Legal — 2026-06-15
- [ ] Contratar seguros: RC shoppers, mercancía en tránsito, vehículos a todo riesgo — Legal — 2026-06-30
- [ ] Establecer bench de 2 shoppers de reserva por ciudad (entrenados y listos) — HR / Ops — 2026-07-15
- [ ] Diseñar manual de calidad del servicio y código de conducta shopper — Quality — 2026-06-20
- [ ] Implementar programa de shadowing obligatorio (3 primeras visitas) — Operations — 2026-06-30
- [ ] Configurar geofencing de llegada y alerta de retraso en app shopper — CTO / Mobile — 2026-07-01
- [ ] Contratar asesoría laboral especializada en modelo colaborativo / autónomos — Legal — 2026-06-10
- [ ] Realizar background check y referencias para todos los shoppers seleccionados — HR — 2026-06-30
- [ ] Definir política de baja de shopper por rating < 4.0 durante 2 meses consecutivos — Quality — 2026-07-01

---

**Reserva total asignada a categoría Shoppers**: **14.000€**  
**Documento elaborado por**: Operations / HR / Dirección del Proyecto  
**Fecha**: 2026-05-29  
**Versión**: 1.0
