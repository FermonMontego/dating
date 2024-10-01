import express from 'express';
import registrationController from './registration.controller.js';
const router = express.Router();

// POST methods
router.post('/', registrationController.registration)

// GET methods
router.get('/', registrationController.getRegistrationPage)

export default router;