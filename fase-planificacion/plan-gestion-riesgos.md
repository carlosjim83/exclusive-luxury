# Plan de Gestión de Riesgos — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Planificación |
| **Fecha** | 2026-05-26 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Riesgos |

## 2. Objetivo del Plan

Establecer el marco para identificar, analizar, responder y monitorizar los riesgos del proyecto durante todo su ciclo de vida. Este plan actualiza y amplía el [Registro de Riesgos Iniciales](../fase-inicio/registro-riesgos-iniciales.md) de la fase de Inicio.

## 3. Metodología de Gestión de Riesgos

- **Identificación**: Reuniones de riesgos quincenales con el equipo de dirección; brainstorming estructurado.
- **Análisis**: Probabilidad (1-5) x Impacto (1-5) = Puntuación (1-25). Riesgos ≥ 12 son críticos.
- **Respuesta**: Cada riesgo crítico tiene un propietario y un plan de respuesta definido.
- **Monitorización**: Revisión mensual del registro; actualización de probabilidad e impacto según evolución del proyecto.
- **Umbrales de tolerancia**: Se aceptan riesgos < 8; se mitigan riesgos 8-11; se transfieren o evitan riesgos ≥ 12.

## 4. Registro de Riesgos Actualizado (Fase Planificación)

### 4.1 Riesgos Críticos (Puntuación ≥ 12)

| ID | Riesgo | Prob. | Imp. | Punt. | Estrategia | Plan de Respuesta | Propietario | Presupuesto Reserva |
|----|--------|-------|------|-------|------------|-------------------|-------------|---------------------|
| RIE-01 | Demanda insuficiente (< 200 miembros) | 3 | 5 | **15** | Mitigar | Campañas agresivas; eventos prueba gratuita; embajadores; descuento primeros 50 | Marketing | 18.000€ |
| RIE-04 | Incapacidad para reclutar 10 shoppers cualificados | 3 | 5 | **15** | Mitigar | Convenios IED/ESNE; headhunting premium; incentivo por recomendación; formación propia | HR / Talent | 12.000€ |
| RIE-05 | Rotación alta de shoppers (> 3 bajas en Año 1) | 3 | 4 | **12** | Mitigar | Bonus por antigüedad; comunidad; mentoring; participación en decisiones | Operations | 8.000€ |
| RIE-06 | Calidad de servicio inconsistente (NPS < 40) | 3 | 4 | **12** | Mitigar | Manual estricto; shadowing; QA de visitas; coaching individualizado | Quality | 6.000€ |
| RIE-09 | Desviación del presupuesto (> 10%) | 3 | 4 | **12** | Mitigar | Control mensual; reserva contingencia 66K€; priorización funcionalidades; outsourcing selectivo | Director | 30.000€ |
| RIE-10 | Flujo de caja negativo (ingresos < costes M1-M8) | 3 | 4 | **12** | Mitigar | Lanzamiento por fases; pre-venta membresías; línea de crédito contingente con inversores | Finance | 18.000€ |
| RIE-12 | Retraso en desarrollo plataforma (> 15 días) | 3 | 4 | **12** | Mitigar | MVP enfocado; sprints de 2 semanas; outsourcing módulos no críticos; lanzamiento con web app | CTO | 10.000€ |

### 4.2 Riesgos Significativos (Puntuación 8-11)

