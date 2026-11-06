# VecinHub

**Plataforma web para la gestión cotidiana de comunidades de vecinos autogestionadas**

## Índice

- [Descripción](#descripción)
- [Alcance del proyecto](#alcance-del-proyecto)
- [Tecnologías](#tecnologías)
- [Documentación de la propuesta](#documentación-de-la-propuesta)
- [Equipo y planificación](#equipo-y-planificación)
- [Consulta del repositorio](#consulta-del-repositorio)

## Descripción

VecinHub es una propuesta de aplicación web *mobile-first* dirigida a comunidades de vecinos autogestionadas de entre 6 y 40 viviendas. Surge de la necesidad de organizar los avisos y las incidencias cuando la información se dispersa entre grupos de mensajería, conversaciones y carteles. Las conversaciones exploratorias mantenidas con personas del entorno del equipo también señalaron que algunos residentes no pertenecen al grupo de la comunidad o prefieren no compartir su número de teléfono.

La aplicación reúne en un mismo espacio las incidencias, los avisos oficiales y las consultas vecinales. El presidente puede crear la comunidad e invitar a los residentes mediante un enlace o código QR, sin depender de un módulo contable. El desarrollo se plantea con el stack MERN: MongoDB, Express, React y Node.js.

## Alcance del proyecto

El producto mínimo viable (MVP) comprende:

- **Comunidad y acceso:** registro, configuración de viviendas e invitación mediante enlace o QR; el presidente valida la incorporación de cada residente.
- **Incidencias:** creación con fotografía opcional, seguimiento por estados y mensajes privados entre el residente que la comunica y el presidente.
- **Avisos:** tablón de lectura para los miembros, con publicaciones realizadas por el presidente.
- **Consultas:** propuestas orientativas con un máximo de una respuesta por vivienda validada y resultados agregados tras el cierre.

Las consultas no sustituyen los acuerdos formales de la comunidad. La separación entre participación y respuestas reduce la vinculación directa del voto, pero no garantiza el anonimato absoluto. El MVP excluye contabilidad, pagos, aplicaciones móviles nativas y voto ponderado. El detalle de prioridades y exclusiones se encuentra en [objetivos y alcance](docs/objetivos-alcance.md).

## Tecnologías

| Capa | Tecnología prevista | Función |
|---|---|---|
| Interfaz | React y Tailwind CSS | Componentes y diseño adaptable a dispositivos móviles. |
| Servidor | Node.js y Express | API REST, autenticación y control de acceso. |
| Datos | MongoDB y Mongoose | Almacenamiento y modelado de los datos de la aplicación. |
| Servicios | Vercel, Render, MongoDB Atlas y Cloudinary | Despliegue previsto, base de datos y almacenamiento de imágenes. |

Las versiones de referencia, los límites de los servicios y las decisiones técnicas se detallan en [recursos](docs/recursos.md) y [viabilidad técnica](docs/viabilidad-tecnica.md).

## Documentación de la propuesta

| Documento | Criterio | Contenido |
|---|---|---|
| [Problema y propuesta de valor](docs/problema.md) | 2a | Necesidad identificada, usuarios, investigación exploratoria y análisis de alternativas. |
| [Viabilidad técnica](docs/viabilidad-tecnica.md) | 2b | Requisitos priorizados, arquitectura, modelo de datos, capacidades y riesgos. |
| [Objetivos y alcance](docs/objetivos-alcance.md) | 2d | Objetivos SMART, MVP, exclusiones y criterios de éxito. |
| [Recursos y organización](docs/recursos.md) | 2e | Responsabilidades, calendario, herramientas y servicios. |

## Equipo y planificación

| Integrante | Responsabilidades principales |
|---|---|
| **Rocío Luque Montes** | Diseño de interfaz y experiencia de usuario, frontend y pruebas de interfaz. |
| **Pablo Sanz Aznar** | Backend, base de datos, integraciones y despliegue. |

Ambos integrantes colaboran en la integración, las pruebas, la revisión de cambios y la documentación. El equipo de dos personas cuenta con autorización excepcional. La planificación comprende seis sprints semanales entre el 9 de noviembre y el 18 de diciembre de 2026, con 72 horas-persona comprometidas y una revisión cada viernes.

## Consulta del repositorio

Los documentos pueden abrirse directamente desde la tabla anterior en GitHub. Para consultarlos en local, clona el repositorio con su URL desde el botón **Code** de GitHub y abre la carpeta en un editor compatible con Markdown, como VS Code.

La carpeta `docs/` contiene la propuesta. El repositorio se encuentra en fase de planificación y todavía no incluye una aplicación ejecutable; el calendario de desarrollo y el flujo de trabajo previsto están descritos en [recursos y organización](docs/recursos.md).
