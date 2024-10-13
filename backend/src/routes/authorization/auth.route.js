import express from 'express';
import AuthController from './auth.controller.js';

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

router.get('/', AuthController.getLoginPage);

export default router;
