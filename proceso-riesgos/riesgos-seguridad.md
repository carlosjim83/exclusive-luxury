# Ficha de Riesgo por Categoría (PMI) — Seguridad

> Documento de desglose, categorización y planificación de la respuesta a los riesgos de seguridad física, digital y operacional del proyecto Personal Shopping Luxury.

---

## 1. Información General

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Personal Shopping Luxury |
| **Categoría** | Seguridad (Física, Digital y Operacional) |
| **Fecha** | 2026-05-28 |
| **Versión** | 1.0 |
| **Responsable** | Director de Seguridad / DPO (Oficial de Seguridad Designado) |

## 2. Alcance de la Categoría

Esta categoría cubre las amenazas al ecosistema de lujo del proyecto en tres dimensiones diferenciadas, asegurando la integridad de los activos físicos de alto valor, la privacidad de los clientes exclusivos y la continuidad operativa del servicio:

- **Seguridad Física**: Protección activa del equipo de personal shoppers, resguardo e integridad de la mercancía de lujo en tránsito (desde las boutiques asociadas hasta las ubicaciones de entrega) y mitigación de vectores de asalto o intrusión en los domicilios de clientes de alto patrimonio neto (HNWIs) en Madrid y Barcelona.
- **Seguridad Digital y Ciberseguridad**: Salvaguarda de la confidencialidad, integridad y disponibilidad del sistema tecnológico del MVP (CRM, base de datos y pasarela de pagos), garantizando el cumplimiento estricto del RGPD frente a fugas de datos, extorsión informática (Ransomware) y ataques de denegación de servicio (DDoS).
- **Seguridad Operacional e Interna**: Control preventivo del factor humano frente a la sustracción o fuga deliberada de información confidencial hacia competidores o prensa (paparazzis), y blindaje del proceso de reclutamiento (vetting) de personal de confianza.

## 3. Escala de Evaluación (PMI — Matriz de Probabilidad × Impacto)

| Probabilidad | Valor | Impacto | Valor |
|--------------|-------|---------|-------|
| Muy baja (≤ 10 %) | 1 | Mínimo (sin afectación crítica en la operación) | 1 |
| Baja (10–25 %) | 2 | Bajo (retrasa entregables leves de soporte) | 2 |
| Media (25–50 %) | 3 | Moderado (afecta coste/plazo de la fase entre 5–10 %) | 3 |
| Alta (50–75 %) | 4 | Alto (afecta coste/plazo del MVP > 10 % o merma calidad) | 4 |
| Muy alta (> 75 %) | 5 | Crítico (amenaza directamente la viabilidad del proyecto) | 5 |

**Umbral de criticidad**: Puntuación ≥ 12 (Probabilidad × Impacto) → Riesgo crítico.

## 4. Riesgos Identificados

### 4.1 Riesgos Críticos (Puntuación ≥ 12)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario | Reserva / Presupuesto | KRI | Umbral KRI |
|----|--------|-------------|-------|------|-------|----------------|--------------------|-------------|-----------------------|-----|------------|
| SEG-01 | Robo o atraco de mercancía en tránsito | Sustracción violenta o por distracción de las piezas de lujo transportadas por los personal shoppers en rutas de entrega. | 3 | 4 | **12** | Mitigar / Transferir | Perfil bajo en vehículos (sin logos); límites de valor de 15.000 € por trayecto (superado el límite se requiere blindado externo); rutas dinámicas y maleteros de seguridad anclados. Seguro de mercancías contratado. | Operations Manager | 15.000 € (Prima seguro + equipamiento físico de vehículos) | Intentos de asalto registrados o seguimientos sospechosos reportados en ruta. | > 0 incidentes reportados en un mes. |
| SEG-04 | Fuga de información por empleados (filtración a la prensa) | Empleado (shopper, soporte o tech) vende o filtra datos de visitas de celebridades o empresarios VIP a medios o competidores. | 3 | 4 | **12** | Mitigar | Acuerdos de confidencialidad (NDA) extremadamente severos con penalización financiera; logs de acceso detallados en el CRM; marcas de agua digitales en pantalla; bloqueo de descargas masivas y capturas. | Legal / DPO | 5.000 € (Redacción legal avanzada, software de auditoría de logs) | Consultas inusuales de perfiles VIP o descargas de datos fuera del horario laboral. | Descarga masiva > 1 o consultas duplicadas de un mismo perfil VIP por más de 2 usuarios. |

### 4.2 Riesgos Significativos (Puntuación 8–11)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Plan de Mitigación | Propietario |
|----|--------|-------------|-------|------|-------|----------------|--------------------|-------------|
| SEG-02 | Filtración de datos de carácter personal (RGPD) | Acceso no autorizado a bases de datos con direcciones residenciales privadas de alta seguridad y hábitos de consumo VIP. | 2 | 5 | **10** | Mitigar | Cifrado TLS 1.3 en tránsito y AES-256 en reposo; separación física de bases de datos de direcciones de la de facturación; enmascaramiento de datos en entornos de staging. | CTO / Tech Lead |
| SEG-05 | Secuestro de datos y extorsión (Ransomware) | Ataque informático que bloquea la app/web del MVP amenazando con doxeo de datos residenciales VIP si no se paga rescate. | 2 | 5 | **10** | Mitigar | Backups diarios en la nube aislada de forma lógica e inmutable; segmentación de la red de producción; uso de Web Application Firewalls (WAF) corporativos de alta gama. | CTO / Tech Lead |
| SEG-06 | Robo o pérdida de iPad corporativo | Sustracción del dispositivo asignado al shopper con acceso activo a rutas de visita del día y CRM de clientes. | 3 | 3 | **9** | Mitigar | Gestión de dispositivos móviles (MDM) centralizada con borrado remoto instantáneo; autenticación biométrica obligatoria (FaceID / TouchID). | Operations Manager / IT |

