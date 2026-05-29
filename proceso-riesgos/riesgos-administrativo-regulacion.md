# Riesgos Administrativos / Regulatorios — Ficha de Categoría

> Riesgos relacionados con el cumplimiento normativo, legal, fiscal y de protección de datos en España y la UE.  
> Basado en el [Plan de Gestión de Riesgos](../fase-planificacion/plan-gestion-riesgos.md), metodología PMI y normativa vigente (RGPD, LSSICE, Ley de Consumidores, Código de Comercio).

---

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Categoría** | Administrativo / Regulación |
| **Fecha** | 2026-05-29 |
| **Versión** | 1.0 |
| **Responsable** | Legal / DPO / Director del Proyecto |

## 2. Alcance de la Categoría

Esta ficha cubre los riesgos de incumplimiento de la normativa española y europea aplicable al proyecto: RGPD/GDPR y protección de datos personales de clientes VIP, LOPDGDD, Ley de Consumidores y Usuarios ( Ley 3/2014), LSSICE (comercio electrónico), normativa laboral sobre autónomos/colaboradores, obligaciones fiscales (IVA, IRPF, modelo 347), normativa de transporte y seguros, y posibles cambios legislativos durante el ciclo de vida del proyecto.

**Contexto**: El proyecto procesa datos personales sensibles de clientes de alto perfil (direcciones, histórico de compras, preferencias de estilo, datos financieros). Los shoppers son colaboradores autónomos. La plataforma gestiona pagos online, reservas y comunicaciones electrónicas.

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
| **RIE-15** | Reclasificación laboral de shoppers por Inspección de Trabajo | La autoridad reclasifica a los shoppers como empleados, generando sanciones, costes de cotización a la Seguridad Social y obligaciones laborales. | 2 | 5 | **10** | Mitigar | Contratos claros de colaboración / autónomos; autonomía real en gestión de agenda y rutas; facturación por servicios; asesoría laboral especializada en modelo colaborativo; seguro de responsabilidad civil. | Legal / HR | 1.400€ | Denuncias o inspecciones activas | > 0 |
| **RIE-16** | Sanción por incumplimiento del RGPD (hasta 20M€ o 4% VT) | Se recibe una denuncia o sanción por tratamiento indebido de datos personales de clientes VIP: falta de consentimientos válidos, derecho al olvido no implementado, filtración. | 2 | 5 | **10** | Mitigar | DPO (Delegado de Protección de Datos) desde el inicio; política de privacidad robusta; consentimientos explícitos granularizados; derechos ARCO implementados en la plataforma; auditoría RGPD pre-lanzamiento; registro de actividades de tratamiento (RAT). | DPO / Legal | 2.500€ | Quejas formales ante AEPD | > 0 |
| **ADM-01** | Infracción fiscal por incorrecta gestión del IVA en consignación | Error en la repercusión del IVA en ventas de consignación (el obligado tributario es la marca, no la plataforma) generando sanciones de Hacienda. | 3 | 4 | **12** | Mitigar | Asesoría fiscal especializada en modelo consignación; facturación clara donde la marca es quien emite factura al cliente final; la plataforma solo factura comisión de intermediación; revisión trimestral por despacho de abogados fiscalistas. | Finance / Legal | 1.100€ | Regularizaciones fiscales requeridas | > 0 |
| **ADM-02** | Incumplimiento de la Ley de Consumidores y Usuarios | No información de condiciones contractuales, derecho de desistimiento de 14 días no garantizado, o cláusulas abusivas en contrato de membresía. | 3 | 4 | **12** | Mitigar | Contrato de membresía revisado por abogado de consumo; información precontractual clara en landing page; proceso de desistimiento automatizado en plataforma; cláusulas transparentes sin letra pequeña. | Legal | 900€ | Reclamaciones en consumo | > 5/año |
| **ADM-03** | Responsabilidad civil por daños durante visita sin seguro suficiente | Un incidente en domicilio del cliente (rotura, accidente, robo) genera reclamación por daños que supera el capital asegurado. | 3 | 4 | **12** | Mitigar | Seguro de RC con capital mínimo de 300.000€; seguro de mercancía en tránsito hasta 100.000€; seguro de vehículos a todo riesgo; cláusulas de limitación de responsabilidad en contrato de membresía; protocolo de actuación post-incidente. | Legal | 1.400€ | Reclamaciones > 5.000€ | > 0 |
| **ADM-04** | Denuncia por publicidad engañosa o comparativa ilícita | Las campañas de marketing exageran el servicio ("ilimitado", "exclusivo") o comparan con competidores sin base objetiva, generando denuncia ante la AESAN o FACUA. | 3 | 4 | **12** | Mitigar | Revisión legal de todos los materiales de marketing antes de publicación; evitar términos absolutos sin sustento; disclaimer claro de condiciones; registro de versiones aprobadas por Legal. | Marketing / Legal | 700€ | Requerimientos de AESAN / FACUA | > 0 |
| **ADM-05** | Incumplimiento de la LSSICE en comunicaciones electrónicas | Envío de emails/SMS de marketing sin consentimiento explícito previo, sin identificación clara del remitente, o sin opción de baja fácil. | 3 | 4 | **12** | Mitigar | Sistema de doble opt-in para suscripciones; pie de email con identificación completa y enlace de baja un clic; registro de consentimientos con timestamp e IP; auditoría semestral de listas de mailing. | Marketing / DPO | 500€ | Denuncias LSSICE | > 0 |

