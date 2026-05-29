# Riesgos de Plataforma — Ficha de Categoría

> Riesgos intrínsecos a la plataforma digital de Personal Shopping Luxury.  
> Basado en el [Plan de Gestión de Riesgos](../fase-planificacion/plan-gestion-riesgos.md), metodología PMI y frameworks OWASP Top 10 / API Security / NIST CSF.

---

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Categoría** | Plataforma Digital |
| **Fecha** | 2026-05-28 |
| **Versión** | 2.0 |
| **Responsable** | CTO / Lead Técnico |

## 2. Alcance de la Categoría

Esta ficha cubre los riesgos relacionados con el ciclo de vida completo de la plataforma digital: arquitectura, desarrollo, despliegue, operación, seguridad, escalabilidad, integraciones con terceros y endpoints móviles. Afecta directamente a la capacidad de ofrecer el servicio de personal shopping, gestionar reservas, procesar pagos, sincronizar inventario de consignación y proteger los datos de clientes VIP.

**Frameworks de referencia aplicados**: OWASP Top 10 (2021), OWASP API Security Top 10, OWASP Mobile Security, NIST Cybersecurity Framework.

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
| **PLA-02** | Bugs críticos en flujo de reserva y pago | Errores que impiden completar una reserva o transacción, generando abandono y pérdida de ingresos directos. | 4 | 4 | **16** | Mitigar | Tests E2E obligatorios en CI/CD; entorno de staging con datos reales anonimizados; QA manual pre-release; feature flags para rollback inmediato. | CTO / QA Lead | 1.500€ | Tasa de abandono en checkout | > 15 % |
| **PLA-14** | Fallo de sincronización de inventario en tiempo real | Lag o fallo en la sincronización de stock de consignación con marcas socias, generando venta de artículos no disponibles (overselling) o catálogos vacíos. | 4 | 4 | **16** | Mitigar | Arquitectura event-driven (webhooks/cola de mensajes) con idempotency keys; circuit breakers manuales; jobs de reconciliación cada 60 seg; validación de schema con alertas. | CTO / Integraciones | 1.300€ | Tasa de overselling | > 1 % |
| **PLA-01** | Caída de servicio / indisponibilidad de la plataforma | Interrupción del servicio que impide reservas, pagos o acceso a información de visitas. Afecta confianza del cliente luxury. | 3 | 4 | **12** | Mitigar | Arquitectura multi-AZ; auto-scaling; monitoreo 24/7 (Datadog/New Relic); runbook de incidentes; SLA 99.9 % con proveedor cloud. | CTO | 1.300€ | Tiempo de indisponibilidad (min/mes) | > 30 min/mes |
| **PLA-03** | Deuda técnica por desarrollo acelerado del MVP | Decisiones de diseño tomadas por velocidad dificultan evolución, escalado y corrección de bugs en meses posteriores. | 4 | 3 | **12** | Mitigar | Definición de "done" que incluye refactor; 20 % de capacidad del sprint dedicado a deuda técnica; arquitectura modular desde día 1; documentación obligatoria de API. | Lead Técnico | 1.000€ | Ratio de código sin tests | > 30 % |
| **PLA-04** | Integración fallida con pasarela de pagos o servicios externos | Incidencias en la conexión con Stripe, Twilio, calendarios o CRM que bloquean operaciones core del negocio. | 3 | 4 | **12** | Mitigar | Sandbox testing exhaustivo antes de producción; webhooks con reintentos y cola de mensajes; proveedor alternativo validado (pasarela B); contratos SLA con terceros. | CTO | 1.000€ | Tasa de error en webhooks de pago | > 2 % |
| **PLA-05** | Fallos de seguridad o filtración de datos | Violación de datos personales, financieros o de geolocalización de clientes VIP. Consecuencias legales (RGPD), reputacionales y económicas extremas. | 3 | 4 | **12** | Mitigar | Auditoría de seguridad pre-lanzamiento (pentest); cifrado en tránsito y en reposo (AES-256); autenticación MFA para shoppers y admin; WAF; DPO asignado; plan de respuesta a incidentes documentado. | CTO / Seguridad | 2.000€ | Vulnerabilidades críticas detectadas | > 0 |
| **PLA-11** | Doble reserva por condición de carrera (race condition) | Dos clientes VIP reservan simultáneamente el mismo slot de shopper, generando sobrecompromiso y fallo de servicio. | 3 | 4 | **12** | Mitigar | Bloqueo pesimista o tokens atómicos a nivel de base de datos; control de concurrencia optimista con retry; validación final antes de confirmar. | Lead Backend | 700€ | Tasa de dobles reservas | > 0.5 % |
| **PLA-13** | Fallo de TTL en reserva de inventario del carrito | Items en carrito expiran incorrectamente, generando stock fantasma (mostrado como disponible pero no lo está) o overselling. | 3 | 4 | **12** | Mitigar | TTL-based soft reservations con WebSocket/SSE; reconciliación periódica; límites de stock duro antes de confirmación de pago. | Lead Backend | 800€ | Tasa de stock fantasma | > 2 % |
| **PLA-16** | Fallo en orquestación de pagos complejos | Transacciones con múltiples fases (depósito + pago final, split payment) fallan a mitad de flujo, dejando órdenes en estado indeterminado y cobros incorrectos. | 3 | 4 | **12** | Mitigar | Idempotency keys en cada payment intent; patrón saga con transacciones compensatorias; estado de pago en tiempo real visible para el cliente. | Lead Backend / CTO | 800€ | Pagos en estado indeterminado | > 1 % |
| **PLA-17** | Perfilado automatizado sin intervención humana (GDPR Art. 22) | El sistema crea perfiles automatizados de clientes VIP (poder adquisitivo, preferencias, predicciones) sin revisión humana significativa, violando el RGPD. | 3 | 4 | **12** | Mitigar | Documentar toda lógica de perfilado; gates de revisión humana para decisiones significativas; opt-out explícito y transparencia en política de privacidad. | DPO / Legal | 500€ | Decisiones automatizadas sin revisión | > 0 |
| **PLA-19** | Caída del CRM / Client Data Platform | Fallo del CRM integrado impide acceso a historial, preferencias y notas de relación durante citas activas con clientes VIP. | 3 | 4 | **12** | Mitigar | Réplicas locales read-only de datos críticos; flujos de trabajo fallback; SLA con penalizaciones negociadas con el vendor. | CTO / Ops | 700€ | Tiempo de indisponibilidad CRM | > 15 min |
| **PLA-21** | Rotura de API de inventario de marca socio | Cambio de schema o rate limit por parte de una marca sin aviso previo rompe el feed de stock, generando catálogo incompleto o overselling. | 3 | 4 | **12** | Mitigar | Capa de abstracción/adapter por marca; validación de schema con alertas; fallback a carga manual para socios clave; monitoreo de cambios de API. | CTO / Integraciones | 700€ | Feeds rotos sin recuperación en < 2 h | > 0 |
| **PLA-22** | Ingeniería inversa de app móvil de shoppers | Atacantes extraen API keys, endpoints internos o lógica de negocio de la app shopper, permitiendo scraping o automatización no autorizada. | 3 | 4 | **12** | Mitigar | Ofuscación de código (R8/ProGuard); capas nativas C++ para lógica sensible; certificate pinning; rotación periódica de API keys. | Lead Mobile | 700€ | Peticiones anómalas a API | > 5 % de baseline |
| **PLA-23** | Almacenamiento local inseguro en dispositivos shopper | La app cachea PII de clientes, citas o fotos de forma insegura en el dispositivo, accesible si se compromete. | 3 | 4 | **12** | Mitigar | Base de datos local cifrada (SQLCipher/Realm encryption); uso de Android Keystore / iOS Keychain; capacidad de borrado remoto. | Lead Mobile | 700€ | Dispositivos sin cifrado local | > 0 |
| **PLA-25** | Ejecución en dispositivos rooteados / jailbroken | Shoppers utilizan dispositivos comprometidos que saltan controles de seguridad del SO, exponiendo memoria de la app y credenciales. | 3 | 4 | **12** | Mitigar | RASP (Runtime Application Self-Protection) para detectar root/jailbreak; bloqueo de ejecución en dispositivos comprometidos; política BYOD estricta. | Lead Mobile / Seguridad | 500€ | Dispositivos rooteados con acceso | > 0 |
| **PLA-26** | Broken Access Control / IDOR (OWASP A01) | Usuarios acceden a recursos o datos de otros clientes/shoppers manipulando IDs en URLs o payloads (e.g., ver agenda o datos de otro VIP). | 3 | 4 | **12** | Mitigar | Verificación de autorización en cada endpoint; uso de UUIDs no secuenciales; listas de control de acceso (RBAC/ABAC) centralizadas; tests de seguridad automatizados. | Lead Backend / Seguridad | 800€ | Accesos no autorizados detectados | > 0 |
| **PLA-27** | Inyección SQL / XSS / comandos (OWASP A03) | Entradas no sanitizadas permiten ejecución de código malicioso en base de datos, navegadores o servidor. | 3 | 4 | **12** | Mitigar | Prepared statements ORM; sanitización de inputs; CSP headers; escapes en templates; SAST/DAST en pipeline CI/CD. | Lead Backend / Seguridad | 800€ | Vulnerabilidades de inyección | > 0 |
| **PLA-30** | Exposición excesiva de datos en API (OWASP API3) | Las APIs devuelven más datos de los necesarios (e.g., datos completos del cliente cuando solo se necesita nombre), facilitando filtraciones. | 3 | 4 | **12** | Mitigar | Contratos de API estrictos (DTOs); validación de respuesta contra schema; revisión manual de endpoints; principio de mínimo privilegio. | Lead Backend | 700€ | Campos sensibles en respuestas API | > 0 |
| **RIE-12** | Retraso en desarrollo plataforma (> 15 días) | El MVP no está listo para la fecha de lanzamiento pactada, retrasando ingresos y la operación completa. | 3 | 4 | **12** | Mitigar | MVP enfocado en flujo crítico (reserva + pago); sprints de 2 semanas con entregables demoables; outsourcing de módulos no críticos (chat, analytics); lanzamiento con web app responsive antes de app nativa. | CTO | 1.500€ | Burndown del sprint | < 70 % completado |

