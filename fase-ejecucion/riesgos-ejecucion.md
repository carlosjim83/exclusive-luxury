# Implementación de Respuestas a Riesgos — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Ejecución |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Riesgos |
| **Documento base** | [Plan de Gestión de Riesgos](../fase-planificacion/plan-gestion-riesgos.md) |

## 2. Objetivo

Documentar las respuestas a riesgos ejecutadas durante la fase de ejecución, actualizar el registro de riesgos con probabilidades e impactos reales, registrar los riesgos residuales y los problemas derivados.

## 3. Respuestas Implementadas (Riesgos Críticos)

| ID | Riesgo | Estrategia plan | Respuesta ejecutada | Coste real | Resultado | Propietario |
|----|--------|-----------------|--------------------|------------|-----------|-------------|
| RIE-01 | Demanda insuficiente (< 200 miembros) | Mitigar | Campaña embajadores; eventos prueba gratuita; descuento primeros 50; pre-venta M7–M8 | 18.000€ | 200 miembros alcanzados en M12 | Marketing |
| RIE-04 | Incapacidad para reclutar 10 shoppers cualificados | Mitigar | Headhunting premium; convenio IED; incentivo referido 500€; formación propia intensiva | 12.000€ | 10 shoppers certificados (12 contratados, 2 descartados) | HR / Ops |
| RIE-05 | Rotación alta de shoppers (> 3 bajas Año 1) | Mitigar | Bonus antigüedad M6; comunidad WhatsApp; mentoring par shopper senior-junior; participación en decisiones | 4.000€ | 1 baja voluntaria (10%), 0 despidos | Operations |
| RIE-06 | Calidad de servicio inconsistente (NPS < 40) | Mitigar | Manual estricto; shadowing 3 visitas; QA de visitas aleatorias; coaching individualizado mensual | 6.000€ | NPS 51, CSAT 4,5/5 | Quality |
| RIE-09 | Desviación presupuesto (> 10%) | Mitigar | Control mensual; reserva contingencia; priorización funcionalidades; outsourcing selectivo | 0€ (proceso) | Desviación –0,3% (ahorro 2.000€) | Director |
| RIE-10 | Flujo de caja negativo (ingresos < costes M1–M8) | Mitigar | Pre-venta membresías M7–M8; lanzamiento por fases; línea de crédito 30K€ firmada (no usada) | 0€ (comisión línea) | Cash flow positivo desde M9; sin usar crédito | Finance |
| RIE-12 | Retraso desarrollo plataforma (> 15 días) | Mitigar | MVP enfocado; sprints 2 semanas; cambio a Flutter (CC-01); lanzamiento con web app primero | 0€ (reinterno) | Retraso 7 días app móvil, dentro de umbral | CTO |

## 4. Riesgos Significativos: Respuestas y Estado

| ID | Riesgo | Estrategia | Respuesta ejecutada | Estado final |
|----|--------|-----------|--------------------|--------------|
| RIE-02 | Replicación por competidores | Mitigar | Velocidad ejecución; comunidad exclusiva; contratos no-compete shoppers clave | Activo residual (sin indicios de réplica directa) |
| RIE-08 | Incidentes durante visitas (daños, robos, accidentes) | Transferir | Seguros RC + mercancía + vehículos + ciber; protocolo de actuación; cláusulas contractuales | Activo residual (0 siniestros Año 1) |
| RIE-13 | Fallos de seguridad o filtración de datos | Mitigar | Auditoría M10; cifrado end-to-end; backups diarios; DPO externo; pentest aprobado | Activo residual (0 incidencias) |
| RIE-15 | Reclasificación laboral de shoppers | Mitigar | Contratos autónomos revisados por abogado laboralista; autonomía real en agenda; facturación por servicios | Activo residual (sin inspección Año 1) |
| RIE-07 | Cancelaciones y no-shows frecuentes | Mitigar | Política cancelación < 48h; confirmación automática 24h; flexibilidad reprogramación 1 vez | Mitigado (no-shows 1,5%) |
| RIE-11 | Incumplimiento marcas en consignación | Mitigar | Diversificación 12 marcas; reportes mensuales de ventas; eventos conjuntos | Mitigado (0 incumplimientos) |
| RIE-16 | Sanción por incumplimiento RGPD | Mitigar | DPO desde M1; política privacidad; consentimientos explícitos; auditoría AEPD M8 | Mitigado (sin sanciones) |

## 5. Registro de Riesgos Actualizado (M12)

| ID | Riesgo | Prob. inicial | Prob. actual | Imp. inicial | Imp. actual | Estado | Acción futura |
|----|--------|---------------|--------------|--------------|-------------|--------|---------------|
| RIE-01 | Demanda insuficiente | 3 | 1 | 5 | 3 | Cerrado | Monitorizar Año 2 |
| RIE-04 | Reclutamiento shoppers | 3 | 1 | 5 | 2 | Cerrado | Refinar playbook Año 2 |
| RIE-05 | Rotación shoppers | 3 | 1 | 4 | 2 | Cerrado | Mantener programa retención |
| RIE-06 | Calidad inconsistente | 3 | 1 | 4 | 2 | Cerrado | Auditorías bimensuales Año 2 |
| RIE-09 | Desviación presupuesto | 3 | 1 | 4 | 1 | Cerrado | Control mensual continuo |
| RIE-10 | Flujo caja negativo | 3 | 1 | 4 | 1 | Cerrado | Mantener línea crédito como colchón |
| RIE-12 | Retraso plataforma | 3 | 1 | 4 | 2 | Cerrado | Plan mantenimiento tech Año 2 |
| RIE-02 | Replicación competidores | 2 | 2 | 5 | 4 | Residual | Velocidad expansión Año 2 |
| RIE-13 | Fallos de seguridad | 2 | 1 | 5 | 3 | Residual | Pentest semestral Año 2 |
| RIE-15 | Reclasificación laboral | 2 | 1 | 5 | 3 | Residual | Revisión contratos anual |

## 6. Problemas Derivados de Riesgos (Issues)

| ID | Problema | Riesgo origen | Fecha aparición | Resolución | Estado |
|----|----------|---------------|-----------------|------------|--------|
| ISS-01 | Retraso 2 semanas reclutamiento Barcelona | RIE-04 | M5–M6 | Headhunting premium + adelanto formación online | Cerrado |
| ISS-02 | Coste extra 2.000€ por procesos de shoppers descartados | RIE-04 | M5–M6 | Imputado a área Operativa, ajustado en reserva | Cerrado |
| ISS-03 | Sustitución shopper Madrid en M10 (baja voluntaria PS-M06 previo) | RIE-05 | M10 | Contratación rápida PS-M05 (ya preseleccionado) | Cerrado |
| ISS-04 | Necesidad línea de crédito por precaución | RIE-10 | M7 | Firmada 30K€, no utilizada, coste comisión 300€ | Cerrado |

## 7. Acciones Pendientes

1. Transferir riesgos residuales activos al plan de riesgos de Año 2 con propietarios asignados.
2. Documentar el playbook de respuestas efectivas (RIE-01, RIE-04, RIE-06) como lección aprendida.
3. Cancelar o renovar la línea de crédito de 30.000€ según forecast de cash flow Año 2.
4. Archivar el registro de riesgos de ejecución con trazabilidad completa de cada respuesta.