### 4.2 Riesgos Significativos (Puntuación 8–11)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------------|-------------|
| **ADM-06** | Obligaciones de información ante AEPD por filtración de datos | Materialización de un riesgo de seguridad (PLA-05) obliga a notificar a la AEPD en 72 h y a comunicar a clientes afectados. | 3 | 3 | **9** | Mitigar | Protocolo de respuesta a brechas documentado; DPO como punto de contacto con AEPD; plantillas de comunicación pre-aprobadas; simulacro anual de respuesta a brecha. | DPO / Legal | 500€ |
| **ADM-07** | Infracción por transporte de mercancía sin licencia o autorización | Los shoppers transportan mercancía de consignación en vehículo de empresa sin la autorización de transporte mercancías (Ley de Ordenación de Transportes). | 2 | 4 | **8** | Mitigar | Contrato de leasing que incluya autorización de transporte de mercancías; licencia de transporte ligera (hasta 3.500 kg); asesoría de tráfico para validar modelo; seguro que cubra transporte de bienes. | Legal / Ops | 500€ |
| **ADM-08** | Desprotección intelectual de la marca propia | Un tercero registra "Personal Shopping Luxury" o similar antes de que el proyecto lo haga, o utiliza la marca sin autorización. | 2 | 4 | **8** | Mitigar | Solicitud de registro de marca en OEPM antes del lanzamiento público; búsqueda de antecedentes; monitorización de usos no autorizados; contratos de confidencialidad con todos los proveedores. | Legal | 700€ |
| **ADM-09** | Incumplimiento de la normativa de protección de datos de trabajadores | Tratamiento de datos personales de shoppers (DNI, cuenta bancaria, historial médico) sin las garantías del RGPD en recursos humanos. | 3 | 3 | **9** | Mitigar | Política de privacidad de RRHH separada; acceso restringido a datos sensibles; destrucción de documentación física tras digitalización; formación del equipo de HR en protección de datos. | HR / DPO | 400€ |
| **ADM-10** | Cambio legislativo que afecta el modelo de negocio | Nueva ley que regula los servicios de personal shopping, limita la consignación, o eleva impuestos al lujo de forma imprevista. | 2 | 4 | **8** | Aceptar | Monitorización de cambios legislativos (boletines oficiales); asesoría jurídica con alertas normativas; flexibilidad en modelo para adaptación rápida; fondo de contingencia regulatorio. | Legal / Director | 500€ |
| **ADM-11** | Reclamación de propiedad intelectual por parte de una marca | Uso de fotografías, logos o materiales de marca en marketing sin autorización explícita, generando reclamación por infracción de copyright. | 2 | 4 | **8** | Mitigar | Acuerdos de uso de imagen con cada marca; fotografías propias de piezas (no catálogos oficiales); disclaimer de derechos de imagen; seguro de PI que cubra reclamaciones por contenido. | Marketing / Legal | 400€ |
| **ADM-12** | Incumplimiento de obligaciones de prevención de blanqueo de capitales | El servicio de alto valor (2.000€ membresía + compras de lujo) puede ser utilizado para blanqueo de capitales; falta de protocolo AML. | 2 | 4 | **8** | Mitigar | Protocolo AML adaptado a PYME; identificación y verificación de clientes (KYC); reporte de operaciones sospechosas a SEPBLAC; límite de compra en efectivo; formación del equipo en señales de alerta. | Legal / Finance | 500€ |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------|
| **ADM-13** | Obligaciones de conservación de datos comerciales | El Código de Comercio exige conservar documentación contable y mercantil por 6 años; conflicto con derecho al olvido del RGPD. | 3 | 2 | **6** | Mitigar | Implementar política de retención documental; pseudonimizar datos de identidad mientras se conservan hechos contables; registro de bases legales de conservación. | DPO / Legal |
| **ADM-14** | Infracción de normativa de protección de menores | La plataforma no tiene mecanismos para impedir que menores de edad contraten la membresía sin autorización parental. | 2 | 3 | **6** | Mitigar | Verificación de edad en registro (DNI/tarjeta); restricción de servicios a mayores de 18; cláusula de mayoría de edad en contrato; sistema de denuncia. | Legal |
| **ADM-15** | Reclamación por cláusulas de jurisdicción o arbitraje | El contrato de membresía establece jurisdicción extranjera o arbitraje costoso que un juzgado español declara nulo por lesivo al consumidor. | 2 | 3 | **6** | Mitigar | Jurisdicción exclusiva en tribunales del domicilio del consumidor (conforme a Directiva europea); cláusulas de mediación previa no vinculante; asesoría en Derecho de Consumo. | Legal |
| **ADM-16** | Incumplimiento de normativa de residuos y embalajes | La gestión de embalajes de lujo (cajas, bolsas, tissue) no cumple la Ley de Residuos (LRSC) o el régimen de responsabilidad ampliada del productor (RAEE/SCRAP). | 2 | 2 | **4** | Aceptar | Adhesión a SCRAP de embalajes; uso de materiales reciclables; información al cliente sobre reciclaje; minimización de packaging. | Operations |

