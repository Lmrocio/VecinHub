import { Router } from 'express';
import { login, logout, me, register } from '../controllers/auth.controller.js';
import { issueCsrfToken } from '../middlewares/csrf.js';
import { requireAuth } from '../middlewares/requireAuth.js';
import { validateBody } from '../middlewares/validate.js';
import { loginSchema, registerSchema } from '../validators/auth.schemas.js';

const router = Router();

router.get('/csrf', issueCsrfToken);
router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.get('/me', requireAuth, me);
router.post('/logout', logout);

export default router;