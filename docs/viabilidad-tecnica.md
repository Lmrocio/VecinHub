# Viabilidad técnica

## Índice

- [1. Requisitos funcionales y prioridades](#1-requisitos-funcionales-y-prioridades)
- [2. Arquitectura y decisiones técnicas](#2-arquitectura-y-decisiones-técnicas)
- [3. Modelo preliminar de MongoDB](#3-modelo-preliminar-de-mongodb)
- [4. Capacidades y viabilidad](#4-capacidades-y-viabilidad)
- [5. Riesgos y mitigación](#5-riesgos-y-mitigación)

## 1. Requisitos funcionales y prioridades

El MVP comprende todos los requisitos **Must**. Los Should se incorporarán solo después de verificar el recorrido esencial; no son condiciones de aceptación del MVP.

| ID | Prioridad | Requisito verificable |
|---|---|---|
| F1 | Must | Registrar y autenticar usuarios; el presidente crea una comunidad y sus viviendas. |
| F2 | Must | Generar enlace con token y QR; un residente se registra y solicita la vivienda elegida. El presidente valida la vinculación antes de habilitar la participación. |
| F3 | Must | El vecino crea una incidencia con título, descripción, categoría y foto opcional; consulta sus incidencias. |
| F4 | Must | El presidente consulta incidencias de su comunidad y cambia su estado entre pendiente, en trámite y resuelta. |
| F5 | Must | Autor y presidente intercambian mensajes privados en cada incidencia. |
| F6 | Must | El presidente publica avisos; los miembros de la comunidad los consultan sin comentarios públicos. |
| F7 | Must | El presidente crea y cierra consultas con opciones; una vivienda validada emite como máximo una respuesta y consulta el resultado agregado tras el cierre. |
| F8 | Must | El servidor comprueba autenticación, rol, pertenencia y acceso al recurso en cada operación; la interfaz se adapta al móvil. |
| F9 | Should | Enviar correo por aviso urgente o incidencia resuelta. |
| F10 | Should | Filtrar incidencias por estado y categoría; descargar el QR para imprimirlo. |
| F11 | Could | Actualizar el estado de la vista mediante sondeo periódico; indicadores de participación y accesibilidad adicional. |
| F12 | Won't | Contabilidad, pagos, reservas, técnicos externos, varias comunidades por usuario o voto ponderado. |

Una invitación demuestra posesión del enlace, no residencia: la validación del presidente reduce altas indebidas, pero no constituye una verificación de identidad. Puede haber varios residentes por vivienda; el primer voto aceptado consume el derecho de esa vivienda. El presidente puede participar si tiene una vivienda validada. Los resultados se consultan al cerrar y las consultas son orientativas.

## 2. Arquitectura y decisiones técnicas

```mermaid
flowchart LR
  U[Presidente o residente] -->|HTTPS| R[React: interfaz móvil]
  R -->|HTTPS / JSON| E[Node.js + Express: API REST]
  E -->|Mongoose| M[(MongoDB Atlas)]
  E -->|Subida autenticada| C[Cloudinary: fotografías]
  E -.->|SMTP: mejora posterior| S[Proveedor de correo]
```

React permite una SPA basada en componentes y vistas reactivas adaptadas al móvil; React Router organiza pantallas; Tailwind CSS permite construir una interfaz adaptable. El estado local y Context cubren sesión y datos compartidos; `fetch` evita añadir un gestor de estado o cliente HTTP sin necesidad inicial. Node.js utiliza entrada y salida asíncrona no bloqueante; Express expone una API REST ligera, valida entradas y aplica autorización en servidor. JWT de corta duración en cookie `HttpOnly`, `Secure` y `SameSite`, junto con protección CSRF apropiada, limita la exposición de la sesión; las contraseñas se almacenan con hash y sal mediante bcrypt. Las claves y credenciales se guardan como variables de entorno, nunca en Git. El detalle de versiones y servicios figura en [recursos](recursos.md).

Los mensajes se recuperan al abrir o actualizar la incidencia; no se promete entrega en tiempo real. Las imágenes requieren validación de tipo y tamaño en servidor y acceso restringido mediante entrega autenticada o URLs firmadas de corta duración; una URL pública permanente no cumple la privacidad prevista. Si no se puede configurar esta protección, se desactiva la subida hasta resolverla. El servidor no conserva archivos en disco como almacenamiento permanente.

## 3. Modelo preliminar de MongoDB

```mermaid
erDiagram
    COMMUNITY ||--o{ DWELLING : contiene
    COMMUNITY ||--o{ USER : agrupa
    COMMUNITY ||--o{ INVITATION : emite
    COMMUNITY ||--o{ TICKET : registra
    COMMUNITY ||--o{ NOTICE : publica
    COMMUNITY ||--o{ POLL : organiza
    DWELLING ||--o{ USER : vincula
    USER ||--o{ TICKET : crea
    TICKET ||--o{ MESSAGE : incluye
    POLL ||--o{ PARTICIPATION : controla
    POLL ||--o{ BALLOT : recoge
```

| Colección | Campos principales y tipos | Reglas |
|---|---|---|
| `communities` | `_id: ObjectId`, `name: String`, `address: String`, `presidentId: ObjectId`, `createdAt: Date` | Presidente referencia a usuario de la comunidad. |
| `dwellings` | `_id`, `communityId: ObjectId`, `label: String` | Índice único `(communityId, label)`. |
| `users` | `_id`, `communityId`, `dwellingId: ObjectId`, `name`, `email`, `passwordHash`, `role`, `membershipStatus: String` | Correo único normalizado; rol presidente/vecino; alta pendiente o validada. |
| `invitations` | `_id`, `communityId`, `tokenHash: String`, `expiresAt: Date`, `revokedAt: Date/null` | Token aleatorio, hash almacenado y caducidad comprobada en cada uso; TTL solo para limpieza. |
| `tickets` | `_id`, `communityId`, `authorId: ObjectId`, `title`, `description`, `category`, `status: String`, `imageId: String/null`, `createdAt: Date`, `messages: Array` | Mensaje embebido: `authorId: ObjectId`, `body: String`, `createdAt: Date`; limitar tamaño y paginar o extraer a colección si crece. Índice por comunidad y estado. |
| `notices` | `_id`, `communityId`, `authorId: ObjectId`, `title`, `body: String`, `createdAt: Date` | Solo publica el presidente; lectura limitada a miembros. |
| `polls` | `_id`, `communityId`, `authorId: ObjectId`, `question: String`, `options: Array<{id: String, label: String}>`, `closesAt: Date`, `status: String` | Opciones inmutables después del primer voto; cierre efectivo comprobado en servidor. |
| `participations` | `_id`, `pollId`, `dwellingId: ObjectId` | Índice único `(pollId, dwellingId)` impide duplicados. No contiene opción. |
| `ballots` | `_id`, `pollId: ObjectId`, `optionId: String` | No contiene usuario ni vivienda; se cuenta por opción tras cerrar. |

Los documentos agrupan datos que se consultan juntos, como mensajes acotados de una incidencia; las entidades compartidas se referencian para evitar duplicación. El voto y la participación se insertan con `session.withTransaction` en una transacción MongoDB: si falla una operación, se revierten ambas; el índice único resuelve solicitudes simultáneas. Se comprueban pertenencia, vivienda validada, estado y plazo dentro del flujo de votación. Se prueban concurrencia y reversión con un despliegue compatible con transacciones.

**Límite de privacidad:** separar colecciones evita un vínculo directo, pero no garantiza anonimato frente a administradores, registros, marcas temporales o correlación de operaciones; en grupos pequeños también puede deducirse una respuesta del recuento. No registrar contenido ni marcas temporales innecesarias, mostrar resultados solo al cierre y comunicar esta limitación. No afirmar anonimato absoluto. Para garantías más fuertes se necesitaría un diseño y auditoría específicos fuera de este MVP.

### Justificación del modelo NoSQL frente a relacional (SQL)

MongoDB permite guardar los mensajes acotados dentro del ticket y recuperar la incidencia completa en una lectura sin unir tablas. Las opciones de una consulta se modelan como un array, sin una tabla intermedia, y los documentos BSON se corresponden de forma natural con los objetos intercambiados en JSON por Express y React. La fragmentación permite escalar horizontalmente en otros niveles de servicio, aunque Atlas Free no la admite.

Estas ventajas dependen del patrón de acceso: SQL también puede modelar mensajes y opciones con garantías sólidas, y un JOIN no es necesariamente costoso. La velocidad debe medirse, no suponerse. El límite de tamaño de los documentos exige acotar los mensajes o extraerlos a una colección cuando crezcan.
## 4. Capacidades y viabilidad

Rocío tiene un nivel general de desarrollo de 3/5 y de 4,5/5 en diseño, maquetación, UX y accesibilidad. Pablo tiene un nivel general de 2,5/5 y de 1,5/5 en diseño/CSS y despliegue. La escala es orientativa: 1 representa conocimientos iniciales y 5 dominio avanzado. Los niveles generales no equivalen a una valoración independiente de cada herramienta.

| Tecnología / área | Rocío (1–5) | Pablo (1–5) | Laguna y estrategia semanal |
|---|---:|---:|---|
| Diseño, maquetación, UX y accesibilidad | 4,5 | 2,5 | Rocío guía una revisión semanal de accesibilidad y diseño adaptable. |
| React y desarrollo frontend | 3 (general) | 2,5 (general) | Practicar componentes, formularios y rutas mediante una tarea conjunta por sprint. |
| Node, Express y seguridad | 3 (general) | 2,5 (general) | Revisar semanalmente una ruta y sus pruebas de autorización. |
| MongoDB y Mongoose | 3 (general) | 2,5 (general) | Prototipar índices y `withTransaction` y revisar los resultados durante el sprint de consultas. |
| Despliegue e imágenes | 3 (general) | 2,5 | Rocío apoya el despliegue; ambos prueban accesos privados de Cloudinary y repasan fallos en cada revisión. |
La planificación comprende seis sprints, 72 horas-persona comprometidas y defensa el 18 de diciembre de 2026. El equipo prioriza los requisitos Must; las ampliaciones se abordarán después del núcleo y los avances se revisarán semanalmente.
## 5. Riesgos y mitigación

| Riesgo | Probabilidad / impacto estimados | Mitigación y comprobación |
|---|---|---|
| Acceso a datos de otra comunidad o a mensajes privados | Media / alto | Comprobar comunidad y autorización en cada consulta; pruebas de acceso cruzado con ambos roles. |
| Duplicación de votos o escritura parcial | Media / alto | Índice único y transacción; pruebas concurrentes y de fallo intermedio. |
| Deducción del voto en grupos pequeños o por registros | Alta / alto | Agregar al cierre, minimizar registros y explicar límites; no prometer anonimato absoluto. |
| Enlace de invitación compartido fuera de la finca | Media / alto | Token revocable y caducable; presidente valida vínculo y puede revocarlo. |
| Imágenes privadas expuestas | Media / alto | Almacenamiento privado, validación y enlaces firmados; probar acceso sin autorización. |
| Desconocimiento de transacciones o despliegue | Media / medio | Prototipo técnico temprano y trabajo en pareja; revisar compatibilidad antes de desarrollar votaciones. |
| Plazo o carga del equipo insuficientes | Alta / alto | Medir horas y avance semanal; terminar Must primero y aplazar mejoras. |
| Límites o parada de servicios gratuitos | Media / medio | Vigilar almacenamiento y transferencia, generar alertas, limitar cargas y preparar demostración local con datos ficticios. |