| ID | Riesgo | Punt. | Estrategia | Plan de Respuesta | Propietario |
|----|--------|-------|------------|-------------------|-------------|
| RIE-02 | Replicación por competidores | 10 | Mitigar | Velocidad de ejecución; comunidad exclusiva; contratos exclusividad shoppers clave | Director |
| RIE-08 | Incidentes durante visitas (daños, robos, accidentes) | 10 | Transferir | Seguros RC + mercancía + vehículos; protocolo de actuación; cláusulas contractuales | Legal / Ops |
| RIE-13 | Fallos de seguridad o filtración de datos | 10 | Mitigar | Auditoría pre-lanzamiento; cifrado; backups diarios; DPO; plan de respuesta a incidentes | CTO / Legal |
| RIE-15 | Reclasificación laboral de shoppers | 10 | Mitigar | Contratos claros autónomos; autonomía real en agenda; asesoría laboral especializada | Legal / HR |
| RIE-07 | Cancelaciones y no-shows frecuentes | 9 | Mitigar | Política cancelación < 48h; confirmación automática 24h; flexibilidad reprogramación | Operations |
| RIE-03 | Deterioro del mercado del lujo | 8 | Aceptar | Diversificación hacia affordable luxury; enfoque en retención; servicios de menor precio | Director |
| RIE-11 | Incumplimiento de marcas en consignación | 8 | Mitigar | Diversificación cartera; reportes detallados; eventos conjuntos; relación directa dueños | Partnerships |
| RIE-16 | Sanción por incumplimiento RGPD | 8 | Mitigar | DPO desde inicio; política privacidad robusta; consentimientos explícitos; auditoría | Legal / Tech |
| RIE-17 | Escándalo de reputación | 8 | Mitigar | Código de conducta; protocolo crisis; relaciones activas con medios; respuesta rápida | Marketing / Legal |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Punt. | Estrategia | Propietario |
|----|--------|-------|------------|-------------|
| RIE-14 | Dependencia de un proveedor tecnológico clave | 6 | Mitigar | Arquitectura desacoplada; estándares abiertos; plan B activo | CTO |
| RIE-18 | Crisis sanitaria o restricciones de movilidad | 5 | Aceptar | Servicio digital de emergencia; membresía híbrida; fondo de contingencia | Director |

## 5. Reservas de Contingencia

| Riesgo | Reserva Asignada | Forma de Uso |
|--------|-------------------|-------------|
| RIE-01 (Demanda) | 18.000€ | Campañas de marketing adicionales si la conversión es baja |
| RIE-04 (Reclutamiento) | 12.000€ | Headhunting premium o agencia de selección si falla el canal orgánico |
| RIE-09 (Presupuesto) | 30.000€ | Buffer general para desviaciones no previstas |
| RIE-10 (Flujo de caja) | 18.000€ | Línea de crédito o adelanto de inversores si los ingresos se retrasan |
| RIE-12 (Retraso tech) | 10.000€ | Outsourcing de módulos o freelance de refuerzo |
| **Total** | **66.000€** | = 10% del presupuesto total |

## 6. KRI — Key Risk Indicators

| Riesgo | KRI | Umbral de Alerta | Frecuencia Medición |
|--------|-----|------------------|---------------------|
| RIE-01 | Número de miembros nuevos / mes | < 15 miembros/mes en Madrid | Semanal |
| RIE-04 | Candidatos preseleccionados / mes | < 2 candidatos viables/mes | Mensual |
| RIE-05 | Tasa de rotación de shoppers | > 1 baja / trimestre | Trimestral |
| RIE-06 | NPS promedio | < 45 | Por visita / Mensual |
| RIE-09 | Desviación del gasto acumulado | > 5% sobre presupuesto | Mensual |
| RIE-10 | Ingresos acumulados vs. previsto | < 80% del plan a esa fecha | Mensual |
| RIE-12 | Burndown del sprint | < 70% de historias completadas | Cada 2 semanas |

## 7. Acciones Pendientes

- [ ] Completar planes de respuesta detallados para cada riesgo crítico (fichas individuales).
- [ ] Asignar formalmente los 66K€ de reserva de contingencia en cuenta separada.
- [ ] Definir comité de crisis y protocolo de comunicación en caso de materialización de riesgos de reputación o legal.
- [ ] Establecer seguros: RC, mercancía en tránsito, vehículos, ciberriesgo.
- [ ] Validar contratos de shoppers con asesoría laboral para mitigar RIE-15.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-26  
**Versión**: 1.0 — Fase de Planificación