### 4.2 Riesgos Significativos (Puntuación 8–11)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------------|-------------|
| **PLA-06** | Escalabilidad insuficiente en picos de demanda | La plataforma no soporta aumentos súbitos de tráfico (campañas marketing, eventos lanzamiento), causando lentitud o caídas. | 3 | 3 | **9** | Mitigar | Load testing con k6/Artillery antes de cada campaña; auto-scaling basado en CPU + conexiones DB; caché en Redis para catálogo y disponibilidad; CDN para assets estáticos. | CTO / DevOps |
| **PLA-08** | Incompatibilidad o experiencia degradada en dispositivos móviles | El MVP web no funciona correctamente en iOS/Safari o Android/Chrome, donde reside la mayoría del tráfico de clientes luxury. | 3 | 3 | **9** | Mitigar | Mobile-first responsive design; testing cross-browser/browserstack en CI; métricas Core Web Vitals como gate de release; PWA como paso intermedio antes de app nativa. | Lead Frontend |
| **PLA-07** | Pérdida de datos por fallo de backup o disaster recovery | Corrupción o eliminación accidental de bases de datos sin capacidad de restauración completa en el RPO/RTO definido. | 2 | 4 | **8** | Mitigar | Backups automatizados diarios (DB + storage) con retención 30 días; restore test mensual; replicación multi-región; RPO ≤ 1 h, RTO ≤ 4 h documentado. | DevOps / SysAdmin |
| **PLA-12** | Manipulación de precios y cálculos | Ataques explotan errores de redondeo, conversión de divisa o acumulación de cupones para reducir artificialmente precios de artículos de lujo. | 2 | 4 | **8** | Mitigar | Motor de precios centralizado y autoritativo en servidor; prohibición de stacking de cupones; logs de integridad de precios; validación de precio final antes de pago. | Lead Backend |
| **PLA-15** | Fallo de notificaciones push críticas | Clientes o shoppers pierden confirmaciones de reserva, cambios de horario o alertas de vehículo por fallo de APNs/FCM o bloqueo del dispositivo. | 4 | 3 | **9** | Mitigar | Redundancia multi-canal (push + SMS + bandeja in-app); tracking de delivery receipts; banners de notificación no leída en la UI. | Lead Mobile / DevOps |
| **PLA-18** | Privacidad del tracking GPS de shoppers | El seguimiento continuo de geolocalización de shoppers constituye procesamiento de datos personales bajo RGPD; falta de transparencia o consentimiento genera responsabilidad regulatoria. | 4 | 3 | **9** | Mitigar | Consentimiento explícito para tracking; limitar seguimiento a turnos activos; anonimización de datos de localización histórica tras 30 días; acceso del shopper a sus datos. | DPO / Lead Mobile |
| **PLA-20** | Fallo del proveedor de comunicaciones (SMS/email) | Caída de Twilio, SendGrid o similar bloquea confirmaciones de reserva, OTPs o actualizaciones de agenda, degradando confianza y generando no-shows. | 3 | 3 | **9** | Mitigar | Failover multi-proveedor (primario + secundario); OTPs con fallback a llamada de voz o TOTP in-app; monitoreo de tasa de entrega. | DevOps |
| **PLA-24** | Exfiltración de datos por screenshots | Shoppers capturan pantallas de perfiles de clientes o conversaciones de chat y las comparten externamente, violando confidencialidad. | 4 | 3 | **9** | Mitigar | Bloqueo de screenshots a nivel de SO donde sea posible; watermark en pantallas sensibles (user ID + timestamp); monitoreo de patrones de acceso masivo. | Lead Mobile / Seguridad |
| **PLA-28** | Uso de componentes obsoletos o vulnerables (OWASP A06) | Dependencias, librerías o frameworks con vulnerabilidades conocidas (CVE) sin parchear exponen la plataforma a exploits automatizados. | 3 | 3 | **9** | Mitigar | Inventario de dependencias (SBOM); escaneo automatizado de vulnerabilidades (Snyk/Dependabot) en CI/CD; política de actualización de parches críticos en < 48 h. | DevSecOps |
| **PLA-29** | Server-Side Request Forgery (SSRF) (OWASP A10) | La plataforma es forzada a realizar peticiones a servicios internos o externos no autorizados (e.g., metadata cloud, APIs internas) mediante URLs manipuladas. | 2 | 4 | **8** | Mitigar | Lista blanca de dominios/IPs permitidos; deshabilitar esquemas no HTTP; sandbox de resolución DNS; segmentación de red interna. | Lead Backend / Seguridad |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------|
| **RIE-14** | Dependencia de un proveedor tecnológico clave | Bloqueo, subida de precio o discontinuación del servicio cloud, pasarela o herramienta core utilizada. | 3 | 2 | **6** | Mitigar | Arquitectura desacoplada (microservicios / bounded contexts); uso de estándares abiertos (REST, OAuth, SQL); plan B documentado para cada proveedor crítico; datos exportables siempre. | CTO |
| **PLA-09** | Ataque DDoS o ransomware contra la plataforma | Saturación de la infraestructura o cifrado de datos con fines extorsivos, bloqueando operaciones. | 2 | 3 | **6** | Transferir | WAF con protección DDoS (Cloudflare/AWS Shield); seguro de ciberriesgo con cobertura por interrupción de negocio; snapshot inmutables de infraestructura. | CTO / Legal |
| **PLA-10** | Obsolescencia tecnológica del stack elegido | El framework, lenguaje o infraestructura seleccionados pierden soporte o comunidad en 2–3 años, encareciendo mantenimiento. | 2 | 2 | **4** | Aceptar | Stack maduro y probado (Node.js/Python + React + PostgreSQL + AWS/GCP); revisión anual de roadmap de tecnologías; contrato de soporte extendido si es necesario. | Lead Técnico |
| **PLA-31** | Cross-border data transfer sin salvaguardas | Datos de clientes o shoppers transferidos a proveedores cloud no-UE sin cláusulas contractuales estándar (SCC) o decisión de adecuación. | 3 | 2 | **6** | Mitigar | Mapeo de todos los flujos de datos; implementación de SCCs; residencia de datos en UE cuando sea posible; Transfer Impact Assessments (TIA) actualizados. | DPO / CTO |
| **PLA-32** | Falta de logging y monitorización de seguridad (OWASP A09) | Eventos de seguridad (accesos, errores, cambios críticos) no se registran o no se monitorizan, impidiendo detección y respuesta a incidentes. | 3 | 2 | **6** | Mitigar | Centralización de logs (SIEM); alertas en tiempo real para eventos de autenticación, autorización y cambios de datos; retención de logs por 12 meses; revisión mensual. | DevSecOps |
| **PLA-33** | Fallo de integridad de software y datos (OWASP A08) | Compromiso de pipelines CI/CD o dependencias que introducen código malicioso; falta de firma de commits y artefactos. | 2 | 3 | **6** | Mitigar | Firma GPG de commits y artefactos; checksums de dependencias; control de acceso MFA a CI/CD; repositorios inmutables; escaneo de supply chain. | DevSecOps |

