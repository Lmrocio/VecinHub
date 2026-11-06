# Objetivos y alcance

## Índice

- [Objetivo general](#objetivo-general)
- [Objetivos específicos SMART](#objetivos-específicos-smart)
- [MVP: qué se incluye](#mvp-qué-se-incluye)
- [Fuera de alcance y ampliaciones](#fuera-de-alcance-y-ampliaciones)
- [Criterios globales de éxito](#criterios-globales-de-éxito)

## Objetivo general

Desarrollar un prototipo web que facilite la comunicación y el seguimiento de asuntos cotidianos de una comunidad de vecinos pequeña o mediana.

## Objetivos específicos SMART

Se planifican seis sprints semanales desde el 9 de noviembre hasta la revisión final del **18 de diciembre de 2026**, con 72 horas-persona comprometidas. Los porcentajes siguientes son metas de aceptación del prototipo, no resultados conseguidos.

| Objetivo | Plazo previsto | Medición y meta |
|---|---|---|
| 1. Lograr que el 100 % de los casos de prueba de alta de finca, generación de token QR y vinculación de viviendas supere las validaciones de seguridad. | 20 de noviembre de 2026 | Completar 100 % de los casos de prueba de alta, caducidad, revocación y validación definidos por el equipo. |
| 2. Completar el ciclo de incidencias y la mensajería privada con una latencia de API inferior a 250 ms en el percentil 95. | 4 de diciembre de 2026 | Completar creación, tres estados y mensajes en ambos sentidos; superar las pruebas de permisos y obtener latencia de API inferior a 250 ms en el percentil 95 de 100 solicitudes de lectura autenticada en entorno de prueba estable, con datos de hasta 40 viviendas y sin arranque en frío. Registrar entorno y resultados. |
| 3. Conseguir que las consultas admitan como máximo una respuesta por vivienda y rechacen los intentos duplicados. | 11 de diciembre de 2026 | Completar el recorrido de publicación a cierre; rechazar todos los intentos duplicados y accesos entre comunidades en las pruebas definidas. |
| 4. Alcanzar una tasa de éxito superior al 80 % en las tareas de uso y desplegar el prototipo en Vercel y Render. | 18 de diciembre de 2026 | Desplegar en Vercel y Render y observar a al menos 4 personas del perfil objetivo realizando alta, incidencia y lectura de aviso. Registrar tareas, tiempos y dificultades; meta superior al 80 % de tareas completadas sin asistencia, calculada sobre el total de intentos. |

Las pruebas de usuarios están planificadas y requieren reclutar participantes; si no es posible, se registrará la limitación en lugar de atribuir resultados. Los criterios se comprobarán mediante una lista de casos, resultados y defectos, y una sesión de demostración con datos ficticios.

## MVP: qué se incluye

- Alta y acceso, comunidad y viviendas, enlace/QR de invitación con caducidad y validación del residente por el presidente.
- Incidencias con foto opcional, estados y conversación privada entre autor y presidente.
- Avisos publicados por el presidente y consultables por miembros.
- Consultas orientativas con opciones, cierre, recuento agregado y un voto por vivienda validada; sin garantía de anonimato absoluto.
- Autorización por rol y comunidad, diseño adaptable al móvil y pruebas de los recorridos esenciales.

El detalle y prioridades están en [viabilidad técnica](viabilidad-tecnica.md). Las fotografías requieren almacenamiento privado; el correo y la descarga del QR son mejoras posteriores al recorrido esencial.

## Fuera de alcance y ampliaciones

| Función excluida | Motivo y posible evolución |
|---|---|
| Contabilidad, recibos y pagos | Añaden complejidad y responsabilidad ajenas al problema operativo inicial; se valorarían en otra fase. |
| Acuerdos legalmente vinculantes y voto ponderado | Requieren reglas y garantías adicionales; las consultas actuales son informativas. |
| Asignación a técnicos, reservas de espacios y muro social | Amplían roles y flujos sin ser imprescindibles para seguir incidencias. |
| Varias comunidades por usuario | Complica permisos y navegación; puede revisarse tras validar una comunidad por usuario. |
| Aplicaciones nativas iOS y Android | La web adaptable cubre el acceso móvil sin mantener dos plataformas adicionales. |
| Chat general, notificaciones push y tiempo real | La conversación se limita a cada incidencia; las mejoras de inmediatez se valorarían después. |

## Criterios globales de éxito

El MVP se considerará aceptado cuando los requisitos Must y las comprobaciones de seguridad indicadas en la viabilidad pasen, los cuatro objetivos se midan y se documenten los fallos restantes. La prueba de uso aporta evidencia de facilidad de uso, no demuestra adopción real ni ahorro económico. La aceptación requiere documentar el despliegue y los resultados reales de las pruebas; las metas no son resultados alcanzados.
