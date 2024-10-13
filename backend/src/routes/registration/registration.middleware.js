import { validationResult } from 'express-validator';
import { body } from 'express-validator';

class RegistrationMiddleware {
  async validUserData(req, res, next) {
    const validations = [
      body('login').notEmpty().withMessage('Это обязательное поле.'),
      body('first_name').notEmpty().withMessage('Это обязательное поле.'),
      body('last_name').notEmpty().withMessage('Это обязательное поле.'),
      body('password').notEmpty().withMessage('Это обязательное поле.'),
      body('password_confirm').notEmpty().withMessage('Это обязательное поле.'),
    ];

    for (const validate of validations) {
      await validate.run(req);
    }

    const result = validationResult(req);

    if (!result.isEmpty())
      return res
        .status(400)
        .json({
          message: 'При регистрации произошла ошибка',
          errors: result.array(),
        });

    next();
  }
}

export default new RegistrationMiddleware();
