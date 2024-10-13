class AuthController {
  async login(req, res) {
    try {
      res.json(req.body);
    } catch (err) {
      console.log(err);
    }
  }

  async getLoginPage(req, res) {
    try {
      res.json({ message: 'get login page' });
    } catch {
      console.log('Что-то пошло не так');
    }
  }

  async logout(req, res) {
    try {
      res.json(req.body);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthController();
