import { Router } from 'express';
import { UserService } from './user.service.js';

const router = Router();

router.get('/', function (req, res) {
  res.json({
    user: UserService.getUserById('1234'),
  });
});

export default router;
