# Recursos y organización

## Índice

- [1. Equipo y responsabilidades](#1-equipo-y-responsabilidades)
- [2. Estimación y calendario](#2-estimación-y-calendario)
- [3. Stack y herramientas propuestas](#3-stack-y-herramientas-propuestas)
- [4. Servicios externos y costes](#4-servicios-externos-y-costes)
- [5. Gestión y configuración prevista](#5-gestión-y-configuración-prevista)

## 1. Equipo y responsabilidades

Rocío se centrará principalmente en la interfaz, la experiencia de usuario y la accesibilidad; Pablo, en el servidor, los modelos y la API. Compartiremos la integración, las pruebas, la documentación y las revisiones. Rocío dispone de más tiempo y Pablo tiene más módulos, así que tendremos en cuenta esa diferencia al repartir el trabajo. No necesitamos hacer el mismo número de commits: tampoco reflejan por sí solos el tiempo ni todo lo que aporta cada uno.

Cada viernes decidiremos juntos quién hace qué y podremos cambiar el reparto según nuestra disponibilidad, lo que necesitemos aprender y las dependencias. Si nos falta tiempo para el backend, redistribuiremos tareas o reduciremos el alcance.

## 2. Estimación y calendario

**Propuesta actualizada el 19 de noviembre de 2026:** mantendremos los seis periodos y la entrega prevista para el 18 de diciembre. El presupuesto original es de 72 horas-persona, con 8 de reserva. Nos falta completar las horas dedicadas y la disponibilidad de cada uno; tenemos que acordar el alcance revisado y consultarlo con el profesorado.

Esta tabla recoge estimaciones para el trabajo restante desde el 19 de noviembre, no horas reales. Las áreas sirven de orientación: cada viernes decidiremos y podremos modificar el reparto. Hemos reservado tiempo para la revisión cruzada en P16. Prepararemos al menos dos comunidades ficticias, con viviendas, usuarios y recursos separados, para probar el aislamiento; no incluimos alta pública ni invitaciones en este recorrido. Antes de implementarlo acordaremos cómo vincular cuentas y viviendas sin permitir autoasignaciones de rol o comunidad. Consultaremos con el profesorado si este alcance reducido cumple los requisitos del proyecto.

| ID | Trabajo y resultado esperado | Área orientativa | h-persona | Dependencias | Aceptación prevista | Sprint | Estado |
|---|---|---|---:|---|---|---|---|
| P1 | Revisar alcance, capacidad y backlog | Ambos | 3 | Ninguna | Decisiones y pendientes visibles | 2 | Propuesta |
| P2 | Revisar ramas de backend y decidir integración | Ambos | 3 | P1 | PR #40 y #41 revisadas o bloqueos documentados | 2 | Propuesta |
| P3 | Preparar cliente React y navegación mínima | Frontend | 5 | P1, P20 | Cliente arranca y muestra vistas basadas en wireframes | 3 | Propuesta |
| P4 | Completar entorno API y conexión de prueba | Backend | 4 | P2 | API arranca y conecta con datos ficticios | 3 | Propuesta |
| P5 | Preparar datos y vínculos de prueba | Ambos | 3 | P2 | Dos comunidades ficticias con roles, viviendas y recursos separados, sin autoasignación | 3 | Propuesta |
| P6 | Revisar modelo de usuario y credenciales | Backend | 3 | P4, P5 | Contraseña con hash; entradas inválidas rechazadas | 4 | Propuesta |
| P7 | Implementar inicio/cierre de sesión seguro | Backend | 5 | P6 | Acceso válido y rechazo de credenciales inválidas | 4 | Propuesta |
| P8 | Comprobar rol y comunidad en servidor | Backend | 4 | P5, P7 | Accesos indebidos rechazados en pruebas | 4 | Propuesta |
| P9 | Crear formulario de acceso e integrar sesión | Frontend | 4 | P3, P7 | Inicio y cierre funcionan en cliente | 4 | Propuesta |
| P10 | Crear modelo y API de incidencias | Backend | 6 | P8 | Alta y consulta limitada por comunidad y rol | 5 | Propuesta |
| P11 | Permitir cambio de estado autorizado | Backend | 3 | P10 | Presidente cambia estado; vecino no autorizado recibe rechazo | 5 | Propuesta |
| P12 | Crear formulario, listado y detalle de incidencias | Frontend | 7 | P3, P9, P10, P20 | Recorrido móvil basado en los wireframes | 5 | Propuesta |
| P13 | Integrar y probar permisos, validaciones y recorrido | Ambos | 6 | P8–P12 | Casos positivos y negativos y pruebas visuales con Maestro registrados | 6 | Propuesta |
| P14 | Corregir defectos y revisar accesibilidad básica | Ambos | 4 | P13 | Defectos prioritarios resueltos o documentados | 6 | Propuesta |
| P15 | Preparar demostración y documentación de uso e instalación | Ambos | 3 | P13, P17 | Instrucciones reproducibles y URL pública; alternativa local preparada | 6 | Propuesta |
| P16 | Revisiones cruzadas de PR y coordinación | Ambos | 5 | Cada PR | Revisión, aprobación e integración por la otra persona | 2–6 | Propuesta |
| P17 | Configurar y comprobar despliegue público | Ambos | 6 | P4, P13, P18 | Cliente y API accesibles por HTTPS y recorrido funcional | 6 | Propuesta |
| P18 | Configurar CI/CD | Ambos | 4 | P3, P4 | Comprobaciones automáticas y despliegue automático verificables | 3 | Propuesta |
| P19 | Preparar documentación académica y Wiki | Ambos | 8 | P1; horas y costes reales conforme avancemos | Documentos, Wiki e informe de horas revisados para la entrega | 2–6 | Propuesta |
| P20 | Revisar navegación y wireframes | Frontend | 2 | Diseño inicial de Figma | Estructura revisada para las pantallas de P3 y P12 | 3 | Propuesta |
| **Total previsto restante** | | | **88** | | | | |

Estimamos **88 horas-persona restantes**, incluidas 20 horas nuevas para despliegue, CI/CD, documentación académica y revisión del diseño. Con las 8 horas de reserva, serían **96**, frente a las 72 originales, sin contar el tiempo ya invertido. Las 8 horas de P19 y las 6 de P13 son primeras aproximaciones y pueden resultar insuficientes para toda la documentación y las pruebas. Para ajustarnos sin quitar unilateralmente requisitos académicos, propondremos al profesorado mantener el recorrido de incidencias, el despliegue y la documentación obligatoria, aplazar las funciones secundarias y acordar más tiempo o una reducción explícita de entregables. Revisaremos las PR #40 y #41 antes de descontar trabajo de backend; la rama de autenticación incluye los commits de la rama de modelos. El diseño de Figma ya iniciado tampoco tiene horas reales registradas aquí. No podemos confirmar la viabilidad hasta conocer nuestras horas y disponibilidad.

| Sprint | Periodo | Objetivo candidato | Tareas | h estimadas* | Evidencia esperada |
|---|---|---|---|---:|---|
| 1 | 9–13 nov. | Base técnica original incumplida | Consultar [registro](seguimiento/sprint-01-2026-11-13.md) | No verificadas | Estado histórico |
| 2 | 16–20 nov. | Revisar alcance y rama backend | P1–P2 | 6 | Propuesta y revisión de rama |
| 3 | 23–27 nov. | Preparar cliente, API, diseño, datos y CI/CD | P3–P5, P18, P20 | 18 | Arranque, datos y flujo automático reproducibles |
| 4 | 30 nov.–4 dic. | Acceso y autorización básicos | P6–P9 | 16 | Casos de acceso y permisos |
| 5 | 7–11 dic. | Completar recorrido de incidencias | P10–P12 | 16 | Alta, consulta y cambio de estado |
| 6 | 14–18 dic. | Integrar, probar y publicar | P13–P15, P17 | 19 | Pruebas, URL pública e instrucciones |
| 2–6 | Transversal | Revisar cambios y completar documentación académica | P16, P19 | 13 | Revisiones, documentos e informe de horas |

*Estimaciones pendientes de confirmar; las 13 horas transversales no están repartidas por sprint. No incluimos avisos, registro público, QR, imágenes, chat ni votaciones. La demostración local es una alternativa ante problemas de despliegue, no sustituye el requisito público sin acordarlo con el profesorado. Conservamos los [seguimientos](seguimiento/README.md) para registrar resultados y horas reales.

### Ajustes pendientes en GitHub

Antes de actualizar el tablero, revisaremos juntos las issues existentes y su estado:

- Reutilizar [#39](https://github.com/Lmrocio/VecinHub/issues/39) y [#38](https://github.com/Lmrocio/VecinHub/issues/38) para documentación y seguimiento, tras revisar su contenido.
- Comparar [#6](https://github.com/Lmrocio/VecinHub/issues/6) con la rama de backend y dividir o completar lo que falte. Revisar [#5](https://github.com/Lmrocio/VecinHub/issues/5), [#7](https://github.com/Lmrocio/VecinHub/issues/7), [#16](https://github.com/Lmrocio/VecinHub/issues/16), [#17](https://github.com/Lmrocio/VecinHub/issues/17) y [#18](https://github.com/Lmrocio/VecinHub/issues/18) para centrarnos en el recorrido esencial, sin fotografías.
- Relacionar P20 con [#3](https://github.com/Lmrocio/VecinHub/issues/3), P17 con [#4](https://github.com/Lmrocio/VecinHub/issues/4), P18 con [#28](https://github.com/Lmrocio/VecinHub/issues/28) y P19 con [#8](https://github.com/Lmrocio/VecinHub/issues/8), [#9](https://github.com/Lmrocio/VecinHub/issues/9), [#15](https://github.com/Lmrocio/VecinHub/issues/15), [#19](https://github.com/Lmrocio/VecinHub/issues/19), [#20](https://github.com/Lmrocio/VecinHub/issues/20), [#25](https://github.com/Lmrocio/VecinHub/issues/25), [#33](https://github.com/Lmrocio/VecinHub/issues/33), [#34](https://github.com/Lmrocio/VecinHub/issues/34) y [#35](https://github.com/Lmrocio/VecinHub/issues/35). Revisaremos su alcance y dividiremos P19 al planificar cada semana.
- Valorar el aplazamiento de las partes de QR e incorporación pública de [#10](https://github.com/Lmrocio/VecinHub/issues/10) a [#12](https://github.com/Lmrocio/VecinHub/issues/12), mensajes [#21](https://github.com/Lmrocio/VecinHub/issues/21) y [#22](https://github.com/Lmrocio/VecinHub/issues/22), avisos [#23](https://github.com/Lmrocio/VecinHub/issues/23) y [#24](https://github.com/Lmrocio/VecinHub/issues/24), y consultas [#26](https://github.com/Lmrocio/VecinHub/issues/26) y [#27](https://github.com/Lmrocio/VecinHub/issues/27). Consultaremos los requisitos académicos antes de aplazar tareas de memoria y despliegue.
- Revisar duplicados, dependencias y prioridades. Decidiremos las asignaciones cada viernes.

## 3. Stack y herramientas propuestas

Las versiones son **referencias propuestas** para el proyecto; la rama de backend incluye sus propias dependencias, aún sin integrar en `develop`. Al iniciar el desarrollo se comprobará su compatibilidad, se fijarán versiones exactas en `package.json` y el archivo de bloqueo, y se actualizarán parches de seguridad. Node 24 es una [línea LTS](https://nodejs.org/en/about/previous-releases).

| Capa | Herramienta / versión de referencia | Uso y justificación |
|---|---|---|
| Entorno | Node.js 24 LTS, npm 11 | JavaScript en servidor y herramientas de construcción. |
| Interfaz | React 19, Vite 7, React Router 7 | Componentes, desarrollo y rutas de interfaz. |
| Estilos | Tailwind CSS 4 | Diseño adaptable a móvil con utilidades. |
| QR | qrcode.react 4 | Representación del enlace de invitación en pantalla. |
| API | Express 5, Mongoose 8 | Rutas HTTP y modelos/validación de MongoDB. |
| Acceso | jsonwebtoken 9, bcrypt 6, cookie-parser 1, express-rate-limit 8 | Sesiones, hash de contraseñas, cookies y limitación de intentos; añadir protección CSRF según la configuración definitiva. |
| Validación y ficheros | Zod 4, Multer 2, Cloudinary Node SDK 2 | Validar entradas y gestionar cargas privadas de imágenes. |
| Datos | MongoDB 8 / Atlas Free | Documentos, índices y transacciones en un conjunto de réplicas compatible. |
| Correo posterior al MVP | Nodemailer 7 | Transporte SMTP; requiere proveedor y credenciales, no envía correo por sí solo. |
| Pruebas | Vitest 3, React Testing Library 16, Supertest 7 | Pruebas de componentes y API; pruebas manuales móviles y de accesibilidad. |
| Calidad | ESLint 9, Prettier 3 | Detección de errores y formato común. |
| Trabajo | Git 2, GitHub, GitHub Projects, VS Code | Control de versiones, revisión, tablero y edición. |

Las herramientas de software libre no implican por sí mismas un coste de licencia para el prototipo; los servicios siguientes sí tienen cuotas y condiciones.

## 4. Servicios externos y costes

Consulta de condiciones: 6 de noviembre de 2026. Las cuotas pueden cambiar; comprobarlas antes de contratar o desplegar. El objetivo es 0 € durante pruebas dentro de planes gratuitos, sin considerar conexión, equipos, dominio o costes por consumo excedido. Las cuentas y su elegibilidad todavía no están confirmadas.

| Servicio | Uso y coste previsto | Limitaciones y plan de contingencia |
|---|---|---|
| [Vercel Hobby](https://vercel.com/docs/plans/hobby) | Frontend; plan gratuito para uso personal no comercial. | 100 GB de transferencia rápida y 100 horas de compilación según sus guías de uso; al superarlos puede tocar esperar hasta el siguiente periodo. Comprobar condiciones para el proyecto y usar demostración local si no encaja. |
| [Render Free](https://render.com/docs/free) | API; 750 horas gratuitas por espacio de trabajo y mes. | Se suspende tras 15 minutos sin tráfico y puede tardar aproximadamente un minuto en arrancar; disco efímero. El ancho de banda excedido puede facturarse: vigilar consumo y configuración de facturación. |
| [MongoDB Atlas Free](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/) | Base de datos; un clúster gratuito por proyecto, 0,5 GB. | Recursos y operaciones limitados; puede pausarse tras 30 días sin conexiones. Mantener datos de prueba exportables y revisar copias. |
| [Cloudinary Free](https://cloudinary.com/pricing) | Fotos privadas; 25 créditos mensuales compartidos entre recursos. | Un crédito equivale a 1.000 transformaciones, 1 GB de almacenamiento o 1 GB de transferencia de imágenes ([detalle](https://cloudinary.com/documentation/billing_and_plans)). Vigilar consumo, acceso autenticado y condiciones de entrega antes de usar datos reales; desactivar subida si no se garantiza privacidad. |
| [Resend Free](https://resend.com/pricing) + Nodemailer | Opción SMTP para correos posteriores al MVP; 3.000 correos/mes y 100/día gratuitos. | Requiere configurar y verificar remitente/dominio según proveedor; dominio propio puede tener coste. Si no está disponible, probar con transporte de desarrollo y dejar el envío desactivado. |

Se utilizarán datos ficticios en pruebas y demostraciones, sin subir secretos al repositorio. Cualquier uso con residentes reales requiere revisar las condiciones de los servicios y el tratamiento de datos antes de activarlo.

## 5. Gestión y configuración prevista

- **Git y GitHub:** repositorio público para la entrega; `main` contiene la versión de producción, `develop` integra trabajo y cada tarea sale de `feature/nombre`. Las ramas se integran mediante pull request revisada por otro miembro y pruebas satisfactorias. Mantener `.gitignore` y añadir un ejemplo de variables sin secretos antes de programar. Acordar la estructura definitiva; en la rama de backend ya existe `backend/`.
- **GitHub Projects:** usaremos el [tablero de la semana previa](https://github.com/users/Lmrocio/projects/10) y revisaremos que ambos podamos acceder y que sus campos y estados estén actualizados. Ya hemos protegido `main` y `develop`; nos falta revisar las reglas concretas.
- **Toggl Track:** revisaremos el acceso, la configuración y las horas registradas.
- **Comunicación:** canal de grupo propuesto en Discord o Telegram y reunión semanal breve; registrar decisiones, responsables y fecha en una incidencia del proyecto. El equipo elegirá el canal definitivo.
- **Pruebas:** ejecutar comprobaciones automáticas en cada pull request cuando el proyecto esté configurado; cubrir permisos y acceso entre comunidades; dejar invitaciones y votaciones para una fase posterior. Antes de la entrega, recorrer las funciones en móvil y registrar resultados y defectos.
