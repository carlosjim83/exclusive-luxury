# Ficha de Riesgo por Categoría (PMI) — Fraude

> Usar este documento para desglosar, categorizar y planificar la respuesta a los riesgos de una área concreta del proyecto.

---

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Categoría** | Fraude |
| **Fecha** | 2026-05-28 |
| **Versión** | 1.0 |
| **Responsable** | Risk Manager (Responsable de Fraude y Riesgos) |

## 2. Alcance de la Categoría

Esta categoría cubre la identificación, evaluación y mitigación de amenazas relacionadas con conductas engañosas o malintencionadas orientadas a la obtención de un beneficio ilícito. Afecta directamente la custodia de mercancías de lujo, la integridad de las transacciones financieras, la confianza con las marcas asociadas y la reputación de la plataforma. Cubre el espectro de fraude interno (cometido por personal shoppers), fraude externo (clientes VVIP), fraude en la cadena de consignación (partners/boutiques) y fraude digital (identidad y pasarela).

## 3. Escala de Evaluación (PMI — Matriz de Probabilidad × Impacto)

| Probabilidad | Valor | Impacto | Valor |
|--------------|-------|---------|-------|
| Muy baja (≤ 10 %) | 1 | Mínimo (sin afectación crítica) | 1 |
| Baja (10–25 %) | 2 | Bajo (retrasa entregables leves) | 2 |
| Media (25–50 %) | 3 | Moderado (afecta coste/plazo 5–10 %) | 3 |
| Alta (50–75 %) | 4 | Alto (afecta coste/plazo > 10 % o calidad) | 4 |
| Muy alta (> 75 %) | 5 | Crítico (amenaza viabilidad del proyecto) | 5 |

**Umbral de criticidad**: Puntuación ≥ 12 (Prob. × Imp.) → Riesgo crítico.

## 4. Riesgos Identificados

### 4.1 Riesgos Críticos (Puntuación ≥ 12)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario | Reserva / Presupuesto | KRI | Umbral KRI |
|----|--------|-------------|-------|------|-------|----------------|--------------------|-------------|-----------------------|-----|------------|
| FRA-01 | Cambio por réplica durante la prueba | El cliente cambia la pieza auténtica por una copia exacta (réplica) en el vestidor aprovechando la intimidad de la prueba domiciliaria. | 3 | 5 | **15** | Mitigar | Uso de microetiquetas RFID/NFC criptográficas ocultas. El shopper escanea la pieza antes y después del probador. Fotos HD de costuras y números de serie en el CRM en tiempo real. | Operations Manager | 12.000 € (Inversión en chips NFC y lector app) | Lecturas fallidas o tags dañados en visitas. | > 0 anomalías criptográficas reportadas. |
| FRA-02 | Sustitución de productos (El "Switch") | El shopper sustituye una pieza auténtica de consignación por una réplica ("superclon") antes de la entrega o al devolverla tras prueba fallida. | 3 | 4 | **12** | Mitigar / Transferir | Protocolo digital obligatorio de Check-In/Check-Out fotográfico en boutique y en entrega. Custodia sellada. Contratación de seguro especializado de infidelidad de empleados. | Risk Manager | 15.000 € (Software de verificación y prima de seguro) | Desajustes en auditorías sorpresa o peritajes. | > 0 discrepancias de seriales entre check-in/out. |
| FRA-03 | Proveedores o boutiques fraudulentas | Intentos de introducir stock no auténtico o piezas reparadas/con taras en el flujo de captación de consignación. | 3 | 4 | **12** | Evitar | Filtrado exhaustivo y homologación formal de boutiques aliadas. Acuerdos firmados que exijan certificados de originalidad de fábrica y facturas oficiales. | Partnerships Manager | 5.000 € (Costes de verificación legal) | Intentos de entrega de stock sin certificado. | > 0 incidencias en el control de calidad de entrada. |
| FRA-04 | Suplantación de identidad del shopper | Ciberdelincuentes se hacen pasar por personal autorizado para acceder a la residencia del cliente o desviar el paquete antes de la sesión. | 3 | 4 | **12** | Mitigar | Código OTP dinámico enviado al cliente en la app antes de la sesión con la foto del shopper. El shopper debe validar este código OTP de forma presencial. | CTO / Tech Lead | 8.000 € (Desarrollo del módulo de validación OTP) | Reportes de visitas no programadas de shoppers. | > 0 avisos o discrepancias en la agenda de visitas. |

### 4.2 Riesgos Significativos (Puntuación 8–11)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario |
|----|--------|-------------|-------|------|-------|----------------|--------------------|-------------|
| FRA-05 | Ventas "en B" o bypass de plataforma | El shopper realiza transacciones directas u ofrece productos de terceros por fuera para evitar la comisión. | 3 | 3 | **9** | Mitigar | Auditorías aleatorias de calidad con evaluadores anónimos (Mystery Shopping). Contratos de exclusividad robustos con shoppers. | Operations Manager |
| FRA-06 | Desvío de fondos en la pasarela de pagos | Manipulación técnica o fraude interno en el CRM para desviar cobros de membresías o ventas a cuentas externas. | 2 | 4 | **8** | Mitigar | Autenticación multifactor (MFA), separación de roles (segregación de funciones) en el backend y auditorías externas de código. | CTO / Tech Lead |
| FRA-07 | "Wardrobing" o uso temporal abusivo | El cliente adquiere prendas exclusivas para lucirlas en un evento y solicita la devolución alegando disconformidad. | 3 | 3 | **9** | Mitigar | Implementación de etiquetas de gran tamaño visibles y no ocultables ("antirretorno") que impidan el uso estético de la prenda. | Operations Manager |
| FRA-08 | Apropiación indebida de devoluciones | El shopper no registra el retorno del producto tras un descarte del cliente, reportando un extravío para quedarse con la pieza. | 2 | 4 | **8** | Mitigar | Conciliación digital obligatoria en tiempo real. Firma digital del cliente confirmando el retorno físico de las piezas no compradas. | Risk Manager |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------|
| FRA-09 | Contracargos falsos (Chargeback fraud) | Disputas bancarias fraudulentas de clientes alegando cobros no autorizados tras recibir y probar la mercancía. | 2 | 3 | **6** | Aceptar / Transferir | Legal / DPO |
| FRA-10 | Colusión con marcas o boutiques | Shoppers que reciben comisiones informales para dar preferencia o priorizar sutilmente ciertas marcas sobre otras. | 2 | 3 | **6** | Mitigar | Operations Manager |
| FRA-11 | Falsos informes de daños por boutiques | Marcas socias que alegan daños inexistentes en el stock de retorno para forzar el pago de la prenda o activar el seguro. | 2 | 3 | **6** | Mitigar | Partnerships Manager |