### 4.3 Riesgos Monitorizados (Puntuación ≤ 7)

| ID | Riesgo | Descripción | Prob. | Imp. | Punt. | Estrategia PMI | Propietario |
|----|--------|-------------|-------|------|-------|----------------|-------------|
| SEG-03 | Suplantación de identidad del shopper en domicilio | Delincuentes fingen ser personal de la empresa para acceder a la residencia del cliente VIP o asaltar el domicilio durante la prueba. | 1 | 5 | **5** | Mitigar | Operations Manager |

## 5. Plan de Respuesta a Incidentes (Activación)

### Para riesgo: SEG-01 (Robo o atraco de mercancía en tránsito)

- **Trigger / Condición de activación**: El personal shopper se comunica con la central o activa el botón de pánico en su aplicación reportando robo violento o hurto del cargamento de lujo durante la ruta.

- **Acciones inmediatas (0–24 h)**:
  - Priorizar la seguridad física y psicológica del empleado (asegurar que se encuentre a salvo y llamar inmediatamente a emergencias 112 en caso de haber lesiones).
  - Bloquear en remoto el iPad corporativo del shopper afectado a través de la consola MDM centralizada.
  - Formular la denuncia policial formal aportando el inventario exacto de las piezas de lujo sustraídas junto a sus números de serie de fábrica.
  - Informar a las boutiques asociadas sobre los artículos sustraídos para detener las operaciones de consignación vinculadas a dichas referencias.

- **Acciones a corto plazo (1–7 días)**:
  - Tramitar el siniestro ante la compañía de seguros proporcionando copia de la denuncia para la correspondiente cobertura de pérdida de mercancías.
  - Analizar forensemente la geolocalización de la ruta del vehículo (vía GPS) para identificar patrones de vulnerabilidad o posibles seguimientos.
  - Programar la reposición prioritaria de los artículos con la marca asociada para minimizar el impacto percibido por el cliente VIP final.

- **Escalación**: Notificar telefónicamente al Director del Proyecto y al Patrocinador en un plazo máximo de 1 hora a partir del reporte inicial.

---

### Para riesgo: SEG-04 (Fuga de información por empleados — Filtración a prensa)

- **Trigger / Condición de activación**: Publicación de datos privados de visitas o preferencias de consumo de un cliente VIP en redes sociales o medios de comunicación, o bien el disparo de una alarma automática de descargas masivas no autorizadas desde el CRM de producción.

- **Acciones inmediatas (0–24 h)**:
  - Revocar de manera inmediata todos los accesos al CRM, repositorios y servidores del usuario que originó el disparo de la alerta o que estuvo asignado al cliente afectado.
  - Extraer de forma forense las trazas de logs para identificar las direcciones IP implicadas, marcas de tiempo y volumen total de datos comprometidos.
  - Remitir una notificación legal de carácter urgente (Cease & Desist) al medio responsable de la publicación o tenedor de la información para congelar la difusión.

- **Acciones a corto plazo (1–7 días)**:
  - Reportar formalmente la brecha de seguridad de datos ante la Agencia Española de Protección de Datos (AEPD) en un plazo inferior a 72 horas, de acuerdo al RGPD.
  - Establecer comunicación institucional directa y confidencial con el cliente afectado para detallar las acciones correctoras y la estrategia jurídica emprendida.
  - Iniciar querella penal y civil contra el empleado o ex-empleado infractor aplicando el régimen de penalidades económicas severas estipuladas en el NDA.

- **Escalación**: Notificar al Director del Proyecto, al Oficial de Seguridad/DPO y al equipo de asesoría legal en un plazo máximo de 2 horas.

## 6. Dependencias con Otras Categorías

| Riesgo ID | Categoría Relacionada | Tipo de Dependencia |
|-----------|-----------------------|---------------------|
| SEG-01 | Operativa / Consignación | Efecto: El robo físico interrumpe el servicio, consume las reservas del seguro y deteriora las relaciones comerciales de confianza mutua con marcas socias de lujo. |
| SEG-02 | Plataforma / Tecnología | Causa: Una debilidad o configuración errónea en las APIs de integración del CRM es el vector que permite la exfiltración masiva de datos personales. |
| SEG-04 | Shoppers / Personal | Causa: Un proceso laxo o apresurado de verificación de referencias (vetting) durante el reclutamiento facilita la contratación de perfiles con intenciones maliciosas. |

## 7. Acciones Pendientes

- [ ] Implementar la auditoría de logs y bloqueo automático en tiempo real por patrones de consulta anómalos o descargas masivas en el CRM — CTO / Tech Lead — Fecha límite: Mes 8 (Antes del Soft Launch de Madrid).
- [ ] Confeccionar los NDAs específicos para shoppers y equipo tecnológico con cláusulas penales indemnizatorias severas por vulneración del secreto profesional — Legal / DPO — Fecha límite: Mes 6 (Previo al reclutamiento activo).
- [ ] Suscripción formal y firma de pólizas de seguro de transporte de valores, responsabilidad civil profesional y ciberriesgo — Director del Proyecto — Fecha límite: Mes 7.

---

**Documento elaborado por**: Dirección del Proyecto / Especialista de Seguridad  
**Fecha**: 2026-05-28  
**Versión**: 1.0
