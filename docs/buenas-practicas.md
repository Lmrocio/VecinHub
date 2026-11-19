# Guía de buenas prácticas de trabajo y gestión del proyecto

**Proyecto:** Moravía
**Módulo:** Proyecto Integrado (DAW)
**Equipo:** Rocío Luque Montes y Pablo Sanz Aznar

En esta guía recogemos cómo vamos a organizarnos durante los seis sprints: cómo repartimos las tareas, registramos el tiempo, resolvemos bloqueos y revisamos el trabajo. Los acuerdos se pueden ajustar en las reuniones semanales si vemos que necesitamos cambiar algo.

## 1. Flujo de trabajo diario

Cada tarea seguirá estos pasos:

1. Revisamos el tablero de GitHub Projects y elegimos una tarea asignada de `To Do`, empezando por las de mayor prioridad. La pasamos a `In Progress` al comenzar.
2. Abrimos la issue y creamos una rama desde `develop`, vinculada a ella. Utilizamos el prefijo que corresponda y el número de la issue, por ejemplo `docs/issue-7-analisis-competencia`.
3. Iniciamos el temporizador de Toggl Track con el número y el nombre de la tarea, por ejemplo `#7 Análisis de competencia`.
4. Trabajamos en la tarea y guardamos avances mediante commits con mensajes claros.
5. Al hacer una pausa o terminar, detenemos el temporizador y anotamos en la issue lo realizado, los bloqueos y el siguiente paso cuando sea necesario.
6. Subimos la rama, abrimos una pull request hacia `develop` y pasamos la tarea a `In Review`. Pedimos la revisión de la otra persona; después de revisar, aprobar e integrar, pasamos la tarea a `Done`.

El flujo previsto del tablero es `Backlog` → `To Do` → `In Progress` → `In Review` → `Done`. Nos falta comprobar sus columnas y campos actuales en GitHub Projects.

## 2. Organización de tareas e incidencias

Usaremos la [plantilla de tareas](../.github/ISSUE_TEMPLATE/tarea.md) para explicar qué hay que hacer, cómo comprobaremos que está terminado y cuánto tiempo estimamos. Indicaremos también responsable, prioridad y dependencias en la issue o en el tablero.

Si encontramos un error o aparece una prueba que requiere trabajo adicional, crearemos una issue con una descripción, una estimación y una forma de comprobar el resultado. Así podremos priorizarla y seguirla. Si el problema impide terminar la tarea actual, lo comentaremos y decidiremos juntos cómo proceder.

## 3. Ramas y commits

Ya hemos protegido `main` y `develop`; nos falta revisar sus reglas concretas. A partir de su configuración usamos el flujo descrito aquí. Conservamos los cambios directos y las PR iniciales sin revisión cruzada como parte de nuestro aprendizaje.

- **`main`:** contiene las versiones estables para la entrega. No haremos cambios directos; incorporaremos el trabajo mediante una pull request revisada.
- **`develop`:** reúne el trabajo revisado de las distintas tareas.
- **Ramas de tarea:** parten de `develop` y llevan el número de la issue. Usaremos `feature/` para funcionalidades, `fix/` para errores, `docs/` para documentación, `setup/` para configuración y `testing/` para pruebas. Por ejemplo: `fix/issue-15-error-token`.

Los commits seguirán el formato `tipo(alcance opcional): descripción breve`. Utilizaremos `feat`, `fix`, `docs`, `style`, `refactor`, `test` o `chore`, según el cambio. Por ejemplo: `docs: actualiza el seguimiento del sprint 1`.

## 4. Revisión del trabajo

Cada pull request la revisará la otra persona antes de integrarla. En la descripción enlazaremos la issue correspondiente y explicaremos qué se ha hecho y cómo se ha comprobado. Podemos usar `Closes #<id>` o `Fixes #<id>` para vincular su cierre; comprobaremos el estado de la issue y del tablero tras la integración, ya que depende de la configuración y de la rama de destino.

Antes de pedir revisión, quien abre la pull request comprobará que:

