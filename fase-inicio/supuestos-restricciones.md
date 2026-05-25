# Supuestos y Restricciones — Personal Shopping Luxury

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Fase** | Inicio |
| **Fecha** | 2026-05-22 |
| **Versión** | 1.0 |
| **Responsable** | Director del Proyecto |

## 2. Definiciones

- **Supuesto**: Condición o factor que se da por cierto, real o cierto, sin prueba de lo contrario. Si un supuesto falla, el proyecto puede verse afectado en alcance, tiempo, coste o calidad.
- **Restricción**: Limitación impuesta al proyecto que el equipo debe respetar. Restricciones pueden ser de tiempo, presupuesto, recursos, regulación, tecnología, etc.

## 3. Supuestos

### 3.1 Mercado y Demanda

| ID | Supuesto | Impacto si falla | Propietario |
|----|----------|-------------------|-------------|
| SUP-01 | Existe demanda suficiente en Madrid y Barcelona para alcanzar 200 miembros activos en el primer año. | El proyecto no alcanza el punto de equilibrio; se requiere revisión del modelo o ampliación geográfica anticipada. | Marketing |
| SUP-02 | Los clientes de alto poder adquisitivo en España están dispuestos a pagar 2.000€/año por una membresía de personal shopping a domicilio. | El precio de membresía debe ajustarse o el modelo pivotar a visitas individuales sin membresía. | Dirección |
| SUP-03 | La tendencia post-pandemia hacia el servicio a domicilio y la experiencia personalizada se mantendrá estable durante los próximos 3 años. | La demanda disminuye y el crecimiento proyectado no se cumple. | Marketing |

### 3.2 Modelo de Negocio y Alianzas

| ID | Supuesto | Impacto si falla | Propietario |
|----|----------|-------------------|-------------|
| SUP-04 | Las marcas de lujo están dispuestas a firmar acuerdos de consignación con una startup nueva sin historial comercial probado. | No se puede ofrecer inventario exclusivo; el servicio se limita a asesoramiento sin venta directa. | Partnerships |
| SUP-05 | Es posible obtener márgenes comerciales atractivos (15-25%) en las piezas vendidas en consignación. | Los ingresos por comisión son insuficientes y el modelo depende únicamente de membresías y visitas. | Dirección |
| SUP-06 | Los personal shoppers aceptarán un modelo de ingresos mixto (fijo por visita + comisión variable) en lugar de empleo exclusivo. | Dificultad para reclutar shoppers cualificados; se requiere ofrecer contratos de exclusividad o mayores fijos. | Operations |

### 3.3 Recursos Humanos

| ID | Supuesto | Impacto si falla | Propietario |
|----|----------|-------------------|-------------|
| SUP-07 | Es posible reclutar 10 personal shoppers cualificados (5 por ciudad) en Madrid y Barcelona en un plazo de 6 meses. | El lanzamiento se retrasa o la calidad del servicio es inferior a lo esperado. | HR / Talent |
| SUP-08 | El equipo central (tecnología, operaciones, marketing) puede contratarse con el presupuesto asignado (660K€ Año 1). | Se requiere reducir alcance, buscar financiación adicional o retrasar el lanzamiento. | Dirección |
### 3.4 Tecnología y Regulación

| ID | Supuesto | Impacto si falla | Propietario |
|----|----------|-------------------|-------------|
| SUP-10 | El desarrollo de la plataforma web y app móvil puede completarse en 6-9 meses con el equipo tecnológico presupuestado. | El lanzamiento se retrasa; se requiere MVP reducido o contratación externa adicional. | CTO / Tech |
| SUP-11 | La normativa española (RGPD, ley de consumo, fiscalidad) no sufrirá cambios significativos que impidan el modelo de membresía o consignación durante el primer año. | Se requiere asesoría legal adicional y posibles ajustes al modelo contractual. | Legal |
| SUP-12 | Los proveedores de pasarela de pagos (Stripe, Redsys, etc.) admiten el modelo de cobro recurrente de membresías anuales sin problemas de compliance. | Retrasos en la activación de pagos o necesidad de cambiar de proveedor. | CTO / Tech |

## 4. Restricciones

### 4.1 Presupuesto y Financiación

| ID | Restricción | Implicación |
|----|-------------|-------------|
| RES-01 | **Presupuesto máximo Año 1: 660.000€**. No se dispondrá de fondos adicionales hasta que se demuestre el modelo con 200 miembros activos. | Todas las decisiones de gasto deben priorizarse. No hay margen para costes inesperados significativos. |
| RES-02 | **La financiación inicial proviene de inversores privados (angel / seed)**. No se contempla deuda bancaria ni crowdfunding en la fase inicial. | El control accionarial está diluido desde el inicio. Los inversores esperan retorno en 3-5 años. |
| RES-03 | **El modelo de consignación no permite inversión en inventario propio**. El capital disponible no se destinará a compra de stock. | La oferta de productos depende 100% de la disposición de las marcas socias. |

