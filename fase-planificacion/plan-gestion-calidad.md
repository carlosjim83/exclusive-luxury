# Plan de Gestión de la Calidad — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Planificación |
| **Fecha** | 2026-05-26 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Calidad |

## 2. Objetivo del Plan

Garantizar que el proyecto y sus entregables cumplen con los requisitos de calidad esperados por los clientes de lujo. La calidad en este proyecto no se limita a ausencia de defectos: es la experiencia premium completa.

## 3. Enfoque de Gestión de la Calidad

- **Calidad = experiencia premium**: El cliente de lujo percibe la calidad en cada detalle (puntualidad, presentación, conocimiento, discreción).
- **Prevención sobre corrección**: Formación rigurosa de shoppers, protocolos claros, inspecciones antes del lanzamiento.
- **Métricas medibles**: NPS, rating de shoppers, tasa de quejas, churn.
- **Mejora continua**: Retroalimentación post-visita aplicada a formación y procesos.

## 4. Planificación de la Calidad

### 4.1 Métricas de Calidad del Servicio

| Métrica | Definición | Objetivo | Frecuencia | Responsable |
|---------|-----------|----------|------------|-------------|
| NPS (Net Promoter Score) | ¿Recomendarías el servicio? (0-10) | > 50 | Mensual | Customer Success |
| CSAT (Satisfacción visita) | Valoración post-visita (1-5 estrellas) | > 4.5/5 | Por visita | Plataforma |
| Rating del shopper | Valoración del cliente al shopper | > 4.5/5 | Por visita | Plataforma |
| Churn mensual | Miembros que no renuevan | < 5% | Mensual | Finance |
| Tiempo de respuesta | Desde reserva a confirmación | < 5 minutos | Por reserva | Operations |
| Tasa de incidencias | Visitas con queja formal / total visitas | < 2% | Mensual | Quality |
| Puntualidad | Visitas iniciadas en hora acordada | > 95% | Mensual | Operations |

### 4.2 Métricas de Calidad de la Plataforma

| Métrica | Definición | Objetivo | Frecuencia | Responsable |
|---------|-----------|----------|------------|-------------|
| Uptime | Tiempo operativo del sistema | > 99.5% | Continuo | CTO |
| Tiempo de carga | Página principal | < 2s | Diario | Tech |
| Crash rate | Sesiones con error / total | < 0.5% | Diario | Tech |
| Bugs críticos | Incidencias que impiden operar | 0 | Continuo | QA |

## 5. Aseguramiento de la Calidad (QA)

### 5.1 Formación de Shoppers

| Etapa | Contenido | Duración | Evaluación |
|-------|-----------|----------|------------|
| Módulo 1 | Marca, protocolo, código de vestimenta | 8h | Examen teórico >80% |
| Módulo 2 | CRM, herramientas digitales, booking | 8h | Práctica supervisada |
| Módulo 3 | Técnicas de venta, manejo de objeciones | 8h | Role-playing aprobado |
| Módulo 4 | Etiqueta, protocolo domiciliario, seguridad | 8h | Examen teórico >80% |
| Shadowing | Acompañar 3 visitas reales | 16h | Evaluación del shopper senior >4/5 |

### 5.2 Manual de Calidad del Servicio

El shopper debe cumplir:

- **Presentación**: vestimenta elegante y discreta; no perfume invasivo; uñas limpias; accesorios mínimos.
- **Puntualidad**: llegar 5 min antes; avisar si hay retraso >10 min.
- **Protocolo de entrada**: presentación formal; confirmación de identidad; respeto por el espacio del cliente.
- **Duración de visita**: 60-90 min según tipo (styling, armario, presentación colección).
- **Despedida**: resumen de recomendaciones; próximos pasos claros; agradecimiento personalizado.

### 5.3 Control de Calidad de la Consignación

- Cada pieza en consignación se fotografía y cataloga (marca, modelo, talla, precio, condición).
- Inspección física antes de cada visita (sin defectos, limpia, enfundada).
- Devolución a marca en 48h si no se vende en el plazo acordado.

## 6. Control de Calidad

### 6.1 Inspecciones y Revisiones

| Tipo | Momento | Quién | Qué revisa |
|------|---------|-------|------------|
| Review de código | Fin de cada sprint | Tech Lead | Calidad técnica, tests, documentación |
| QA de plataforma | Pre-lanzamiento (M8) | QA / Tester | Funcionalidades core, usabilidad, seguridad básica |
| Auditoría de visitas | Mensual (M9+) | Quality Manager | 10% de visitas aleatorias; check de protocolo |
| Encuesta NPS | Mensual | Customer Success | Envío a todos los miembros activos |
| Auditoría legal | M7 y M12 | Legal / DPO | Cumplimiento RGPD, contratos, seguros |

### 6.2 Gestión de Defectos e Incidencias

| Severidad | Definición | Tiempo de respuesta | Ejemplo |
|-----------|-----------|---------------------|---------|
| Crítico | Imposibilita el servicio | < 2h | Plataforma caída; shopper no acude a visita |
| Grave | Degrada la experiencia | < 24h | App con bug de reserva; prenda dañada |
| Leve | Molestia sin impacto | < 72h | Pequeño retraso; error menor en CRM |

## 7. Mejora Continua

- **Retro semanal del equipo de operations**: revisión de incidencias de la semana.
- **Mensual con shoppers**: sesión de feedback colectivo y actualización de conocimientos de marca.
- **Trimestral con miembros**: focus group de 5-10 miembros para detectar mejoras.
- **Semestral**: revisión del manual de calidad y actualización de protocolos.

## 8. Acciones Pendientes

- [ ] Diseñar examen teórico de formación de shoppers (40 preguntas).
- [ ] Crear plantilla de evaluación de shadowing.
- [ ] Definir herramienta de encuestas post-visita (Typeform, Hotjar, o propia).
- [ ] Establecer SLA de atención al cliente.
- [ ] Definir proceso de baja de shopper por bajo rating (<4.0 durante 2 meses consecutivos).

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-26  
**Versión**: 1.0 — Fase de Planificación
