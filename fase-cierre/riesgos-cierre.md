# Informe Final de Riesgos — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Cierre |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Riesgos |
| **Documento** | Estado Final del Registro de Riesgos y Tendencias Año 2 |

## 2. Objetivo

Cerrar el registro de riesgos del Año 1, documentar los riesgos que se materializaron frente a los mitigados, reconciliar el uso final de la reserva de contingencia, y identificar tendencias de riesgo para el Año 2.

## 3. Estado Final del Registro de Riesgos

| ID | Riesgo | Punt. Inicial | Estado Final | Resultado |
|----|--------|---------------|--------------|-----------|
| RIE-01 | Demanda insuficiente (< 200 miembros) | 15 | Cerrado (mitigado) | Campaña push M8-M9; 200 miembros alcanzados en M12 |
| RIE-04 | Incapacidad para reclutar 10 shoppers cualificados | 15 | Cerrado (mitigado) | 10 shoppers contratados; headhunting premium usado |
| RIE-05 | Rotación alta de shoppers (> 3 bajas en Año 1) | 12 | Cerrado (mitigado) | 0 bajas voluntarias; comunidad y bonus retenieron al equipo |
| RIE-06 | Calidad de servicio inconsistente (NPS < 40) | 12 | Cerrado (mitigado) | NPS 48; shadowing ampliado a 5 visitas |
| RIE-09 | Desviación del presupuesto (> 10%) | 12 | Cerrado (mitigado) | Desviación -0,9%; control mensual efectivo |
| RIE-10 | Flujo de caja negativo (ingresos < costes M1-M8) | 12 | Cerrado (aceptado) | Materializado M1-M8 según plan; superado con ingresos M9-M12 |
| RIE-12 | Retraso en desarrollo plataforma (> 15 días) | 12 | Cerrado (mitigado) | App nativa retrasada 1 mes; lanzamiento con web app mitigó impacto |
| RIE-02 | Replicación por competidores | 10 | Cerrado (aceptado) | Competencia monitorizada; diferenciación por servicio premium sostenida |
| RIE-08 | Incidentes durante visitas (daños, robos, accidentes) | 10 | Cerrado (transferido) | 2 incidientes menores (prenda dañada); seguro cubrió sin coste para proyecto |
| RIE-13 | Fallos de seguridad o filtración de datos | 10 | Cerrado (mitigado) | 0 filtraciones; penetration test aprobado; auditoría RGPD limpia |
| RIE-15 | Reclasificación laboral de shoppers | 10 | Cerrado (mitigado) | Asesoría laboral validó modelo; contratos claros; autonomía real demostrada |
| RIE-07 | Cancelaciones y no-shows frecuentes | 9 | Cerrado (mitigado) | Política < 48h + confirmación automática; tasa < 3% |
| RIE-03 | Deterioro del mercado del lujo | 8 | Cerrado (aceptado) | No se materializó; mercado estable en segmento target |
| RIE-11 | Incumplimiento de marcas en consignación | 8 | Cerrado (mitigado) | 0 incumplimientos; relaciones sólidas; reportes detallados |
| RIE-16 | Sanción por incumplimiento RGPD | 8 | Cerrado (mitigado) | 0 sanciones; auditorías M7 y M12 sin hallazgos |
| RIE-17 | Escándalo de reputación | 8 | Cerrado (aceptado) | No se materializó; protocolo de crisis preparado y probado en simulacro M10 |
| RIE-14 | Dependencia de un proveedor tecnológico clave | 6 | Cerrado (mitigado) | Arquitectura desacoplada; multicloud evaluado; sin bloqueos |
| RIE-18 | Crisis sanitaria o restricciones de movilidad | 5 | Cerrado (aceptado) | No se materializó; plan de servicio digital de emergencia archivado |

## 4. Reserva de Contingencia — Uso Final

| Riesgo Atendido | Importe Usado | Justificación |
|-----------------|---------------|---------------|
| RIE-09 Desviación tecnológica | 18.000€ | Outsourcing pasarela de pagos y ajustes de seguridad |
| RIE-12 Retraso app nativa | 8.000€ | Testing adicional y revisión Apple |
| RIE-01 Demanda M8-M9 | 12.000€ | Campaña push digital y evento pre-lanzamiento |
| RIE-04 Reclutamiento shoppers | 6.000€ | Headhunting premium 2 shoppers |
| RIE-10 Flujo de caja | 3.000€ | Adelanto proveedores menores |
| **Total usado** | **47.000€** | |
| **Remanente** | **7.000€** | Transferido a reserva Año 2 |

## 5. Riesgos que se Materializaron vs Mitigados

| Materializados (impacto real) | Mitigados/Prevenidos (sin impacto real) |
|-------------------------------|-----------------------------------------|
| RIE-10: Flujo de caja negativo M1-M8 (esperado y gestionado) | RIE-01, RIE-04, RIE-05, RIE-06, RIE-09 |
| RIE-12: Retraso app nativa 1 mes (impacto leve) | RIE-13, RIE-15, RIE-16 |
| RIE-08: 2 incidentes menores en visitas (cubiertos por seguro) | RIE-07, RIE-11, RIE-14 |

## 6. Tendencias de Riesgo para el Año 2

| ID Año 2 | Riesgo Nuevo / Evolución | Prob. | Imp. | Estrategia Preliminar |
|----------|--------------------------|-------|------|-----------------------|
| RIE-A2-01 | Expansión a nueva ciudad (Málaga/Mallorca) falla | 3 | 5 | Piloto 3 meses; test de demanda previo; presupuesto escalonado |
| RIE-A2-02 | Saturación de shoppers actuales (> 40 visitas/mes) | 3 | 4 | Monitorizar carga; contratar shoppers adicionales si 200+ miembros/ciudad |
| RIE-A2-03 | Ciberataque por notoriedad creciente | 2 | 5 | Red team anual; bug bounty; SOC externo |
| RIE-A2-04 | Churn de marcas clave (> 2 bajas) | 2 | 4 | Diversificación a 15-20 marcas; contratos con plazo mínimo 12 meses |
| RIE-A2-05 | Reclamación laboral masiva de shoppers | 2 | 5 | Revisión anual con asesoría; mantener autonomía real; documentar agenda libre |

## 7. Acciones Pendientes

- [ ] Archivar registro de riesgos Año 1 como referencia histórica.
- [ ] Transferir a Operations la responsabilidad de monitorización de KRI del Año 2.
- [ ] Crear registro de riesgos del Año 2 con los riesgos nuevos y los residuales del Año 1.
- [ ] Definir nueva reserva de contingencia Año 2: 10% del presupuesto estimado (120.000€) + 7.000€ remanente.
- [ ] Programar simulacro de crisis reputacional para M3 del Año 2.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Cierre