- Se cumplen los criterios de aceptación de la issue y se han realizado las comprobaciones aplicables.
- Los cambios están completos y no incluyen archivos innecesarios, credenciales ni datos privados.
- Las comprobaciones disponibles del proyecto, como el linter y las pruebas, pasan cuando estén configuradas.

Antes de integrar una pull request, leeremos y comprobaremos los cambios de la otra persona y plantearemos las dudas o correcciones que encontremos. Cuando las hayamos resuelto, quien revise dejará su aprobación en GitHub e integrará la pull request en `develop`. Cada uno debe poder explicar los cambios que revisa.

## 5. Comunicación y bloqueos

Cada día que trabajemos en el proyecto nos enviaremos un mensaje por WhatsApp con lo que hemos hecho, lo que vamos a hacer y los bloqueos que tengamos. Dejaremos las decisiones que afecten a una tarea en su issue para que queden registradas.

Si llevamos unos 45 minutos bloqueados sin encontrar una salida, avisaremos por WhatsApp y, cuando sea posible, nos conectaremos por Discord para revisar el problema juntos compartiendo pantalla. Si no podemos resolverlo en ese momento, anotaremos el bloqueo y el siguiente paso en la issue.

## 6. Revisión y planificación semanal

Los viernes revisaremos juntos el trabajo del sprint, preferiblemente en clase:

1. Comprobaremos las tareas y pull requests terminadas, pendientes o bloqueadas y revisaremos que lo integrado en `develop` funciona.
2. Si la versión está lista para la entrega, abriremos y revisaremos una pull request de `develop` a `main`. El despliegue dependerá de la configuración y de que las comprobaciones hayan terminado correctamente.
3. Completaremos juntos los apartados 1–7 del [seguimiento semanal](seguimiento/README.md). Cada persona rellenará su aportación y sus evidencias en el apartado 8.
4. Compararemos las horas reales con las estimaciones y anotaremos las desviaciones y sus motivos en el seguimiento.
5. Priorizaremos el backlog, seleccionaremos el trabajo abordable para el siguiente sprint y asignaremos responsables, estimaciones y dependencias. Si hace falta, ajustaremos el alcance y comunicaremos los cambios al profesorado.

## 7. Reparto y revisión

Tomamos las áreas de interfaz y backend como referencias flexibles. Ambos participaremos en integración, pruebas y decisiones, y revisaremos el trabajo de la otra persona. Cada viernes decidiremos y podremos modificar quién hace qué según disponibilidad, dependencias y capacidad; no imponemos cuotas de commits ni un reparto del 50 %. Anotaremos aportaciones concretas y evidencias en el seguimiento. Si falta capacidad, redistribuiremos trabajo o ajustaremos alcance.

### Roles de Scrum

Como Product Owner ordenaremos el backlog y propondremos el objetivo de cada sprint. Como Scrum Master ayudaremos a organizar las revisiones, registrar decisiones y resolver bloqueos. Los dos formamos también el equipo de desarrollo y decidiremos juntos el reparto cada viernes. La rotación original prevista es la siguiente; completaremos en los seguimientos qué roles asumimos realmente.

| Sprint | Product Owner previsto | Scrum Master previsto |
|---|---|---|
| 1 | Pablo | Rocío |
| 2 | Rocío | Pablo |
| 3 | Pablo | Rocío |
| 4 | Rocío | Pablo |
| 5 | Pablo | Rocío |
| 6 | Rocío | Pablo |

## 8. Tiempo y presupuesto

El presupuesto original contempla 72 horas-persona, incluidas 8 de reserva; no conocemos todavía la capacidad individual ni las horas consumidas. Registraremos el tiempo real y lo compararemos con la [estimación revisada](recursos.md#2-estimación-y-calendario), sin confundir ambas cifras. Debemos confirmar acceso y configuración actual de Toggl Track.

## 9. Información y acceso a herramientas

No subiremos contraseñas, tokens, claves ni archivos `.env` al repositorio. Cuando preparemos el entorno, mantendremos un `.env.example` sin valores sensibles y configuraremos las credenciales en los entornos correspondientes.

Utilizaremos datos ficticios en pruebas, capturas y demostraciones. Antes de trabajar con datos de residentes reales, revisaremos cómo se van a tratar y las condiciones de los servicios utilizados.
