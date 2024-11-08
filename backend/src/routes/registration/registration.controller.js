import registrationService from './registration.service.js';

class RegistrationController {
  async registration(req, res) {
    try {
      const valuesBody = req.body;

      if (
        !registrationService.checkPasswordCompare(
          valuesBody.password,
          valuesBody.password_confirm,
        )
      )
        return res.status(500).json({ message: 'Пароли не совпадают' });

      const userIsExist = await registrationService.checkUserExist(
        valuesBody.login,
      );

      if (userIsExist)
        return res.status(400).json({ message: 'Пользователь уже существует' });

      const result = await registrationService.register(valuesBody);

      if (result) return res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка регистрации', error });
    }
  }

  getRegistrationPage(req, res) {
    try {
      res.json({
        message: 'response from registration route methods getRegistrationPage',
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RegistrationController();