## 5. Plan de Respuesta a Incidentes (Activación)

### 5.1 PLA-01 / PLA-02 / PLA-05 / PLA-26 / PLA-27 — Incidentes críticos en producción

- **Trigger**: Alerta de monitoreo que indica indisponibilidad > 5 min, tasa de error > 5 %, detección de vulnerabilidad explotada, o acceso no autorizado confirmado.
- **Acciones inmediatas (0–2 h)**:
  1. Página al on-call engineer vía PagerDuty/Opsgenie.
  2. Si es degradación parcial: activar feature flag de deshabilitación del módulo afectado.
  3. Si es indisponibilidad total: rollback al último deploy estable (objetivo < 15 min).
  4. Si es acceso no autorizado o filtración: revocar tokens/sesiones afectadas; preservar evidencia forense.
  5. Comunicar a Director y Operations vía canal #incidentes de Slack.
- **Acciones a corto plazo (2–24 h)**:
  1. Post-mortem obligatorio en las 24 h siguientes a la resolución.
  2. Identificar root cause y ticket de corrección priorizado para el siguiente sprint.
  3. Si afecta datos de clientes: notificar a DPO y evaluar comunicación a AEPD/clientes según RGPD (72 h).
- **Escalación**: CTO informa a Dirección en < 1 h si impacto económico estimado > 5.000€ o si hay filtración de datos.