## 5. Plan de Respuesta a Incidentes (Activación)

### Para riesgo: FRA-01 (Cambio por réplica durante la prueba)

- **Trigger / Condición de activación**: El escaneo obligatorio NFC post-vestidor arroja un fallo de firma criptográfica, o el shopper detecta una inconsistencia física evidente e irreversible en el artículo entregado y el cliente niega haberlo alterado.

- **Acciones inmediatas (0–24 h)**:
  - Mantener un tono diplomático y protocolario riguroso; no confrontar de forma agresiva al cliente VVIP en su domicilio.
  - Levantar un reporte digital inmediato en el CRM adjuntando las fotografías de comparación Check-In vs Check-Out.
  - No abandonar la propiedad sin dejar constancia (acta digital en la app o correo electrónico de soporte formalizado con el cliente en tiempo real) de la no conformidad detectada en la pieza retirada.
  - Bloquear preventivamente la cuenta de membresía del cliente para evitar nuevas transacciones de seguridad.

- **Acciones a corto plazo (1–7 días)**:
  - Enviar la pieza bajo cadena de custodia a un perito independiente de autenticidad para certificar formalmente la sustitución por réplica.
  - Notificar formalmente al cliente a través del equipo legal mediante burofax.
  - Tramitar la reclamación ante la aseguradora de mercancías y de fraude.
  - Si la mediación amistosa fracasa, interponer denuncia formal ante la Policía Nacional por estafa y apropiación indebida.

- **Escalación**: Informar de manera telefónica e inmediata al Risk Manager y al Director del Proyecto en un plazo menor a 1 hora desde el incidente.

---

### Para riesgo: FRA-02 (Sustitución de productos - El "Switch" por el shopper)

- **Trigger / Condición de activación**: Una boutique asociada reporta la recepción de un producto réplica devuelto por la plataforma, o un evaluador encubierto (mystery shopper) constata que un shopper ofrece desviar la transacción.

- **Acciones inmediatas (0–24 h)**:
  - Revocar de manera inmediata e irreversible todos los accesos del shopper al CRM, furgoneta de leasing, iPad corporativo y credenciales de correo.
  - Suspensión cautelar de empleo y sueldo del shopper involucrado.
  - Retención del historial de geolocalización GPS de su vehículo corporativo de los últimos 15 días.

- **Acciones a corto plazo (1–7 días)**:
  - Auditoría integral de todas las entregas y retornos de stock gestionadas por dicho shopper en los últimos 3 meses con las boutiques socias.
  - Iniciar el trámite con la aseguradora bajo la póliza de "Infidelidad de Empleados" para recuperar el valor de la pérdida.
  - Formulación de denuncia penal contra el trabajador ante las autoridades judiciales.

- **Escalación**: Notificar al Director del Proyecto y al DPO/Asesor Legal en un plazo máximo de 2 horas.

## 6. Dependencias con Otras Categorías

| Riesgo ID | Categoría Relacionada | Tipo de Dependencia |
|-----------|-----------------------|---------------------|
| FRA-01 | Seguridad / Tecnología | Causa: Un fallo técnico de la app (ej. API caída) que impida al shopper realizar el escaneo fotográfico o NFC en tiempo real in situ expone al proyecto a un cambio no registrable en el vestidor. |
| FRA-02 | Shoppers / Administrativo | Causa: Un proceso débil en la verificación de antecedentes (vetting) o reclutamiento abre las puertas a personal propenso a cometer fraude. |
| FRA-03 | Consignación / Alianzas | Efecto: Detectar piezas falsas provenientes de un aliado puede forzar la disolución de contratos estratégicos de consignación y dañar la reputación del catálogo. |

## 7. Acciones Pendientes

- [ ] Integrar el SDK de verificación criptográfica NFC y configurar el sistema de Check-In fotográfico HD en la app del shopper — CTO / Tech Lead — Fecha límite: Mes 8 (Antes del Soft Launch)
- [ ] Desarrollar y aprobar el protocolo legal de actuación en domicilio VVIP en caso de sospecha de cambio por réplica — Legal / DPO — Fecha límite: Mes 7
- [ ] Contratación y firma final de la póliza de seguro de Infidelidad de Empleados y Fraude Multirriesgo — Director del Proyecto — Fecha límite: Mes 7

---

**Documento elaborado por**: Responsable de Fraude y Riesgos (Risk Manager)  
**Fecha**: 2026-05-28  
**Versión**: 1.0
