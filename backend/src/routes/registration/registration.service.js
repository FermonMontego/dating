import User from '#src/models/User.js';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';

class ServiceRegistration {
  async register(data) {
    const prepareData = this.prepareDataForRegister(data);

    return prepareData;
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

  checkPasswordCompare(password, password_confirm) {
    return password === password_confirm;
  }

  async prepareDataForRegister(data) {
    return {
      ...data,
      password: await bcrypt.hash(data.password, 8),
      password_confirm: await bcrypt.hash(data.password_confirm, 8),
    };
  }
}

export default new ServiceRegistration();