### 5.2 PLA-04 / PLA-14 / PLA-16 — Fallo en integraciones y pagos

- **Trigger**: Tasa de pagos fallidos > 5 %, tasa de overselling > 1 %, o feed de inventario caído > 15 min.
- **Acciones inmediatas**: Conmutar a pasarela/alternativa si está configurada; pausar campañas de adquisición activas; activar circuit breaker manual; notificar a Operations para contactar clientes afectados.
- **Acciones a corto plazo**: Revisar logs de webhooks/colas; contactar soporte del proveedor; aplicar fix o patch; reconciliar inventario manualmente.

### 5.3 PLA-22 / PLA-23 / PLA-25 / PLA-24 — Incidentes en dispositivos móviles

- **Trigger**: Detección de patrones de acceso anómalo, dispositivo rooteado conectado, o reporte de brecha de confidencialidad por screenshot.
- **Acciones inmediatas**: Revocar sesión del dispositivo afectado; forzar actualización de app; activar borrado remoto si está habilitado.
- **Acciones a corto plazo**: Rotar API keys si hay sospecha de extracción; auditar endpoints expuestos; revisar políticas BYOD; comunicar a Legal si hay filtración confirmada.

## 6. Dependencias con Otras Categorías

| Riesgo ID | Categoría Relacionada | Tipo de Dependencia |
|-----------|----------------------|---------------------|
| PLA-02 | **Fraude** | Efecto: bugs en pago pueden facilitar transacciones fraudulentas o chargebacks. |
| PLA-05 | **Seguridad** | Causa: una filtración de datos es a la vez riesgo de plataforma y riesgo de seguridad corporativa. |
| PLA-14 | **Consignación Marcas** | Efecto: fallo de sincronización rompe acuerdos de stock con marcas y genera disputas. |
| PLA-16 | **Fraude** | Efecto: pagos indeterminados pueden facilitar abuso de reembolsos o chargebacks. |
| PLA-17 | **Administrativo / Regulación** | Causa: perfilado automatizado viola RGPD, generando sanción administrativa. |
| PLA-21 | **Consignación Marcas** | Efecto: rotura de API afecta directamente la operación de consignación. |
| PLA-22 / PLA-23 / PLA-24 / PLA-25 | **Shoppers** | Causa: los dispositivos móviles de shoppers son el vector de estos riesgos. |
| PLA-26 | **Seguridad** | Efecto: IDOR expone datos de clientes VIP, afectando seguridad corporativa. |
| RIE-12 | **Mercado** | Efecto: retraso en plataforma retrasa lanzamiento y acumulación de miembros (RIE-01). |
| PLA-06 | **Shoppers** | Efecto: caída de servicio impide que shoppers consulten agenda o confirmen visitas. |
| PLA-07 | **Administrativo / Regulación** | Causa: pérdida de datos sin backup puede derivar en sanción por incumplimiento de conservación (RGPD). |
| PLA-31 | **Administrativo / Regulación** | Causa: transferencias transfronterizas sin salvaguardas vulneran RGPD. |

