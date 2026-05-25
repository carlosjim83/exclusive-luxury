# Solicitud de Cambio de Alcance — Avatar 3D con Preview de Ropa

## 1. Información de la Solicitud

| Campo | Descripción |
|-------|-------------|
| **ID** | SC-001 |
| **Fecha** | 2026-05-22 |
| **Solicitante** | Cliente / Stakeholder externo ("compañero de clase") |
| **Fase actual** | Inicio |
| **Documento afectado** | Declaración del Alcance Preliminar |
| **Estado** | Evaluado — **Rechazado para MVP, propuesto para roadmap futuro** |

## 2. Descripción de la Solicitud

El solicitante propone incluir en el MVP una funcionalidad de **avatar 3D personalizable** donde el cliente pueda:
- Crear un avatar digital con sus medidas corporales.
- Visualizar cómo le quedarían las prendas seleccionadas por el personal shopper antes de la visita domiciliaria.
- Usar esta preview como "probador virtual".

## 3. Análisis de Impacto

### 3.1 Impacto en Alcance

| Aspecto | Evaluación |
|---------|-----------|
| **¿Está en el alcance actual?** | No. Está explícitamente excluido en sección 5.3 (Tecnología): "Realidad virtual / probador virtual". |
| **Tipo de cambio** | Expansión de alcance tecnológico significativo. |
| **Complejidad** | Alta. Requiere tecnología 3D, modelado de prendas, integración con catálogo de marcas. |

### 3.2 Impacto en Restricciones

| Restricción afectada | Impacto |
|---------------------|---------|
| **RES-01** (Presupuesto 660K€) | El desarrollo de un motor 3D o integración con una solución third-party (como Zeekit, Vue.ai, o desarrollo propio) incrementaría el presupuesto en **150K€ - 400K€** adicionales. |
| **RES-04** (Tiempo: lanzamiento en 9 meses) | Añadiría **3-6 meses** al desarrollo del MVP. El lanzamiento se retrasaría al mes 12-15. |
| **RES-09** (Stack estable, sin frameworks experimentales) | La tecnología 3D web requiere WebGL, Three.js, o integraciones con APIs especializadas que aumentan la complejidad técnica y el riesgo de estabilidad. |

### 3.3 Impacto en Riesgos

| Riesgo relacionado | Incremento |
|-------------------|------------|
| **RIE-12** (Retraso plataforma) | Probabilidad sube de 3 a 4. |
| **RIE-09** (Desviación presupuesto) | Probabilidad sube de 3 a 4. |
| **RIE-13** (Seguridad/filtración de datos) | Impacto sube: datos biométricos (medidas corporales) requieren protección adicional bajo RGPD. |
| **Nuevo riesgo** | Incertidumbre tecnológica: la calidad del fit virtual no suele ser precisa, lo que generaría frustración en el cliente premium. |

### 3.4 Impacto en Modelo de Negocio

| Factor | Evaluación |
|--------|-----------|
| **Alineación con propuesta de valor** | **Baja**. Nuestro diferencial es la experiencia **física** a domicilio. Un avatar 3D digitaliza lo que queremos humanizar. |
| **Target** | El cliente de lujo que paga 2.000€/año prefiere probar la prenda real en su casa con un experto, no un render digital. |
| **Competidores** | Esto nos acercaría al modelo de Lookiero o Farfetch (digital-first), diluyendo nuestro nicho azul. |
| **Coste/beneficio** | Alto coste de desarrollo para un beneficio marginal en el segmento premium. |

## 4. Análisis de Alternativas

| Alternativa | Descripción | Viabilidad MVP |
|-------------|-------------|----------------|
| **A. Avatar 3D completo** (solicitud original) | Motor 3D con ajuste de medidas y texturas reales. | ❌ No viable. Coste y tiempo excesivos. |
| **B. Lookbook digital simple** | Galería de imágenes de las prendas seleccionadas por el shopper, enviadas antes de la visita. | ✅ Viable. Coste mínimo (ya está en el CRM). |
| **C. Medidas del cliente en CRM** | El shopper consulta medidas corporales del cliente en el CRM para seleccionar tallas, sin visualización 3D. | ✅ Viable. Ya contemplado en el alcance (perfil de cliente). |
| **D. Fotos reales de la prenda** | El shopper fotografía la prenda en consignación y la comparte por WhatsApp/app antes de la visita. | ✅ Viable. Sin coste de desarrollo. |

## 5. Decisión y Justificación

### Decisión: **RECHAZAR para el MVP**

**Motivos:**

1. **Desalineación estratégica**: Nuestro modelo de negocio se basa en la **experiencia física y humana**. Un avatar 3D contradice la propuesta de valor "el experto va a tu casa". Si el cliente quiere probar digitalmente, ya tiene Farfetch o Lookiero.
2. **Restricciones incumplidas**: Violamos RES-01 (presupuesto), RES-04 (tiempo) y RES-09 (stack estable).
3. **Riesgo de calidad**: Los probadores virtuales actuales no ofrecen precisión suficiente para justificar una inversión de 150K€+ en el segmento lujo. Un cliente que paga 2.000€/año espera tocar y probar, no un render.
4. **Oportunidad coste**: Esos recursos son más valiosos invertidos en reclutar shoppers de calidad y conseguir marcas de consignación.

### Compromiso: **Incluir en Roadmap Año 2+ como estudio de viabilidad**

Si el modelo demuestra éxito y hay demanda explícita de los miembros, se puede evaluar una integración con una solución third-party (no desarrollo propio) en la fase de expansión.

## 6. Comunicación al Solicitante

> Gracias por la propuesta. Hemos evaluado la funcionalidad de avatar 3D y, aunque es visualmente atractiva, **no se alinea con la propuesta de valor del MVP**.
>
> Nuestro diferencial es la visita física a domicilio con un experto humano. Un probador virtual nos posicionaría como "otra app de moda digital" en lugar de "el club exclusivo de personal shoppers".
>
> **Alternativa inmediata**: El shopper ya puede enviar fotos reales de las prendas seleccionadas y consultar las medidas del cliente en el CRM antes de la visita. Esto cubre la necesidad de "preview" sin complejidad técnica.
>
> **Futuro**: Revisitamos esta idea en el Año 2 si hay demanda real de los miembros.

## 7. Lecciones Aprendidas

- Las "ideas brillantes" de stakeholders deben pasar por el filtro de alineación estratégica antes de valorarse técnicamente.
- Es más fácil decir "no" cuando el alcance está bien documentado con criterios claros de inclusión/exclusión.
- La propuesta de valor única actúa como escudo contra el scope creep ("feature creep").

---

**Documento elaborado por**: Dirección del Proyecto  
**Fecha**: 2026-05-22  
**Versión**: 1.0
