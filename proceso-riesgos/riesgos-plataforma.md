# Riesgos de Plataforma — Ficha de Categoría

> Riesgos intrínsecos a la plataforma digital de Personal Shopping Luxury.  
> Basado en el [Plan de Gestión de Riesgos](../fase-planificacion/plan-gestion-riesgos.md) y metodología PMI.

---

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Categoría** | Plataforma Digital |
| **Fecha** | 2026-05-28 |
| **Versión** | 1.0 |
| **Responsable** | CTO / Lead Técnico |

## 2. Alcance de la Categoría

Esta ficha cubre los riesgos relacionados con el ciclo de vida completo de la plataforma digital: arquitectura, desarrollo, despliegue, operación, seguridad, escalabilidad e integraciones con terceros. Afecta directamente a la capacidad de ofrecer el servicio de personal shopping, gestionar reservas, procesar pagos y proteger los datos de clientes de alto perfil.

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
| **PLA-01** | Caída de servicio / indisponibilidad de la plataforma | Interrupción del servicio que impide reservas, pagos o acceso a información de visitas. Afecta confianza del cliente luxury. | 3 | 4 | **12** | Mitigar | Arquitectura multi-AZ; auto-scaling; monitoreo 24/7 (Datadog/New Relic); runbook de incidentes; SLA 99.9 % con proveedor cloud. | CTO | 8.000€ | Tiempo de indisponibilidad (min/mes) | > 30 min/mes |
| **PLA-02** | Bugs críticos en flujo de reserva y pago | Errores que impiden completar una reserva o transacción, generando abandono y pérdida de ingresos directos. | 4 | 4 | **16** | Mitigar | Tests E2E obligatorios en CI/CD; entorno de staging con datos reales anonimizados; QA manual pre-release; feature flags para rollback inmediato. | CTO / QA Lead | 10.000€ | Tasa de abandono en checkout | > 15 % |
| **PLA-03** | Deuda técnica por desarrollo acelerado del MVP | Decisiones de diseño tomadas por velocidad dificultan evolución, escalado y corrección de bugs en meses posteriores. | 4 | 3 | **12** | Mitigar | Definición de "done" que incluye refactor; 20 % de capacidad del sprint dedicado a deuda técnica; arquitectura modular desde día 1; documentación obligatoria de API. | Lead Técnico | 6.000€ | Ratio de código sin tests | > 30 % |
| **PLA-04** | Integración fallida con pasarela de pagos o servicios externos | Incidencias en la conexión con Stripe, Twilio, calendarios o CRM que bloquean operaciones core del negocio. | 3 | 4 | **12** | Mitigar | Sandbox testing exhaustivo antes de producción; webhooks con reintentos y cola de mensajes; proveedor alternativo validado (pasarela B); contratos SLA con terceros. | CTO | 6.000€ | Tasa de error en webhooks de pago | > 2 % |
| **PLA-05** | Fallos de seguridad o filtración de datos (detalle) | Violación de datos personales, financieros o de geolocalización de clientes VIP. Consecuencias legales (RGPD), reputacionales y económicas extremas. | 3 | 4 | **12** | Mitigar | Auditoría de seguridad pre-lanzamiento (pentest); cifrado en tránsito y en reposo (AES-256); autenticación MFA para shoppers y admin; WAF; DPO asignado; plan de respuesta a incidentes documentado. | CTO / Seguridad | 12.000€ | Vulnerabilidades críticas detectadas | > 0 |
| **RIE-12** | Retraso en desarrollo plataforma (> 15 días) | El MVP no está listo para la fecha de lanzamiento pactada, retrasando ingresos y la operación completa. | 3 | 4 | **12** | Mitigar | MVP enfocado en flujo crítico (reserva + pago); sprints de 2 semanas con entregables demoables; outsourcing de módulos no críticos (chat, analytics); lanzamiento con web app responsive antes de app nativa. | CTO | 10.000€ | Burndown del sprint | < 70 % completado |

