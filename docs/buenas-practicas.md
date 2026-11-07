# Guía de Buenas Prácticas y Estándares de Desarrollo - VecinHub

Este documento establece las normas y convenciones técnicas que rigen el desarrollo del proyecto VecinHub para garantizar la calidad del software, la consistencia del código y la fluidez del trabajo en equipo.

---

## 1. Control de versiones y Git Flow

El equipo utilizará un flujo de trabajo basado en **Git Flow simplificado**:

* **`main`:** Rama de producción. Solo contiene código estable, testeado y revisado en los cierres de sprint semanales. Está protegida contra pushes directos.
* **`develop`:** Rama de integración continua. Es la base de trabajo donde convergen las diferentes funcionalidades aprobadas.
* **Ramas de trabajo:** Salen siempre de `develop` y siguen esta convención de nombres:
  * `feature/issue-<id>-descripcion-corta` $\rightarrow$ Nuevas funcionalidades (ej. `feature/issue-4-auth-jwt`).
  * `fix/issue-<id>-descripcion-corta` $\rightarrow$ Corrección de errores (ej. `fix/issue-9-error-token-qr`).
  * `docs/issue-<id>-descripcion-corta` $\rightarrow$ Documentación y actas (ej. `docs/issue-1-acta-sprint-1`).
  * `setup/issue-<id>-descripcion-corta` $\rightarrow$ Configuración de herramientas y entorno.

---

## 2. Convención de Commits (Conventional Commits)

Los mensajes de commit deben ser claros, explicativos y redactados en presente o infinitivo, utilizando el estándar:

`tipo(alcance opcional): descripción breve`

* **`feat:`** Una nueva característica para el usuario (ej. `feat(auth): añade middleware de verificación de roles`).
* **`fix:`** Corrección de un fallo o bug (ej. `fix(ticket): valida formato de imagen antes de subir a Cloudinary`).
* **`docs:`** Cambios exclusivamente en la documentación (ej. `docs: añade acta de seguimiento del sprint 1`).
* **`style:`** Formato, espacios, punto y coma, sin cambios en la lógica (ej. `style: formatea componentes con Prettier`).
* **`refactor:`** Cambio de código que no arregla un bug ni añade una feature (ej. `refactor(db): modulariza conexión de Mongoose`).
* **`chore:`** Tareas de mantenimiento, actualización de paquetes o configuración (ej. `chore: actualiza dependencias en package.json`).

---

## 3. Política de Pull Requests y Revisiones de Código (Code Review)

1. **Prohibido el self-merge:** Ningún integrante puede fusionar sus propias ramas directamente en `develop` ni en `main`.
2. **Revisión cruzada obligatoria:** Toda Pull Request debe tener como *Reviewer* al otro compañero del equipo.
3. **Cierre de issues automático:** La descripción de la PR debe incluir la palabra clave de vinculación (`Closes #<id>` o `Fixes #<id>`) para que la tarjeta del tablero avance sola.
4. **Criterios para aprobar una PR:**
   * El linter pasa sin errores (`npm run lint`).
   * No se introducen archivos innecesarios ni secretos (`.env`, `node_modules`).
   * El código cumple los criterios de aceptación especificados en la issue correspondiente.

---

## 4. Estándares de Código y Calidad

* **Linter y formateador:** Se utilizarán **ESLint 9** y **Prettier 3** con configuración idéntica en ambos puestos de trabajo para evitar conflictos de formato.
* **Nomenclatura:**
  * Componentes React: `PascalCase` (ej. `TicketCard.jsx`).
  * Funciones, variables y controladores: `camelCase` (ej. `getUserById`, `isTokenExpired`).
  * Modelos de MongoDB: `PascalCase` en singular (ej. `User.js`, `Ticket.js`).
  * Rutas de la API REST: en minúsculas y plural (ej. `/api/communities`, `/api/incidents`).

---

## 5. Seguridad y Gestión de Secretos

1. **Variables de entorno:** Queda estrictamente prohibido subir claves de API, tokens JWT o credenciales de bases de datos al repositorio.
2. **Uso de `.env.example`:** Se mantendrá un archivo de ejemplo sin datos sensibles para que cualquier miembro sepa qué variables debe configurar localmente.
3. **Cookies seguras:** Las sesiones web se almacenarán en cookies HTTP con las directivas `HttpOnly`, `Secure` y `SameSite=Strict/Lax` para prevenir ataques XSS y CSRF.

---

## 6. Auditoría y Control del Tiempo (Toggl Track)

Para garantizar un reparto equitativo del esfuerzo y justificar las horas dedicadas ante la evaluación del módulo:
* Cada miembro activará el temporizador de **Toggl Track** al empezar una tarea, indicando el número de la issue (ej. `#3 [BE] Endpoints Auth`).
* Al final de cada semana, los tiempos registrados se contrastarán con las estimaciones de la planificación en la reunión de sprint review.
