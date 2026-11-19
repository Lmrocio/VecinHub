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

**Propuesta de revisión del 18 de noviembre de 2026:** tenemos que hablar estos cambios entre nosotros y consultarlos con el profesorado. Los objetivos originales trataban 1) el alta con QR y viviendas; 2) las incidencias, la mensajería y la latencia; 3) el voto único; y 4) la usabilidad y el despliegue. Proponemos adaptar los objetivos 1, 2 y 4, y dejar el 3 para más adelante junto con las votaciones. También dejamos fuera la meta de latencia porque medirla requeriría demasiado trabajo para este prototipo.

| Objetivo revisado y trazabilidad | Fecha prevista | Comprobación y aceptación | Dependencias |
|---|---|---|---|
| Preparar cliente, API y datos ficticios (original 1) | 27 noviembre | Arrancar ambos entornos y preparar al menos dos comunidades con cuentas y recursos separados | Revisar ramas de backend y acordar datos |
| Acceder y restringir recursos por rol y comunidad (original 1) | 4 diciembre | Registrar pruebas de acceso válido, credenciales erróneas y acceso cruzado rechazado | Datos y sesión segura |
| Crear y consultar incidencias y cambiar su estado según rol (original 2) | 11 diciembre | Demostrar alta y consulta; comprobar rechazo de cambios sin permiso | Sesión, pertenencia y modelos |
| Integrar, probar y publicar el prototipo (original 4) | 18 diciembre | Registrar resultados y defectos; comprobar la URL pública, CI/CD e instrucciones de instalación con datos ficticios | Recorrido completo, servicios y despliegue disponibles |

Son metas, no resultados. El enunciado exige despliegue público y CI/CD; prepararemos una demostración local por si surgen problemas, pero debemos consultar con el profesorado si no llegamos a publicar. Las pruebas con residentes dependen de la capacidad disponible.

## MVP: qué se incluye

El MVP original incluía registro, creación de comunidades y viviendas, invitaciones con QR y validación, incidencias con fotos y mensajes privados, avisos y consultas con voto por vivienda. Tras el retraso y la estimación, proponemos un recorrido más reducido:

- Cliente y servidor mínimos, inicio y cierre de sesión y control de rol y comunidad en servidor.
- Al menos dos comunidades ficticias, viviendas, cuentas y recursos separados; sin permitir autoasignación de roles ni acceso a otra comunidad.
- Alta, listado y consulta de incidencias; cambio de estado por presidencia.
- Validación de entradas, hash de contraseñas, protección de sesión, pruebas básicas y despliegue público previsto con datos ficticios.

El tablón de avisos queda como opción secundaria sin horas incluidas. Proponemos posponer registro público, creación de comunidades desde la interfaz, invitaciones y QR, validación de residentes, fotos, mensajería, consultas, votaciones y notificaciones. Cada módulo añade interfaz, permisos, integración y pruebas; la incorporación pública requiere además un mecanismo seguro de vinculación. Debemos confirmar con el profesorado si el alcance reducido cumple el enunciado. Conservamos el diseño anterior como referencia en [viabilidad técnica](viabilidad-tecnica.md).

## Fuera de alcance y ampliaciones

También aplazamos contabilidad, pagos, voto ponderado, reservas, técnicos externos, múltiples comunidades por usuario y aplicaciones nativas. El presupuesto revisado supera las 72 horas incluso antes de contabilizar trabajo previo: consultar [estimación](recursos.md#2-estimación-y-calendario). La reducción propuesta aún requiere ajuste y confirmación.

## Criterios globales de éxito

Para dar por terminado el recorrido, comprobaremos los permisos, registraremos los resultados y defectos y prepararemos una demostración que podamos repetir. Todavía tenemos que acordar el alcance y realizar esas pruebas.
