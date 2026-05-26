# AGENTS.md — Personal Shopping Luxury

Este archivo define las reglas de oro para cualquier agente que trabaje en este repositorio. **Debes leerlo primero** antes de tocar cualquier archivo.

---

## 1. Propósito del Proyecto

Personal Shopping Luxury es una plataforma premium de personal shoppers a domicilio para tiendas de lujo. El MVP (Año 1) se limita a **Madrid y Barcelona**, con **10 shoppers** (5 por ciudad), modelo de **membresía (2.000€/año) + visitas (100€)**, y **consignación con 10-15 marcas** sin inventario propio.

**Presupuesto Año 1**: 660.000€  
**Ingresos Año 1**: 684.000€  
**Beneficio Año 1**: 24.000€ (margen 3,5% sobre ingresos)  
**Objetivo Año 1**: 200 miembros activos

---

## 2. Estructura de Documentación

El proyecto está organizado por **fases** (Inicio, Planificación, Ejecución, Cierre), cada una con sus entregables en carpetas:

```
├── acta-constitucion/
├── fase-inicio/
├── fase-planificacion/
├── fase-ejecucion/      (cuando se cree)
├── fase-cierre/         (cuando se cree)
└── README.md            ← Matriz maestra de navegación
```

**Regla de oro**: Cada vez que se crea o modifica un documento, **actualizar la matriz del README** con el enlace correspondiente en la celda correcta (Área de Conocimiento × Fase).

### Áreas de conocimiento (10)

Integración, Alcance, Tiempo, Costes, Calidad, Recursos, Comunicaciones, Riesgos, Interesados, Adquisiciones.

### Fases (5)

Inicio, Planificación, Ejecución, Supervisión y Control, Cierre.

---

## 3. Reglas de Documentación

- **Preferir `.md` para texto**, `.html` solo para dashboards/presentaciones interactivas.
- **No dejar documentos muertos**: si un `.md` queda obsoleto por uno nuevo, eliminarlo o redirigirlo.
- **Mantener coherencia entre documentos**: si cambia un dato clave (ej: 10 shoppers, 660K€, Madrid+Barcelona), propagar a todos los docs afectados.
- **Criterios de aceptación**: todo plan de planificación debe incluir criterios medibles, no subjetivos.
- **Supuestos y restricciones**: documentar qué damos por hecho y qué nos limita.

---

## 4. Restricciones del Proyecto (Innegociables)

| Restricción | Valor |
|-------------|-------|
| Presupuesto máximo Año 1 | 660.000€ |
| Lanzamiento MVP Madrid | Mes 9 como máximo |
| Lanzamiento Barcelona | Mes 12 como máximo |
| Shoppers | 10 (5 por ciudad) |
| Visitas | Solo para miembros con membresía activa |
| Vehículos | Empresa los provee |
| Sin inventario propio | Modelo consignación |
| Sin e-commerce directo | Plataforma no vende stock propio |
| Sin almacén propio | Logística en showrooms de marcas |
| Sin IA/VR/Avatar 3D en MVP | Rechazado para roadmap futuro |
| Cumplimiento RGPD | Total desde el diseño |
| Stack estable | Sin frameworks experimentales |

---

## 5. Datos Clave que Nunca Deben Contradecirse

- **Shoppers**: 10 (5 Madrid, 5 Barcelona).
- **Membresía**: 2.000€/año. **Visitas adicionales**: 100€.
- **Ciudades Año 1**: Madrid (M9) + Barcelona (M12). **Málaga/Mallorca**: Año 2+.
- **Consignación**: 10-15 marcas, sin inversión en stock.
- **Ingresos Año 1**: 684K€ (400K membresías + 200K visitas + 84K comisiones).
- **Margen sobre ingresos**: 3,5% (24K€/684K€).
- **Margen neto objetivo Año 3**: 15-18%.

---

## 6. Flujo de Trabajo del Agente

1. **Leer AGENTS.md primero** (este archivo).
2. **Consultar README.md** para entender el estado actual de la documentación.
3. **Leer los documentos relevantes de la fase anterior** antes de escribir en una nueva fase.
4. **Actualizar la matriz del README** inmediatamente después de crear/modificar cualquier documento.
5. **No duplicar información**: si un dato ya existe en otro doc, enlazarlo o resumirlo, no copiarlo.
6. **Usar commits descriptivos** con el prefijo `docs:` y descripción clara.

---

## 7. Comunicación con el Usuario

- **Respuestas concisas**: presentar el resultado, no narrar el proceso paso a paso.
- **Mostrar la matriz actualizada** cuando se modifique el README.
- **Preguntar antes de asumir**: si hay ambigüedad en un requisito, clarificar antes de escribir.
- **No inventar URLs**: solo usar URLs proporcionadas por el usuario o derivadas del proyecto.

---

## 8. Contexto Técnico

- No hay código fuente todavía (proyecto de gestión, no desarrollo activo).
- Los `.html` son para visualización estática (dashboards, presentaciones). No requieren servidor.
- Los `.md` son la fuente de verdad para toda la documentación de gestión.
- Fecha de referencia del proyecto: 2026-05-26.

---

**Última actualización**: 2026-05-26  
**Versión**: 1.0
