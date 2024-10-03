import User from '#src/models/User.js';
import { Op } from 'sequelize';

class ServiceRegistration {
    async checkUserExist(email, username) {
        const user = await User.findOne({
            where: {
                [Op.or]: {
                    username: username,
                    email: email
                }
            }
        })

        if (user === null) return false;

        return true;
    }

    async createUser(userData) {

    }
}

export default new ServiceRegistration();