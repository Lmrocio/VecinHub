# Guía de buenas prácticas de trabajo y gestión del proyecto

**Proyecto:** VecinHub
**Módulo:** Proyecto Integrado (DAW)
**Equipo:** Rocío Luque Montes y Pablo Sanz Aznar

En esta guía recogemos cómo vamos a organizarnos durante los seis sprints: cómo repartimos las tareas, registramos el tiempo, resolvemos bloqueos y revisamos el trabajo. Los acuerdos se pueden ajustar en las reuniones semanales si vemos que necesitamos cambiar algo.

## 1. Flujo de trabajo diario

Cada tarea seguirá estos pasos:

1. Revisamos el tablero de GitHub Projects y elegimos una tarea asignada de `Todo`, empezando por las de mayor prioridad. La pasamos a `In Progress` al comenzar.
2. Abrimos la issue y creamos una rama desde `develop`, vinculada a ella. Utilizamos el prefijo que corresponda y el número de la issue, por ejemplo `docs/issue-7-analisis-competencia`.
3. Iniciamos el temporizador de Toggl Track con el número y el nombre de la tarea, por ejemplo `#7 Análisis de competencia`.
4. Trabajamos en la tarea y guardamos avances mediante commits con mensajes claros.
5. Al hacer una pausa o terminar, detenemos el temporizador y anotamos en la issue lo realizado, los bloqueos y el siguiente paso cuando sea necesario.
6. Subimos la rama y abrimos una pull request hacia `develop`, solicitando la revisión de la otra persona. Cuando se revise, se compruebe y se integre, actualizamos la issue y su estado en el tablero.

## 2. Organización de tareas e incidencias

Usaremos la [plantilla de tareas](../.github/ISSUE_TEMPLATE/tarea.md) para explicar qué hay que hacer, cómo comprobaremos que está terminado y cuánto tiempo estimamos. Indicaremos también responsable, prioridad y dependencias en la issue o en el tablero.

Si encontramos un error o aparece una prueba que requiere trabajo adicional, crearemos una issue con una descripción, una estimación y una forma de comprobar el resultado. Así podremos priorizarla y seguirla. Si el problema impide terminar la tarea actual, lo comentaremos y decidiremos juntos cómo proceder.

## 3. Ramas y commits

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

La persona que revisa leerá los cambios, comprobará que se entiende lo realizado y señalará cualquier duda o corrección. Una vez resueltas, aprobará la pull request y se integrará en `develop`.

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

## 7. Roles durante los sprints

Alternaremos las funciones de Product Owner y Scrum Master. El Product Owner se encargará de ordenar las prioridades y comprobar que el resultado responde al objetivo del producto. El Scrum Master facilitará la reunión, revisará que el tablero esté actualizado y recordará el registro de horas. Seguiremos tomando juntos las decisiones importantes y revisando el trabajo de la otra persona.

| Sprint | Product Owner | Scrum Master | Atención especial prevista |
|---|---|---|---|
| 1 | Pablo | Rocío | Revisar el backlog y preparar las herramientas de trabajo. |
| 2 | Rocío | Pablo | Revisar el acceso y la incorporación a la comunidad. |
| 3 | Pablo | Rocío | Seguir el avance de incidencias y el uso de recursos. |
| 4 | Rocío | Pablo | Revisar avisos, mensajes y organización del trabajo. |
| 5 | Pablo | Rocío | Coordinar las pruebas de las consultas. |
| 6 | Rocío | Pablo | Coordinar las pruebas finales y la documentación de entrega. |

Las responsabilidades de cada sprint se podrán ajustar según el avance real.

## 8. Tiempo y presupuesto

Registraremos en Toggl Track cada sesión de trabajo con el proyecto VecinHub y el número de la issue. La planificación prevé unas seis horas por persona y sprint, 12 horas-persona por semana y 72 en total, incluidas ocho horas de reserva.

En cada revisión compararemos el tiempo dedicado con lo previsto y recogeremos las diferencias en el registro semanal. También revisaremos el consumo y los posibles costes de los servicios descritos en [recursos y organización](recursos.md#4-servicios-externos-y-costes), y anotaremos cualquier cambio que afecte al presupuesto.

## 9. Información y acceso a herramientas

No subiremos contraseñas, tokens, claves ni archivos `.env` al repositorio. Cuando preparemos el entorno, mantendremos un `.env.example` sin valores sensibles y configuraremos las credenciales en los entornos correspondientes.

Utilizaremos datos ficticios en pruebas, capturas y demostraciones. Antes de trabajar con datos de residentes reales, revisaremos cómo se van a tratar y las condiciones de los servicios utilizados.