## 7. Acciones Pendientes

- [ ] Contratar auditoría de seguridad externa (pentest) antes del lanzamiento — CTO — 2026-06-15
- [ ] Configurar entorno de staging con datos anónimos replicados de producción — DevOps — 2026-06-10
- [ ] Definir y documentar RPO/RTO oficiales del proyecto — CTO — 2026-06-05
- [ ] Validar contrato SLA con proveedor cloud (AWS/GCP) y pasarela de pagos — CTO — 2026-06-05
- [ ] Implementar pipeline CI/CD con tests E2E obligatorios (Cypress/Playwright) — Lead Frontend — 2026-06-20
- [ ] Contratar seguro de ciberriesgo con cobertura de interrupción de negocio — Legal — 2026-06-30
- [ ] Implementar bloqueo pesimista en reservas de shopper (race condition) — Lead Backend — 2026-06-25
- [ ] Configurar arquitectura event-driven para sincronización de inventario — CTO — 2026-07-01
- [ ] Implementar RASP y detección de jailbreak en app shopper — Lead Mobile — 2026-07-15
- [ ] Auditar endpoints API con pruebas de IDOR y Broken Access Control — Seguridad — 2026-06-20
- [ ] Mapear flujos de datos transfronterizos y firmar SCCs donde aplique — DPO — 2026-06-30
- [ ] Implementar SIEM centralizado con alertas de seguridad — DevSecOps — 2026-08-01

---

**Reserva total asignada a categoría Plataforma**: **18.000€**  
**Documento elaborado por**: Equipo Técnico / Dirección del Proyecto  
**Fecha**: 2026-05-28  
**Versión**: 2.0
