import User from '#src/models/User.js';
import { Op } from 'sequelize';

class ServiceRegistration {
  async register(data) {
    console.log(data);

    return true;
  }

  async checkUserExist(login) {
    const user = await User.findOne({
      where: {
        [Op.or]: {
          login: login,
        },
      },
    });

    if (user === null) return false;

    return true;
  }

  async createUser(userData) {}
}

export default new ServiceRegistration();
