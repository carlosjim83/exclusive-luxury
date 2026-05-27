# Control de las Adquisiciones — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Supervisión y Control |
| **Fecha** | 2026-05-27 |
| **Versión** | 1.0 |
| **Responsable** | Gestor de Adquisiciones |

## 2. Objetivo

Supervisar el desempeño de los proveedores y contratos, auditar el cumplimiento de las condiciones pactadas, controlar los pagos contra entregables y gestionar cualquier reclamación o disputa contractual.

## 3. Evaluación de Proveedores (M1-M9)

| Proveedor | Adquisición | Contrato | Entregables / SLAs | Cumplimiento | Calidad | Puntuación Global | Estado |
|-----------|-------------|----------|--------------------|--------------|---------|-------------------|--------|
| AWS | Infraestructura cloud | Consumo mensual | Uptime >99,5%; soporte <4h | 100% | Alta | 5/5 | Verde |
| Stripe | Pasarela de pagos | % por transacción | Disponibilidad >99,9%; PSD2 | 100% | Alta | 5/5 | Verde |
| Agencia Alfa | Branding e identidad | Precio fijo 15.000€ | Manual marca + landing + kit | 85% | Media-Alta | 3/5 | Amarillo |
| Freelance Mobile X | Desarrollo app iOS | Precio fijo 6.000€ | Entrega M6; 0 crashes críticos | 90% | Alta | 4/5 | Verde |
| LeasePlan | Vehículos leasing (10) | Leasing 12 meses | Entrega M5; seguro incluido; km ilimitados | 95% | Alta | 4/5 | Verde |
| Mapfre | Seguros (RC + flota + ciber) | Prima anual 7.000€ | Cobertura inmediata; gestión siniestros <48h | 100% | Alta | 5/5 | Verde |
| Asesoría Legal Y | Legal / RGPD / contratos | Retainer 10.000€ | Respuesta <24h; documentos sin errores | 100% | Alta | 5/5 | Verde |
| Eventos Z | Evento lanzamiento Madrid | Precio fijo 9.000€ | Venue + catering + 80 personas | 100% | Alta | 5/5 | Verde |
| Agencia Performance | Publicidad digital Meta/Google | Consumo variable | CAC <400€; reporting semanal | 80% | Media | 3/5 | Amarillo |
| Despacho Auditoría | Auditoría RGPD | Precio fijo 4.000€ | Informe sin hallazgos críticos | 100% | Alta | 5/5 | Verde |

## 4. Auditoría de Cumplimiento Contractual

| Cláusula | Proveedores Auditados | Cumple | No Cumple | Acción |
|----------|----------------------|--------|-----------|--------|
| NDA firmado antes del acceso a datos | 8/8 proveedores sensibles | 8 | 0 | — |
| SLA de respuesta (soporte) | AWS, Stripe, Mapfre, Legal | 4 | 0 | — |
| Penalización por retraso (0,5%/día) | Agencia Alfa, Freelance X, Eventos Z | 2 | 1 (Agencia Alfa) | Aplicar descuento 1.500€ en factura final por retraso de 5 días en kit de marca |
| Propiedad intelectual transferida | Freelance X, Agencia Alfa | 2 | 0 | — |
| RC profesional vigente | Todos | 10/10 | 0 | — |
| Facturación conforme a entregables | Todos | 10/10 | 0 | — |

## 5. Seguimiento de Pagos vs. Entregables

| Proveedor | Importe Contratado | Pagado a M9 | % Pagado | Entregables Aceptados | % Entregado | Diferencia | Riesgo |
|-----------|--------------------|-------------|----------|-----------------------|-------------|------------|--------|
| Agencia Alfa | 15.000€ | 12.000€ (80%) | 80% | 85% | 85% | -5% | Bajo; retención 3.000€ hasta cierre |
| Freelance Mobile X | 6.000€ | 6.000€ (100%) | 100% | 90% | 90% | +10% | Controlado; bug menor post-pago |
| Eventos Z Madrid | 9.000€ | 9.000€ (100%) | 100% | 100% | 100% | 0% | Nulo |
| LeasePlan | 26.000€ (anual) | 13.000€ (50%) | 50% | 100% | 100% | -50% | Nulo; pago fraccionado mensual |
| AWS | Variable (~1.170€/mes) | 10.500€ | 100% consumos | 100% | 100% | 0% | Nulo |
| Agencia Performance | Variable (~2.330€/mes) | 21.000€ | 100% consumos | 80% | 80% | 0% | Medio; CAC actual 420€ (ligeramente > objetivo) |

## 6. Reclamaciones y Disputas

| ID | Proveedor / Parte | Asunto | Importe | Estado | Resolución |
|----|-------------------|--------|---------|--------|------------|
| DIS-01 | Agencia Alfa | Retraso en entrega de kit de marca (5 días) | Penalización 1.500€ | Cerrada | Aceptada por proveedor; descuento aplicado en factura final |
| DIS-02 | Freelance Mobile X | Bug post-entrega en notificaciones push iOS | 0€ (garantía) | Cerrada | Fix incluido en garantía post-entrega (5 días); sin coste adicional |
| DIS-03 | Agencia Performance | Discrepancia en métricas de conversión atribuidas | 0€ | En mediación | Revisión conjunta de dashboards; diferencia <5% atribuible a sesiones cruzadas; sin reclamación económica |
| DIS-04 | LeasePlan | Vehículo averiado M8; disputa sobre cobertura total | 800€ | Cerrada | Seguro cubre 100%; vehículo sustitución sin coste; resolución en 24h |

## 7. Acciones Pendientes

- [ ] Negociar contrato anual cloud con AWS para Año 2 con descuento por compromiso de volumen (objetivo: -15%).
- [ ] Evaluar rendimiento de Agencia Performance a M10; si CAC no baja a < 400€, solicitar propuesta de mejora o considerar RFP.
- [ ] Cerrar definitivamente facturación de Agencia Alfa tras entrega del 100% del kit de marca (retención 3.000€).
- [ ] Pre-qualificar proveedores para evento Barcelona (event planner, venue, catering) con 3 presupuestos.
- [ ] Auditar contratos de shoppers y marcas desde perspectiva de adquisiciones: cláusulas de entrega, penalizaciones y propiedad intelectual.
- [ ] Documentar lección aprendida de DIS-04 en playbook de gestión de flota para Año 2.

---

**Documento elaborado por**: Gestor de Adquisiciones  
**Fecha**: 2026-05-27  
**Versión**: 1.0 — Fase de Supervisión y Control  
**Referencias**: [Plan Gestión Adquisiciones](../fase-planificacion/plan-gestion-adquisiciones.md) · [Plan Gestión Costes](../fase-planificacion/plan-gestion-costes.md)
