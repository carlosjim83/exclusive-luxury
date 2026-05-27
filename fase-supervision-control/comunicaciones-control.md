# Monitorización de las Comunicaciones — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Comunicaciones |

## 2. Objetivo

Evaluar la efectividad de los canales y mensajes de comunicación internos y externos, medir la percepción de los interesados y corregir desviaciones en la frecuencia, claridad o cobertura de la información.

## 3. Encuesta de Efectividad de la Comunicación (M9)

Muestra: 25 personas (equipo core 9, shoppers 10, marcas 3, inversores 3).

| Dimensión | Pregunta | Resultado (1-5) | Estado |
|-----------|----------|-----------------|--------|
| Oportunidad | ¿Recibes la información a tiempo? | 4,1 | Verde |
| Claridad | ¿La información es comprensible? | 4,3 | Verde |
| Relevancia | ¿Recibes solo lo que necesitas? | 3,6 | Amarillo |
| Canales | ¿Los canales utilizados son los adecuados? | 4,0 | Verde |
| Retroalimentación | ¿Puedes dar feedback fácilmente? | 3,8 | Amarillo |
| Escalado | ¿Sabes a quién escalar si hay bloqueo? | 4,5 | Verde |
| **Global** | **Efectividad general de la comunicación** | **4,05** | **Verde** |

## 4. Seguimiento de Mensajes (M1-M9)

| Canal | Mensajes Enviados | Tasa de Entrega | Tasa de Apertura / Lectura | Respuesta / Feedback | Issue Detectado |
|-------|-------------------|-----------------|---------------------------|----------------------|-----------------|
| Slack (equipo core) | 12.400 | 100% | 92% | 35% | Alto volumen en #general; 3 hilos críticos perdidos |
| Email inversores / ejecutivos | 27 | 100% | 96% | 78% | — |
| App interna shoppers | 180 | 98% | 88% | 22% | 2 shoppers notifican no recibir push en Android |
| WhatsApp grupo shoppers | 340 | 100% | 95% | 60% | Saturación de mensajes operativos; difícil buscar info |
| Email clientes (automáticos) | 4.200 | 99,5% | 72% | 8% | — |
| Encuestas NPS / CSAT | 850 | 95% | 45% | 12% | Tasa de respuesta baja; incentivar con puntos |
| Newsletter marketing | 18 | 98% | 38% | 5% | — |

## 5. Feedback de Interesados sobre Comunicaciones

| Interesado | Feedback Positivo | Feedback Negativo / Mejora | Acción Propuesta |
|------------|-------------------|---------------------------|------------------|
| Patrocinador | Informes mensuales claros y puntuales | Solicita más proyecciones de cash flow en M10-M12 | Incluir gráfico de escenarios en informe M10 |
| Shoppers | App interna útil para citas | Demasiados canales (WhatsApp + app + email); preferir consolidar | Migrar avisos operativos a app; WhatsApp solo para urgencias |
| Equipo tech | Daily stand-ups eficientes | Documentación técnica dispersa (Notion + Drive + GitHub) | Centralizar en Notion con índice maestro |
| Marcas | Reportes de ventas mensuales valiosos | Solicitan frecuencia quincenal en lugar de mensual | Evaluar automatización quincenal desde dashboard |
| Clientes miembros | Confirmaciones automáticas funcionan bien | Algunos no reciben recordatorio 24h (filtro spam) | Revisar SPF/DKIM; añadir recordatorio por WhatsApp |

## 6. Issue Crítico: Consolidación de Canales Shoppers

| Aspecto | Situación Actual | Situación Deseada | Plan de Transición |
|---------|------------------|-------------------|---------------------|
| Canales | WhatsApp + app interna + email + llamadas | App interna principal; WhatsApp solo urgencias | M10: publicar guía de canales; M11: desactivar grupo general WhatsApp |
| Búsqueda de info | Scroll infinito en chat | Base de conocimiento en app | M10: añadir FAQ y protocolos en app |
| Feedback shopper | Informal (chat) | Formulario estructurado en app | M10: lanzar módulo "feedback" en app interna |

## 7. Acciones Pendientes

- [ ] Migrar 100% de avisos operativos shoppers a app interna; restringir WhatsApp a urgencias (M10).
- [ ] Revisar configuración push Android para 2 shoppers afectados (ticket con CTO).
- [ ] Crear índice maestro de documentación técnica en Notion y migrar docs dispersos (M10).
- [ ] Incluir gráfico de escenarios de cash flow en informe ejecutivo M10 para Patrocinador.
- [ ] Evaluar coste/beneficio de reporte quincenal automático para marcas desde dashboard (M10).
- [ ] Implementar recordatorio por WhatsApp 24h antes de visita como canal alternativo al email.

---

**Documento elaborado por**: Gestor de Comunicaciones  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Comunicaciones](../fase-planificacion/plan-gestion-comunicaciones.md) · [Plan Gestión Interesados](../fase-planificacion/plan-gestion-interesados.md)