### 4.2 Riesgos Significativos (Puntuación 8–11)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------------|-------------|
| **PLA-06** | Escalabilidad insuficiente en picos de demanda | La plataforma no soporta aumentos súbitos de tráfico (campañas marketing, eventos lanzamiento), causando lentitud o caídas. | 3 | 3 | **9** | Mitigar | Load testing con k6/Artillery antes de cada campaña; auto-scaling basado en CPU + conexiones DB; caché en Redis para catálogo y disponibilidad; CDN para assets estáticos. | CTO / DevOps | 5.000€ |
| **PLA-07** | Pérdida de datos por fallo de backup o disaster recovery | Corrupción o eliminación accidental de bases de datos sin capacidad de restauración completa en el RPO/RTO definido. | 2 | 4 | **8** | Mitigar | Backups automatizados diarios (DB + storage) con retención 30 días; restore test mensual; replicación multi-región; RPO ≤ 1 h, RTO ≤ 4 h documentado. | DevOps / SysAdmin | 4.000€ |
| **PLA-08** | Incompatibilidad o experiencia degradada en dispositivos móviles | El MVP web no funciona correctamente en iOS/Safari o Android/Chrome, donde reside la mayoría del tráfico de clientes luxury. | 3 | 3 | **9** | Mitigar | Mobile-first responsive design; testing cross-browser/browserstack en CI; métricas Core Web Vitals como gate de release; PWA como paso intermedio antes de app nativa. | Lead Frontend | 3.000€ |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------|
| **RIE-14** | Dependencia de un proveedor tecnológico clave | Bloqueo, subida de precio o discontinuación del servicio cloud, pasarela o herramienta core utilizada. | 3 | 2 | **6** | Mitigar | Arquitectura desacoplada (microservicios / bounded contexts); uso de estándares abiertos (REST, OAuth, SQL); plan B documentado para cada proveedor crítico; datos exportables siempre. | CTO |
| **PLA-09** | Ataque DDoS o ransomware contra la plataforma | Saturación de la infraestructura o cifrado de datos con fines extorsivos, bloqueando operaciones. | 2 | 3 | **6** | Transferir | WAF con protección DDoS (Cloudflare/AWS Shield); seguro de ciberriesgo con cobertura por interrupción de negocio; snapshot inmutables de infraestructura. | CTO / Legal |
| **PLA-10** | Obsolescencia tecnológica del stack elegido | El framework, lenguaje o infraestructura seleccionados pierden soporte o comunidad en 2–3 años, encareciendo mantenimiento. | 2 | 2 | **4** | Aceptar | Stack maduro y probado (Node.js/Python + React + PostgreSQL + AWS/GCP); revisión anual de roadmap de tecnologías; contrato de soporte extendido si es necesario. | Lead Técnico |

## 5. Plan de Respuesta a Incidentes (Activación)

### 5.1 PLA-01 / PLA-02 / PLA-05 — Incidentes críticos en producción

- **Trigger**: Alerta de monitoreo que indica indisponibilidad > 5 min, tasa de error > 5 %, o detección de vulnerabilidad explotada.
- **Acciones inmediatas (0–2 h)**:
  1. Página al on-call engineer vía PagerDuty/Opsgenie.
  2. Si es degradación parcial: activar feature flag de deshabilitación del módulo afectado.
  3. Si es indisponibilidad total: rollback al último deploy estable (objetivo < 15 min).
  4. Comunicar a Director y Operations vía canal #incidentes de Slack.
- **Acciones a corto plazo (2–24 h)**:
  1. Post-mortem obligatorio en las 24 h siguientes a la resolución.
  2. Identificar root cause y ticket de corrección priorizado para el siguiente sprint.
  3. Si afecta datos de clientes: notificar a DPO y evaluar comunicación a AEPD/clientes según RGPD (72 h).
- **Escalación**: CTO informa a Dirección en < 1 h si impacto económico estimado > 5.000€ o si hay filtración de datos.

### 5.2 PLA-04 — Fallo en integración con pasarela de pagos

- **Trigger**: Tasa de pagos fallidos > 5 % en un período de 30 min.
- **Acciones inmediatas**: Conmutar a pasarela alternativa si está configurada; pausar campañas de adquisición activas; notificar a Operations para contactar clientes afectados.
- **Acciones a corto plazo**: Revisar logs de webhooks; contactar soporte del proveedor; aplicar fix o patch.

## 6. Dependencias con Otras Categorías

| Riesgo ID | Categoría Relacionada | Tipo de Dependencia |
|-----------|----------------------|---------------------|
| PLA-02 | **Fraude** | Efecto: bugs en pago pueden facilitar transacciones fraudulentas o chargebacks. |
| PLA-05 | **Seguridad** | Causa: una filtración de datos es a la vez riesgo de plataforma y riesgo de seguridad corporativa. |
| RIE-12 | **Mercado** | Efecto: retraso en plataforma retrasa lanzamiento y acumulación de miembros (RIE-01). |
| PLA-06 | **Shoppers** | Efecto: caída de servicio impide que shoppers consulten agenda o confirmen visitas. |
| PLA-07 | **Administrativo / Regulación** | Causa: pérdida de datos sin backup puede derivar en sanción por incumplimiento de conservación (RGPD). |

## 7. Acciones Pendientes

- [ ] Contratar auditoría de seguridad externa (pentest) antes del lanzamiento — CTO — 2026-06-15
- [ ] Configurar entorno de staging con datos anónimos replicados de producción — DevOps — 2026-06-10
- [ ] Definir y documentar RPO/RTO oficiales del proyecto — CTO — 2026-06-05
- [ ] Validar contrato SLA con proveedor cloud (AWS/GCP) y pasarela de pagos — CTO — 2026-06-05
- [ ] Implementar pipeline CI/CD con tests E2E obligatorios (Cypress/Playwright) — Lead Frontend — 2026-06-20
- [ ] Contratar seguro de ciberriesgo con cobertura de interrupción de negocio — Legal — 2026-06-30

---

**Reserva total asignada a categoría Plataforma**: **47.000€**  
**Documento elaborado por**: Equipo Técnico / Dirección del Proyecto  
**Fecha**: 2026-05-28  
**Versión**: 1.0
