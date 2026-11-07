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
| VecinHub | Equipo | Reúne incidencias y comunicación comunitaria, encaja en MERN y permite priorizar un MVP para seis sprints. |

La comparación recoge las propuestas facilitadas para el documento. La fecha y el desarrollo de la sesión de selección no están documentados.

## 1. Problema identificado

En comunidades pequeñas o medianas, parte de la coordinación diaria recae en el presidente y los residentes. Una avería puede comunicarse por teléfono o por un grupo de mensajería, mientras que los avisos se reparten entre el tablón físico, mensajes y reuniones. Esto dificulta recuperar la información y saber qué ha ocurrido desde que se comunicó una incidencia.

Las conversaciones exploratorias realizadas por el equipo señalan dificultades para recibir y localizar avisos, acceder al canal comunitario y mantener la privacidad del número de teléfono. El alcance y la frecuencia de estas situaciones pueden variar entre comunidades. La aplicación no busca reemplazar la deliberación presencial ni la gestión contable.

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

Mantuvimos conversaciones informales con personas de nuestro entorno sobre la comunicación en sus comunidades de vecinos y la utilidad de una aplicación como VecinHub. Las aportaciones se recogieron de manera cualitativa, sin un cuestionario estructurado ni un recuento sistemático de participantes o respuestas. Por ello, los siguientes hallazgos resumen temas mencionados y no permiten calcular porcentajes ni generalizar los resultados a todas las comunidades.

Las personas consultadas señalaron estas dificultades:

- **Acceso desigual a la información:** no todos los vecinos pertenecen al grupo de WhatsApp de su comunidad y, por tanto, pueden no recibir los avisos compartidos en él.
- **Avisos difíciles de encontrar:** los mensajes importantes pueden quedar mezclados con conversaciones y contenidos que no afectan a la gestión de la finca.
- **Privacidad del teléfono:** algunas personas prefieren no compartir su número con el resto de los integrantes de un grupo vecinal.
- **Limitaciones del tablón físico:** los avisos pegados en papel no siempre resultan visibles para todos los residentes.

También se valoró positivamente disponer de una aplicación que facilitara el acceso a la información comunitaria. A partir de estas aportaciones, VecinHub plantea un tablón oficial consultable, separado de las conversaciones, y el acceso de los residentes mediante invitación sin exigir que compartan su número de teléfono con los demás vecinos. El envío de notificaciones por correo figura como mejora posterior al núcleo del MVP; la recepción efectiva de avisos dependerá de las funciones finalmente implementadas.

Estas conversaciones aportan orientación inicial para el diseño. Una prueba de uso posterior permitirá observar si los residentes encuentran los avisos y completan las tareas principales con facilidad.
## 4. Análisis de alternativas

Comparación basada en información pública de los proveedores consultada el 6 de noviembre de 2026. Las limitaciones son de encaje con esta propuesta y no equivalen a pruebas independientes de calidad o precio.

| Solución | Fortalezas | Debilidades o carencias para el público objetivo | Oportunidad para VecinHub |
|---|---|---|---|
| [TucomunidApp](https://tucomunidapp.com/) | Incidencias con seguimiento, votación, reservas y recibos. | Se conecta con el despacho del administrador y requiere invitación. | Permitir que el presidente cree la comunidad sin integración con un despacho. |
| [Plusvecinos PropApp](https://ayuda.plusvecinos.com/portal/es/kb/articles/men%C3%BA-inicio-plusvecinos-propapp) | Permite invitar vecinos, gestionar avisos, incidencias y encuestas; sus [encuestas](https://ayuda.plusvecinos.com/portal/es/kb/articles/encuestas) se describen como anónimas y no vinculantes. | Cubre necesidades muy similares, además de funciones adicionales. | Centrarse en el circuito básico móvil; la ventaja de sencillez requiere validación. |
| [Fynkus](https://academy.fynkus.com/docs/es) | Documenta incidencias, propietarios, juntas, cuotas y contabilidad en una herramienta orientada a administradores. | Está orientado a administradores y cubre una gestión amplia. | Excluir finanzas y concentrarse en las tareas del presidente y los residentes. |

Los grupos de mensajería también son una alternativa habitual: facilitan el intercambio inmediato, pero no proporcionan por sí solos un flujo de estados de incidencias ni un tablón separado de las conversaciones.

## 5. Propuesta de valor

VecinHub propone un espacio móvil, creado por el presidente, que agrupa invitaciones por QR físico en el portal, seguimiento de incidencias con chat privado, tablón oficial unidireccional y consultas orientativas con una respuesta por vivienda, sin módulos contables. Su diferenciación es la combinación y el alcance reducido para comunidades pequeñas, no la afirmación de que ninguna otra aplicación ofrezca estas funciones. La facilidad de incorporación y el ahorro de tiempo deberán comprobarse en pruebas con residentes.
