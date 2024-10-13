import express from 'express';
import registrationController from './registration.controller.js';

import registrationMiddleware from './registration.middleware.js';

const router = express.Router();

// POST methods
router.post(
  '/',
  registrationMiddleware.validUserData,
  registrationController.registration,
);

// GET methods
router.get('/', registrationController.getRegistrationPage);

export default router;