### 4.2 Temporal

| ID | Restricción | Implicación |
|----|-------------|-------------|
| RES-04 | **Lanzamiento MVP en Madrid: máximo 9 meses desde la aprobación del proyecto**. Barcelona debe abrirse en el mes 12 como máximo. | El equipo debe trabajar con agilidad. No hay margen para desarrollos tecnológicos largos. |
| RES-05 | **La expansión a Málaga y Mallorca no puede iniciarse antes del mes 18**. Recursos y atención deben centrarse en Madrid y Barcelona hasta entonces. | Los clientes potenciales de esas ciudades quedan fuera del alcance inicial. |

### 4.3 Geográfico y Operativo

| ID | Restricción | Implicación |
|----|-------------|-------------|
| RES-06 | **Las visitas domiciliarias se limitan a un radio máximo de 30 km desde el centro de cada ciudad de operación**. | Clientes en zonas rurales o alejadas no podrán ser atendidos a domicilio. |
| RES-07 | **El servicio de visitas está disponible únicamente para miembros con membresía activa**. No se ofrecen visitas individuales a no miembros. | La adquisición de clientes requiere que paguen la membresía completa antes de probar el servicio. |
| RES-08 | **No se dispone de almacén propio**. La logística de inventario depende de las marcas socias. **La empresa sí provee vehículos** para el desplazamiento de los personal shoppers. | El coste de flota forma parte del presupuesto operativo y limita el número de shoppers simultáneos activos. |

### 4.4 Tecnológico

| ID | Restricción | Implicación |
|----|-------------|-------------|
| RES-09 | **La plataforma debe desarrollarse con tecnologías modernas y escalables**, pero sin frameworks experimentales ni dependencias de proveedores poco consolidados. | Se prioriza estabilidad sobre innovación tecnológica pura. El stack debe ser mantenible por un equipo pequeño. |
| RES-10 | **La app móvil debe lanzarse en iOS y Android simultáneamente**. No se admite lanzamiento solo en una plataforma. | El equipo de desarrollo debe cubrir ambas plataformas o usar tecnología cross-platform (Flutter, React Native). |

### 4.5 Legal y Regulatorio

| ID | Restricción | Implicación |
|----|-------------|-------------|
| RES-11 | **El proyecto debe cumplir con el RGPD en todas las interacciones con datos personales de clientes y shoppers**. | Desde el diseño, la plataforma debe incluir consentimientos, derecho al olvido, y políticas de privacidad. |
| RES-12 | **Los contratos con personal shoppers deben respetar la normativa laboral española**. No se admiten modelos que puedan ser reclasificados como fraude de ley. | Se debe definir claramente si los shoppers son autónomos, colaboradores o empleados. |
| RES-13 | **Las marcas de consignación deben ser auténticas y con distribución oficial en España**. No se admiten replicas, gray market ni productos sin certificación. | El equipo de partnerships debe verificar la legitimidad de cada marca antes de firmar. |

## 5. Matriz de Impacto: Supuestos vs. Restricciones

| | RES-01 Presupuesto | RES-04 Tiempo | RES-06 Radio | RES-07 Solo miembros | RES-11 RGPD |
|---|:---:|:---:|:---:|:---:|:---:|
| SUP-01 Demanda 200 miembros | Alta | Media | Baja | Alta | Baja |
| SUP-04 Marcas en consignación | Media | Media | Baja | Baja | Baja |
| SUP-07 Reclutar 10 shoppers | Media | Alta | Media | Baja | Media |
| SUP-10 Desarrollo 6-9 meses | Alta | Alta | Baja | Baja | Baja |

*Leyenda: Alta = la restricción afecta gravemente al supuesto; Media = afecta moderadamente; Baja = afecta mínimamente.*

## 6. Acciones Pendientes para Planificación

- [ ] Validar cada supuesto con datos de mercado (encuestas, focus groups, entrevistas a marcas piloto).
- [ ] Negociar con inversores el protocolo de actuación si un supuesto clave falla (plan B).
- [ ] Definir el modelo contractual definitivo de los shoppers (autónomos vs. colaboradores vs. empleados).
- [ ] Realizar auditoría legal preliminar para confirmar cumplimiento de RGPD, fiscalidad y laboral.
- [ ] Establecer el stack tecnológico definitivo y validar que cumple RES-09 y RES-10.

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-22  
**Versión**: 1.0 — Fase de Inicio