## 5. Plan de Respuesta a Incidentes (Activación)

### 5.1 RIE-16 / ADM-06 — Brecha de datos o requerimiento de AEPD

- **Trigger**: Requerimiento formal de la AEPD; detección de filtración de datos; denuncia de cliente por tratamiento indebido.
- **Acciones inmediatas (0–24 h)**:
  1. Notificación interna a DPO, Legal y Director.
  2. Evaluación del alcance de la brecha (qué datos, cuántos afectados, cómo ocurrió).
  3. Contención: revocación de accesos, parcheo de vulnerabilidad, preservación de evidencia.
  4. Si es brecha con riesgo para derechos: notificación a AEPD en las 72 h siguientes.
- **Acciones a corto plazo (1–7 días)**:
  1. Comunicación a clientes afectados con transparencia y oferta de compensación.
  2. Contratar forense externo si el root cause no es evidente.
  3. Revisión del Registro de Actividades de Tratamiento (RAT).
  4. Actualización de políticas y protocolos.
- **Escalación**: Director informa a inversores en < 4 h si hay > 100 clientes afectados o si la sanción potencial supera 50.000€.

### 5.2 ADM-01 / ADM-02 / ADM-04 — Requerimiento de Hacienda, Consumo o AESAN

- **Trigger**: Requerimiento formal de regularización; denuncia de cliente; inspección in situ.
- **Acciones inmediatas**: Reunión con Legal y asesoría externa; recopilación de documentación; suspensión temporal de la práctica cuestionada.
- **Acciones a corto plazo**: Presentación de alegaciones; acuerdo de pago si es sanción económica; actualización de contratos/procesos para evitar reincidencia.

### 5.3 ADM-07 / ADM-12 — Alerta regulatoria sectorial

- **Trigger**: Cambio en la normativa de transporte, AML o comercio electrónico que afecta operativa.
- **Acciones inmediatas**: Revisión por asesoría legal especializada; evaluación de impacto en modelo.
- **Acciones a corto plazo**: Adaptación de contratos, seguros o procesos; comunicación a stakeholders.

## 6. Dependencias con Otras Categorías

| Riesgo ID | Categoría Relacionada | Tipo de Dependencia |
|-----------|----------------------|---------------------|
| RIE-15 | **Shoppers** | Causa: reclasificación laboral es un riesgo directo del modelo de shoppers autónomos. |
| RIE-16 | **Plataforma / Seguridad** | Efecto: filtración de datos (PLA-05) desencadena sanción RGPD. |
| ADM-01 | **Consignación Marcas** | Causa: modelo de consignación tiene implicaciones fiscales complejas en IVA. |
| ADM-03 | **Shoppers** | Causa: daños durante visita dependen del shopper y su seguro. |
| ADM-05 | **Mercado** | Causa: comunicaciones de marketing generan riesgo LSSICE. |
| ADM-07 | **Shoppers / Consignación** | Causa: transporte de mercancía por shoppers requiere licencia. |
| ADM-12 | **Fraude / Consignación** | Causa: AML es un riesgo compartido con transacciones de alto valor. |
| ADM-11 | **Mercado / Consignación** | Causa: uso de materiales de marca en marketing sin autorización. |

## 7. Acciones Pendientes

- [ ] Designar DPO formalmente y registrarlo ante la AEPD — DPO / Legal — 2026-06-10
- [ ] Redactar política de privacidad y cláusulas de consentimiento GDPR — DPO / Legal — 2026-06-15
- [ ] Crear Registro de Actividades de Tratamiento (RAT) completo — DPO — 2026-06-30
- [ ] Auditar RGPD pre-lanzamiento con despacho especializado — Legal — 2026-07-15
- [ ] Revisar contrato de membresía por abogado de consumo — Legal — 2026-06-20
- [ ] Validar modelo fiscal de consignación con asesoría fiscal — Finance / Legal — 2026-06-30
- [ ] Registrar marca "Personal Shopping Luxury" en OEPM — Legal — 2026-06-10
- [ ] Contratar seguros: RC (300K€), mercancía (100K€), vehículos a todo riesgo — Legal — 2026-06-30
- [ ] Implementar protocolo AML y formación al equipo — Legal / Finance — 2026-07-15
- [ ] Solicitar autorización de transporte mercancías para vehículos de flota — Legal / Ops — 2026-07-01

---

**Reserva total asignada a categoría Administrativo / Regulación**: **12.000€**  
**Documento elaborado por**: Legal / DPO / Dirección del Proyecto  
**Fecha**: 2026-05-29  
**Versión**: 1.0
