# Problema y propuesta de valor

## Índice

- [Selección de la propuesta](#selección-de-la-propuesta)
- [1. Problema identificado](#1-problema-identificado)
- [2. Usuarios objetivo](#2-usuarios-objetivo)
- [3. Investigación exploratoria](#3-investigación-exploratoria)
- [4. Análisis de alternativas](#4-análisis-de-alternativas)
- [5. Propuesta de valor](#5-propuesta-de-valor)

## Selección de la propuesta

Para comparar alternativas se consideran tres propuestas de alcance distinto:

| Idea | Responsable propuesto | Valoración |
|---|---|---|
| Préstamo y alquiler de material deportivo entre vecinos | Rocío | Implicaría resolver las condiciones de alquiler, fianzas y posibles daños. |
| Reservas y gestión de pistas comunitarias de pádel | Pablo | Se orienta a comunidades con pistas y cubre un conjunto más reducido de necesidades. |
| Moravía (antes VecinHub) | Equipo | Reúne incidencias y comunicación comunitaria, encaja en MERN y permite priorizar un MVP para seis sprints. |

La comparación recoge las propuestas facilitadas para el documento. La fecha y el desarrollo de la sesión de selección no están documentados.

## 1. Problema identificado

En comunidades pequeñas o medianas, parte de la coordinación diaria recae en el presidente y los residentes. Una avería puede comunicarse por teléfono o por un grupo de mensajería, mientras que los avisos se reparten entre el tablón físico, mensajes y reuniones. Esto dificulta recuperar la información y saber qué ha ocurrido desde que se comunicó una incidencia.

Planteamos como hipótesis posibles dificultades para recibir y localizar avisos, acceder al canal comunitario y mantener la privacidad del número de teléfono. El alcance y la frecuencia de estas situaciones pueden variar entre comunidades. La aplicación no busca reemplazar la deliberación presencial ni la gestión contable.

## 2. Usuarios objetivo

Los siguientes perfiles son **arquetipos de diseño**, no personas entrevistadas. El público inicial son comunidades de unas 6 a 40 viviendas, autogestionadas.

### Carmen, presidenta de una comunidad de 20 viviendas

- **Perfil:** trabaja y coordina el edificio durante su tiempo libre; utiliza el móvil a diario.
- **Necesidades:** centralizar incidencias, comunicar avances y publicar avisos desde una interfaz sencilla.
- **Frustraciones:** localizar mensajes antiguos y responder repetidamente a las mismas dudas.
- **Objetivos:** conocer los asuntos abiertos y mantener informados a los residentes.
- **Casos de uso:** crear la comunidad, validar incorporaciones, actualizar incidencias y publicar avisos y consultas.

### Javier, inquilino y residente

- **Perfil:** consulta el móvil principalmente fuera de su jornada laboral y participa en los asuntos comunes de su edificio.
- **Necesidades:** comunicar una avería y comprobar su evolución desde una pantalla pequeña.
- **Frustraciones:** desconocer a quién avisar y perder información entre mensajes.
- **Objetivos:** notificar el problema con facilidad y recibir una respuesta del presidente.
- **Casos de uso:** acceder por invitación, seleccionar vivienda, crear una incidencia, conversar en privado y responder consultas.

## 3. Investigación exploratoria

Mantuvimos conversaciones informales con personas de nuestro entorno sobre la comunicación en sus comunidades. No recogimos aquí las fechas, las preguntas ni el número de participantes, así que tenemos que completar esos datos y concretar qué respuestas recordamos antes de sacar conclusiones.

Creemos que en algunas comunidades puede resultar difícil localizar avisos o conocer el estado de una incidencia, y que algunas personas podrían preferir no compartir su teléfono. Por eso pensamos que un listado de incidencias con estados podría facilitar el seguimiento. Todavía tenemos que comprobar estas ideas. Los perfiles anteriores son arquetipos de diseño.

### Validación futura propuesta

- **Objetivo:** conocer cómo comunicamos y seguimos incidencias, y observar si entendemos el recorrido propuesto.
- **Perfil:** invitar, si disponemos de tiempo, a personas con experiencia como residentes o responsables de comunidades; anotar cuántas participan y cómo las seleccionamos.
- **Preguntas neutrales:** «¿Cómo comunicáis una incidencia?», «¿Cómo consultáis su evolución?», «¿Qué dificultades encontráis, si alguna?». Pedir un ejemplo reciente sin dirigir la respuesta.
- **Registro:** solicitar consentimiento y anotar respuestas sin nombres ni datos de la finca; guardar fecha, perfil general y preguntas. No publicar información identificable.
- **Interpretación y límites:** resumir coincidencias y diferencias sin extrapolar porcentajes de una muestra pequeña o de conveniencia. Separar citas autorizadas, observaciones e interpretaciones; documentar también respuestas contrarias. No contamos aún con resultados.

## 4. Análisis de alternativas

Comparación basada en información pública de los proveedores consultada el 6 de noviembre de 2026. Las limitaciones son de encaje con esta propuesta y no equivalen a pruebas independientes de calidad o precio.

| Solución | Fortalezas | Debilidades o carencias para el público objetivo | Oportunidad para Moravía |
|---|---|---|---|
| [TucomunidApp](https://tucomunidapp.com/) | Incidencias con seguimiento, votación, reservas y recibos. | Se conecta con el despacho del administrador y requiere invitación. | Permitir que el presidente cree la comunidad sin integración con un despacho. |
| [Plusvecinos PropApp](https://ayuda.plusvecinos.com/portal/es/kb/articles/men%C3%BA-inicio-plusvecinos-propapp) | Permite invitar vecinos, gestionar avisos, incidencias y encuestas; sus [encuestas](https://ayuda.plusvecinos.com/portal/es/kb/articles/encuestas) se describen como anónimas y no vinculantes. | Cubre necesidades muy similares, además de funciones adicionales. | Centrarse en el circuito básico móvil; la ventaja de sencillez requiere validación. |
| [Fynkus](https://academy.fynkus.com/docs/es) | Documenta incidencias, propietarios, juntas, cuotas y contabilidad en una herramienta orientada a administradores. | Está orientado a administradores y cubre una gestión amplia. | Excluir finanzas y concentrarse en las tareas del presidente y los residentes. |

Los grupos de mensajería también son una alternativa habitual: facilitan el intercambio inmediato, pero no proporcionan por sí solos un flujo de estados de incidencias ni un tablón separado de las conversaciones.

Para el criterio 1a debemos completar la [comparación de al menos cinco competidores](analisis-competencia.md). Aquí conservamos las tres alternativas estudiadas en la propuesta inicial.

## 5. Propuesta de valor

Queremos ofrecer un espacio móvil para consultar y seguir incidencias sin módulos contables. El diseño inicial también incluía invitaciones, mensajes, avisos y consultas; por ahora proponemos dejarlos para más adelante o como opciones secundarias. Tendremos que comprobar si la aplicación resulta útil y fácil de usar.
