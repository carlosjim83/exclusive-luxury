<!DOCTYPE html>Ficha de Riesgo por Categoría (PMI) — SeguridadDocumento de desglose, categorización y planificación de la respuesta a los riesgos de seguridad física, digital y operacional del proyecto Personal Shopping Luxury.1. Información GeneralCampoDescripciónProyectoPersonal Shopping LuxuryCategoríaSeguridad (Física, Digital y Operacional)Fecha2026-05-28Versión1.0ResponsableDirector de Seguridad / DPO (Oficial de Seguridad Designado)2. Alcance de la CategoríaEsta categoría cubre las amenazas al ecosistema de lujo del proyecto en tres dimensiones diferenciadas, asegurando la integridad de los activos físicos de alto valor, la privacidad de los clientes exclusivos y la continuidad operativa del servicio:Seguridad Física: Protección activa del equipo de personal shoppers, resguardo e integridad de la mercancía de lujo en tránsito (desde las boutiques asociadas hasta las ubicaciones de entrega) y mitigación de vectores de asalto o intrusión en los domicilios de clientes de alto patrimonio neto (HNWIs) en Madrid y Barcelona.Seguridad Digital y Ciberseguridad: Salvaguarda de la confidencialidad, integridad y disponibilidad del sistema tecnológico del MVP (CRM, base de datos y pasarela de pagos), garantizando el cumplimiento estricto del RGPD frente a fugas de datos, extorsión informática (Ransomware) y ataques de denegación de servicio (DDoS).Seguridad Operacional e Interna: Control preventivo del factor humano frente a la sustracción o fuga deliberada de información confidencial hacia competidores o prensa (paparazzis), y blindaje del proceso de reclutamiento (vetting) de personal de confianza.3. Escala de Evaluación (PMI — Matriz de Probabilidad $\times$ Impacto)ProbabilidadValorImpactoValorMuy baja ($\le$ 10 %)1Mínimo (sin afectación crítica en la operación)1Baja (10–25 %)2Bajo (retrasa entregables leves de soporte)2Media (25–50 %)3Moderado (afecta coste/plazo de la fase entre 5–10 %)3Alta (50–75 %)4Alto (afecta coste/plazo del MVP > 10 % o merma calidad)4Muy alta (> 75 %)5Crítico (amenaza directamente la viabilidad del proyecto)5Umbral de criticidad: Puntuación $\ge$ 12 (Probabilidad $\times$ Impacto) $\rightarrow$ Riesgo crítico.4. Riesgos Identificados4.1 Riesgos Críticos (Puntuación $\ge$ 12)IDRiesgoDescripciónProb.Imp.Punt.Estrategia PMIPlan de MitigaciónPropietarioReserva / PresupuestoKRIUmbral KRISEG-01Robo o atraco de mercancía en tránsitoSustracción violenta o por distracción de las piezas de lujo transportadas por los personal shoppers en rutas de entrega.3412Mitigar / TransferirPerfil bajo en vehículos (sin logos); límites de valor de 15.000 € por trayecto (superado el límite se requiere blindado externo); rutas dinámicas y maleteros de seguridad anclados. Seguro de mercancías contratado.Operations Manager15.000 € (Prima seguro + equipamiento físico de vehículos)Intentos de asalto registrados o seguimientos sospechosos reportados en ruta.$> 0$ incidentes reportados en un mes.SEG-04Fuga de información por empleados (filtración a la prensa)Empleado (shopper, soporte o tech) vende o filtra datos de visitas de celebridades o empresarios VIP a medios o competidores.3412MitigarAcuerdos de confidencialidad (NDA) extremadamente severos con penalización financiera; logs de acceso detallados en el CRM; marcas de agua digitales en pantalla; bloqueo de descargas masivas y capturas.Legal / DPO5.000 € (Redacción legal avanzada, software de auditoría de logs)Consultas inusuales de perfiles VIP o descargas de datos fuera del horario laboral.Descarga masiva $> 1$ o consultas duplicadas de un mismo perfil VIP por más de 2 usuarios.4.2 Riesgos Significativos (Puntuación 8–11)IDRiesgoDescripciónProb.Imp.Punt.Estrategia PMIPlan de MitigaciónPropietarioSEG-02Filtración de datos de carácter personal (RGPD)Acceso no autorizado a bases de datos con direcciones residenciales privadas de alta seguridad y hábitos de consumo VIP.2510MitigarCifrado TLS 1.3 en tránsito y AES-256 en reposo; separación física de bases de datos de direcciones de la de facturación; enmascaramiento de datos en entornos de staging.CTO / Tech LeadSEG-05Secuestro de datos y extorsión (Ransomware)Ataque informático que bloquea la app/web del MVP amenazando con doxeo de datos residenciales VIP si no se paga rescate.2510MitigarBackups diarios en la nube aislada de forma lógica e inmutable; segmentación de la red de producción; uso de Web Application Firewalls (WAF) corporativos de alta gama.CTO / Tech LeadSEG-06Robo o pérdida de iPad corporativoSustracción del dispositivo asignado al shopper con acceso activo a rutas de visita del día y CRM de clientes.339MitigarGestión de dispositivos móviles (MDM) centralizada con borrado remoto instantáneo; autenticación biométrica obligatoria (FaceID / TouchID).Operations Manager / IT4.3 Riesgos Monitorizados (Puntuación $\le$ 7)IDRiesgoDescripciónProb.Imp.Punt.Estrategia PMIPropietarioSEG-03Suplantación de identidad del shopper en domicilioDelincuentes fingen ser personal de la empresa para acceder a la residencia del cliente VIP o asaltar el domicilio durante la prueba.155Mitigar (OTP dinámico enviado al cliente con foto del shopper antes de la visita; botón de pánico físico/digital para el shopper).Operations Manager5. Plan de Respuesta a Incidentes (Activación)Para riesgo: SEG-01 (Robo o atraco de mercancía en tránsito)Trigger / Condición de activación: El personal shopper se comunica con la central o activa el botón de pánico en su aplicación reportando robo violento o hurto del cargamento de lujo durante la ruta.Acciones inmediatas (0–24 h):Priorizar la seguridad física y psicológica del empleado (asegurar que se encuentre a salvo y llamar inmediatamente a emergencias 112 en caso de haber lesiones).Bloquear en remoto el iPad corporativo del shopper afectado a través de la consola MDM centralizada.Formular la denuncia policial formal aportando el inventario exacto de las piezas de lujo sustraídas junto a sus números de serie de fábrica.Informar a las boutiques asociadas sobre los artículos sustraídos para detener las operaciones de consignación vinculadas a dichas referencias.Acciones a corto plazo (1–7 días):Tramitar el siniestro ante la compañía de seguros proporcionando copia de la denuncia para la correspondiente cobertura de pérdida de mercancías.Analizar forensemente la geolocalización de la ruta del vehículo (vía GPS) para identificar patrones de vulnerabilidad o posibles seguimientos.Programar la reposición prioritaria de los artículos con la marca asociada para minimizar el impacto percibido por el cliente VIP final.Escalación: Notificar telefónicamente al Director del Proyecto y al Patrocinador en un plazo máximo de 1 hora a partir del reporte inicial.Para riesgo: SEG-04 (Fuga de información por empleados — Filtración a prensa)Trigger / Condición de activación: Publicación de datos privados de visitas o preferencias de consumo de un cliente VIP en redes sociales o medios de comunicación, o bien el disparo de una alarma automática de descargas masivas no autorizadas desde el CRM de producción.Acciones inmediatas (0–24 h):Revocar de manera inmediata todos los accesos al CRM, repositorios y servidores del usuario que originó el disparo de la alerta o que estuvo asignado al cliente afectado.Extraer de forma forense las trazas de logs para identificar las direcciones IP implicadas, marcas de tiempo y volumen total de datos comprometidos.Remitir una notificación legal de carácter urgente (Cease & Desist) al medio responsable de la publicación o tenedor de la información para congelar la difusión.Acciones a corto plazo (1–7 días):Reportar formalmente la brecha de seguridad de datos ante la Agencia Española de Protección de Datos (AEPD) en un plazo inferior a 72 horas, de acuerdo al RGPD.Establecer comunicación institucional directa y confidencial con el cliente afectado para detallar las acciones correctoras y la estrategia jurídica emprendida.Iniciar querella penal y civil contra el empleado o ex-empleado infractor aplicando el régimen de penalidades económicas severas estipuladas en el NDA.Escalación: Notificar al Director del Proyecto, al Oficial de Seguridad/DPO y al equipo de asesoría legal en un plazo máximo de 2 horas.6. Dependencias con Otras CategoríasRiesgo IDCategoría RelacionadaTipo de DependenciaSEG-01Operativa / ConsignaciónEfecto: El robo físico interrumpe el servicio, consume las reservas del seguro y deteriora las relaciones comerciales de confianza mutua con marcas socias de lujo.SEG-02Plataforma / TecnologíaCausa: Una debilidad o configuración errónea en las APIs de integración del CRM es el vector que permite la exfiltración masiva de datos personales.SEG-04Shoppers / PersonalCausa: Un proceso laxo o apresurado de verificación de referencias (vetting) durante el reclutamiento facilita la contratación de perfiles con intenciones maliciosas.7. Acciones Pendientes[ ] Implementar la auditoría de logs y bloqueo automático en tiempo real por patrones de consulta anómalos o descargas masivas en el CRM — CTO / Tech Lead — Fecha límite: Mes 8 (Antes del Soft Launch de Madrid).[ ] Confeccionar los NDAs específicos para shoppers y equipo tecnológico con cláusulas penales indemnizatorias severas por vulneración del secreto profesional — Legal / DPO — Fecha límite: Mes 6 (Previo al reclutamiento activo).[ ] Suscripción formal y firma de pólizas de seguro de transporte de valores, responsabilidad civil profesional y ciberriesgo — Director del Proyecto — Fecha límite: Mes 7.Documento elaborado por: Dirección del Proyecto / Especialista de SeguridadFecha: 2026-05-28Versión: 1.0
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ficha de Riesgos de Seguridad (PMI) — Personal Shopping Luxury</title>
    <style>
        :root {
            --navy-dark: #0a0e27;
            --navy-medium: #12183f;
            --navy-light: #1a2255;
            --gold: #d4af37;
            --gold-light: #e8c96a;
            --text-light: #f5f5f7;
            --text-gray: #a0a8c0;
            --success: #2ecc71;
            --warning: #f1c40f;
            --danger: #e74c3c;
            --font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background-color: #050714;
            color: var(--text-light);
            font-family: var(--font-family);
            line-height: 1.6;
            margin: 0;
            padding: 40px 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: var(--navy-dark);
            border: 1px solid var(--navy-light);
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            position: relative;
        }

        /* Utilidad de Copiado rápido */
        .utility-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--navy-medium);
            padding: 12px 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border: 1px solid var(--navy-light);
        }

        .utility-title {
            font-size: 14px;
            color: var(--text-gray);
            margin: 0;
        }

        .copy-btn {
            background-color: var(--gold);
            color: var(--navy-dark);
            border: none;
            padding: 8px 16px;
            font-size: 13px;
            font-weight: 700;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .copy-btn:hover {
            background-color: var(--gold-light);
            transform: translateY(-1px);
        }

        /* Tipografías del reporte */
        header {
            border-bottom: 2px solid var(--gold);
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        h1 {
            color: var(--gold);
            font-size: 28px;
            margin: 0 0 10px 0;
            letter-spacing: 0.5px;
        }

        .description-lead {
            color: var(--text-gray);
            font-style: italic;
            font-size: 15px;
            margin: 0;
        }

        h2 {
            color: var(--gold-light);
            font-size: 20px;
            border-bottom: 1px solid var(--navy-light);
            padding-bottom: 8px;
            margin-top: 40px;
            margin-bottom: 20px;
        }

        h3 {
            color: var(--text-light);
            font-size: 16px;
            margin-top: 25px;
            margin-bottom: 15px;
        }

        p, li {
            font-size: 14.5px;
            color: var(--text-gray);
        }

        ul {
            margin-top: 5px;
            margin-bottom: 15px;
            padding-left: 20px;
        }

        li {
            margin-bottom: 8px;
        }

        /* Tablas de Información */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: var(--navy-medium);
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--navy-light);
        }

        th, td {
            padding: 12px 15px;
            text-align: left;
            font-size: 13.5px;
            border-bottom: 1px solid var(--navy-light);
        }

        th {
            background-color: var(--navy-light);
            color: var(--gold);
            font-weight: 600;
        }

        tr:last-child td {
            border-bottom: none;
        }

        .bold-text {
            font-weight: 600;
            color: var(--text-light);
        }

        /* Badges de estado de riesgo */
        .status-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
        }

        .status-critical {
            background-color: rgba(231, 76, 60, 0.15);
            color: var(--danger);
            border: 1px solid var(--danger);
        }

        .status-significant {
            background-color: rgba(241, 196, 15, 0.15);
            color: var(--warning);
            border: 1px solid var(--warning);
        }

        .status-monitored {
            background-color: rgba(46, 204, 113, 0.15);
            color: var(--success);
            border: 1px solid var(--success);
        }

        .highlight-gold {
            color: var(--gold-light);
            font-weight: 600;
        }

        /* Secciones de incidentes e hitos */
        .box-incident {
            background-color: var(--navy-medium);
            border: 1px solid var(--navy-light);
            border-left: 4px solid var(--gold);
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 25px;
        }

        .box-incident h4 {
            margin: 0 0 10px 0;
            color: var(--gold);
            font-size: 15px;
        }

        /* Checklists */
        .checklist-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 10px;
        }

        .checklist-checkbox {
            margin-right: 12px;
            margin-top: 4px;
            accent-color: var(--gold);
        }

        /* Footer */
        footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid var(--navy-light);
            font-size: 12px;
            color: var(--text-gray);
            display: flex;
            justify-content: space-between;
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Utilidad para ver el código HTML nativo fácilmente -->
        <div class="utility-bar">
            <p class="utility-title">Ficha Oficial de Gestión de Riesgos de Seguridad (Estructura PMI)</p>
            <button class="copy-btn" id="copyBtn" onclick="copyEntireHTML()">Copiar Código HTML</button>
        </div>

        <header>
            <h1>Ficha de Riesgo por Categoría (PMI) — Seguridad</h1>
            <p class="description-lead">Documento de desglose, categorización y planificación de la respuesta a los riesgos de seguridad física, digital y operacional del proyecto Personal Shopping Luxury.</p>
        </header>

        <!-- 1. Información General -->
        <section>
            <h2>1. Información General</h2>
            <table>
                <thead>
                    <tr>
                        <th style="width: 30%;">Campo</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bold-text">Proyecto</td>
                        <td>Personal Shopping Luxury</td>
                    </tr>
                    <tr>
                        <td class="bold-text">Categoría</td>
                        <td>Seguridad (Física, Digital y Operacional)</td>
                    </tr>
                    <tr>
                        <td class="bold-text">Fecha</td>
                        <td>2026-05-28</td>
                    </tr>
                    <tr>
                        <td class="bold-text">Versión</td>
                        <td>1.0</td>
                    </tr>
                    <tr>
                        <td class="bold-text">Responsable</td>
                        <td>Director de Seguridad / DPO (Oficial de Seguridad Designado)</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- 2. Alcance de la Categoría -->
        <section>
            <h2>2. Alcance de la Categoría</h2>
            <p>Esta categoría cubre las amenazas al ecosistema de lujo del proyecto en tres dimensiones diferenciadas:</p>
            <ul>
                <li><strong>Seguridad Física:</strong> Protección del equipo de <em>personal shoppers</em>, resguardo de la mercancía de alto valor en tránsito y mitigación de vectores de acceso o asaltos en los domicilios de clientes VIP (HNWIs) en Madrid y Barcelona.</li>
                <li><strong>Seguridad Digital y Ciberseguridad:</strong> Protección de la confidencialidad, integridad y disponibilidad de la información, garantizando el cumplimiento estricto del RGPD frente a fugas de datos, ataques de ransomware o denegación de servicio (DDoS).</li>
                <li><strong>Seguridad Operacional e Interna:</strong> Control del factor humano contra la fuga deliberada de información confidencial hacia la prensa o competidores, y aseguramiento del proceso de contratación (<em>vetting</em>).</li>
            </ul>
        </section>

        <!-- 3. Escala de Evaluación -->
        <section>
            <h2>3. Escala de Evaluación (PMI — Matriz de Probabilidad &times; Impacto)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Probabilidad</th>
                        <th>Valor</th>
                        <th>Impacto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Muy baja (&le; 10%)</td>
                        <td class="bold-text">1</td>
                        <td>Mínimo (sin afectación crítica)</td>
                        <td class="bold-text">1</td>
                    </tr>
                    <tr>
                        <td>Baja (10% - 25%)</td>
                        <td class="bold-text">2</td>
                        <td>Bajo (retrasa entregables leves)</td>
                        <td class="bold-text">2</td>
                    </tr>
                    <tr>
                        <td>Media (25% - 50%)</td>
                        <td class="bold-text">3</td>
                        <td>Moderado (afecta coste/plazo 5% - 10%)</td>
                        <td class="bold-text">3</td>
                    </tr>
                    <tr>
                        <td>Alta (50% - 75%)</td>
                        <td class="bold-text">4</td>
                        <td>Alto (afecta coste/plazo &gt; 10% o calidad)</td>
                        <td class="bold-text">4</td>
                    </tr>
                    <tr>
                        <td>Muy alta (&gt; 75%)</td>
                        <td class="bold-text">5</td>
                        <td>Crítico (amenaza viabilidad del proyecto)</td>
                        <td class="bold-text">5</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Umbral de criticidad</strong>: Puntuación &ge; 12 (Probabilidad &times; Impacto) &rarr; <span class="highlight-gold">Riesgo crítico.</span></p>
        </section>

        <!-- 4. Riesgos Identificados -->
        <section>
            <h2>4. Riesgos Identificados</h2>

            <h3>4.1 Riesgos Críticos (Puntuación &ge; 12)</h3>
            <div style="overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Riesgo</th>
                            <th>Descripción</th>
                            <th>Prob.</th>
                            <th>Imp.</th>
                            <th>Punt.</th>
                            <th>Estrategia PMI</th>
                            <th>Plan de Mitigación</th>
                            <th>Propietario</th>
                            <th>Reserva / Presupuesto</th>
                            <th>KRI</th>
                            <th>Umbral KRI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bold-text">SEG-01</td>
                            <td class="highlight-gold">Robo o atraco de mercancía en tránsito</td>
                            <td>Sustracción violenta o por distracción de las piezas de lujo transportadas por los <em>personal shoppers</em> en rutas de entrega.</td>
                            <td>3</td>
                            <td>4</td>
                            <td><span class="status-badge status-critical">12</span></td>
                            <td><strong>Mitigar / Transferir</strong></td>
                            <td>Perfil bajo en vehículos (sin logos); límites de valor de 15.000 € por trayecto (superado el límite se requiere blindado externo); rutas dinámicas y maleteros de seguridad anclados. Seguro de mercancías contratado.</td>
                            <td>Operations Manager</td>
                            <td>15.000 € (Prima seguro + equipamiento física de vehículos)</td>
                            <td>Intentos de asalto registrados o seguimientos sospechosos reportados en ruta.</td>
                            <td>&gt; 0 incidentes reportados en un mes.</td>
                        </tr>
                        <tr>
                            <td class="bold-text">SEG-04</td>
                            <td class="highlight-gold">Fuga de información por empleados (filtración a la prensa)</td>
                            <td>Empleado (shopper, soporte o tech) vende o filtra datos de visitas de celebridades o empresarios VIP a medios o competidores.</td>
                            <td>3</td>
                            <td>4</td>
                            <td><span class="status-badge status-critical">12</span></td>
                            <td><strong>Mitigar</strong></td>
                            <td>Acuerdos de confidencialidad (NDA) extremadamente severos con penalización financiera; logs de acceso detallados en el CRM; marcas de agua digitales en pantalla; bloqueo de descargas masivas y capturas.</td>
                            <td>Legal / DPO</td>
                            <td>5.000 € (Redacción legal avanzada, software de auditoría de logs)</td>
                            <td>Consultas inusuales de perfiles VIP o descargas de datos fuera del horario laboral.</td>
                            <td>Descarga masiva &gt; 1 o consultas duplicadas de un mismo perfil VIP por más de 2 usuarios.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>4.2 Riesgos Significativos (Puntuación 8–11)</h3>
            <div style="overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Riesgo</th>
                            <th>Descripción</th>
                            <th>Prob.</th>
                            <th>Imp.</th>
                            <th>Punt.</th>
                            <th>Estrategia PMI</th>
                            <th>Plan de Mitigación</th>
                            <th>Propietario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bold-text">SEG-02</td>
                            <td>Filtración de datos de carácter personal (RGPD)</td>
                            <td>Acceso no autorizado a bases de datos con direcciones residenciales privadas de alta seguridad y hábitos de consumo VIP.</td>
                            <td>2</td>
                            <td>5</td>
                            <td><span class="status-badge status-significant">10</span></td>
                            <td><strong>Mitigar</strong></td>
                            <td>Cifrado TLS 1.3 en tránsito y AES-256 en reposo; separación física de bases de datos de direcciones de la de facturación; enmascaramiento de datos en entornos de staging.</td>
                            <td>CTO / Tech Lead</td>
                        </tr>
                        <tr>
                            <td class="bold-text">SEG-05</td>
                            <td>Secuestro de datos y extorsión (Ransomware)</td>
                            <td>Ataque informático que bloquea la app/web del MVP amenazando con doxeo de datos residenciales VIP si no se paga rescate.</td>
                            <td>2</td>
                            <td>5</td>
                            <td><span class="status-badge status-significant">10</span></td>
                            <td><strong>Mitigar</strong></td>
                            <td>Backups diarios en la nube aislada de forma lógica e inmutable; segmentación de la red de producción; uso de Web Application Firewalls (WAF) corporativos de alta gama.</td>
                            <td>CTO / Tech Lead</td>
                        </tr>
                        <tr>
                            <td class="bold-text">SEG-06</td>
                            <td>Robo o pérdida de iPad corporativo</td>
                            <td>Sustracción del dispositivo asignado al <em>shopper</em> con acceso activo a rutas de visita del día y CRM de clientes.</td>
                            <td>3</td>
                            <td>3</td>
                            <td><span class="status-badge status-significant">9</span></td>
                            <td><strong>Mitigar</strong></td>
                            <td>Gestión de dispositivos móviles (MDM) centralizada con borrado remoto instantáneo; autenticación biométrica obligatoria (FaceID / TouchID).</td>
                            <td>Operations Manager / IT</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>4.3 Riesgos Monitorizados (Puntuación &le; 7)</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Riesgo</th>
                        <th>Descripción</th>
                        <th>Prob.</th>
                        <th>Imp.</th>
                        <th>Punt.</th>
                        <th>Estrategia PMI</th>
                        <th>Propietario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bold-text">SEG-03</td>
                        <td>Suplantación de identidad del <em>shopper</em> en domicilio</td>
                        <td>Delincuentes fingen ser personal de la empresa para acceder a la residencia del cliente VIP o asaltar el domicilio durante la prueba.</td>
                        <td>1</td>
                        <td>5</td>
                        <td><span class="status-badge status-monitored">5</span></td>
                        <td><strong>Mitigar</strong></td>
                        <td>Operations Manager</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- 5. Plan de Respuesta a Incidentes (Activación) -->
        <section>
            <h2>5. Plan de Respuesta a Incidentes (Activación)</h2>

            <div class="box-incident">
                <h4>Para riesgo: SEG-01 (Robo o atraco de mercancía en tránsito)</h4>
                <p><strong>Trigger / Condición de activación:</strong> El <em>personal shopper</em> se comunica con la central o activa el botón de pánico reportando robo violento o hurto del cargamento de lujo en ruta.</p>
                <p><strong>Acciones inmediatas (0–24 h):</strong></p>
                <ul>
                    <li>Priorizar la seguridad física del empleado (asegurar que se encuentre a salvo y llamar a emergencias 112 si hay lesiones).</li>
                    <li>Bloquear en remoto el iPad corporativo del <em>shopper</em> mediante la consola MDM.</li>
                    <li>Realizar la denuncia formal ante la Policía Nacional / Mossos d'Esquadra, aportando el inventario exacto y números de serie de las piezas de lujo sustraídas.</li>
                    <li>Informar a las boutiques y marcas socias de las piezas afectadas para el cese del flujo de consignación de esos artículos.</li>
                </ul>
                <p><strong>Acciones a corto plazo (1–7 días):</strong></p>
                <ul>
                    <li>Activar el reclamo formal con la aseguradora aportando la denuncia policial para tramitar la cobertura de pérdida de mercancías.</li>
                    <li>Analizar forensemente la ruta GPS de la furgoneta para identificar patrones de seguimiento de bandas organizadas.</li>
                    <li>Gestionar la reposición controlada de artículos con la marca socia para mitigar el impacto con el cliente afectado.</li>
                </ul>
                <p><strong>Escalación:</strong> Notificar inmediatamente al Director del Proyecto y al Patrocinador en un plazo máximo de 1 hora desde el reporte inicial.</p>
            </div>

            <div class="box-incident">
                <h4>Para riesgo: SEG-04 (Fuga de información por empleados - Filtración a prensa)</h4>
                <p><strong>Trigger / Condición de activación:</strong> Publicación de datos de visitas o preferencias de un cliente VIP en medios/redes sociales, o alerta automática en el CRM de descargas masivas no autorizadas.</p>
                <p><strong>Acciones inmediatas (0–24 h):</strong></p>
                <ul>
                    <li>Revocar de inmediato todos los accesos al CRM y servidores de la cuenta de usuario que disparó la alerta o que estuvo asignada a ese cliente.</li>
                    <li>Extraer los logs de acceso de la base de datos para identificar el origen IP, marcas de tiempo y el volumen exacto de información comprometida.</li>
                    <li>Enviar una comunicación formal de advertencia legal (<em>Cease & Desist</em>) al medio que ha publicado o tiene la intención de publicar la información.</li>
                </ul>
                <p><strong>Acciones a corto plazo (1–7 días):</strong></p>
                <ul>
                    <li>Si se constata que es una brecha de datos personales del RGPD, reportar formalmente la brecha a la Agencia Española de Protección de Datos (AEPD) en un plazo menor a 72 horas.</li>
                    <li>Contactar directamente y de manera controlada al cliente VIP afectado para explicarle de forma transparente lo ocurrido, las acciones de mitigación adoptadas y la estrategia legal en marcha.</li>
                    <li>Interponer querella judicial contra el empleado/ex-empleado responsable de la filtración aplicando las cláusulas del NDA.</li>
                </ul>
                <p><strong>Escalación:</strong> Notificar de forma inmediata al Director del Proyecto, al Asesor Legal/DPO y al Patrocinador en un plazo máximo de 2 horas.</p>
            </div>
        </section>

        <!-- 6. Dependencias con Otras Categorías -->
        <section>
            <h2>6. Dependencias con Otras Categorías</h2>
            <table>
                <thead>
                    <tr>
                        <th>Riesgo ID</th>
                        <th>Categoría Relacionada</th>
                        <th>Tipo de Dependencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bold-text">SEG-01</td>
                        <td>Operativa / Consignación</td>
                        <td><strong>Efecto:</strong> El robo de mercancía daña los acuerdos de confianza firmados con marcas socias de lujo y paraliza la capacidad operativa del servicio de visitas.</td>
                    </tr>
                    <tr>
                        <td class="bold-text">SEG-02</td>
                        <td>Plataforma / Tecnología</td>
                        <td><strong>Causa:</strong> Un fallo en el despliegue de ciberseguridad o API del CRM permite la extracción y posterior filtración de datos sensibles de los clientes.</td>
                    </tr>
                    <tr>
                        <td class="bold-text">SEG-04</td>
                        <td>Shoppers / Personal</td>
                        <td><strong>Causa:</strong> Un proceso deficiente de selección (<em>vetting</em>) durante la contratación facilita que se incorporen empleados con intenciones maliciosas.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- 7. Acciones Pendientes -->
        <section>
            <h2>7. Acciones Pendientes</h2>
            <div class="checklist-item">
                <input type="checkbox" class="checklist-checkbox" id="task1">
                <label for="task1">
                    <strong>Implementar la auditoría de logs en tiempo real</strong> y bloqueo automático por descargas masivas en el CRM de la app — <em>CTO / Tech Lead</em> — <span class="highlight-gold">Fecha límite: Mes 8 (Antes del Soft Launch)</span>
                </label>
            </div>
            <div class="checklist-item">
                <input type="checkbox" class="checklist-checkbox" id="task2">
                <label for="task2">
                    <strong>Confeccionar los NDAs con penalizaciones de alta cuantía</strong> y cláusula penal de resarcimiento reputacional — <em>Legal / DPO</em> — <span class="highlight-gold">Fecha límite: Mes 6 (Previo al inicio del reclutamiento)</span>
                </label>
            </div>
            <div class="checklist-item">
                <input type="checkbox" class="checklist-checkbox" id="task3">
                <label for="task3">
                    <strong>Cerrar la contratación formal y firma de pólizas de seguro</strong> para mercancía en tránsito y ciberriesgo — <em>Director del Proyecto</em> — <span class="highlight-gold">Fecha límite: Mes 7</span>
                </label>
            </div>
        </section>

        <footer>
            <span><strong>Elaborado por:</strong> Dirección del Proyecto / Especialista de Seguridad</span>
            <span>Versión 1.0 — Mayo 2026</span>
        </footer>
    </div>

    <script>
        function copyEntireHTML() {
            // Clonamos el documento para no alterar el botón interactivo del DOM activo
            const docClone = document.documentElement.cloneNode(true);
            
            // Eliminamos la barra de utilidad de copiado en el código resultante para que el usuario obtenga el HTML limpio
            const utilBar = docClone.querySelector('.utility-bar');
            if (utilBar) {
                utilBar.remove();
            }
            
            // Eliminamos también la etiqueta del script del clon
            const scriptTag = docClone.querySelector('script');
            if (scriptTag) {
                scriptTag.remove();
            }

            const cleanHTML = "<!DOCTYPE html>\n" + docClone.outerHTML;

            // Copiamos al portapapeles
            navigator.clipboard.writeText(cleanHTML).then(function() {
                const btn = document.getElementById('copyBtn');
                btn.textContent = '¡Copiado con éxito!';
                btn.style.backgroundColor = '#2ecc71';
                btn.style.color = '#ffffff';
                setTimeout(function() {
                    btn.textContent = 'Copiar Código HTML';
                    btn.style.backgroundColor = '#d4af37';
                    btn.style.color = '#0a0e27';
                }, 2500);
            }).catch(function(err) {
                console.error('Error al intentar copiar el código: ', err);
            });
        }
    </script>
</body>
</html>
