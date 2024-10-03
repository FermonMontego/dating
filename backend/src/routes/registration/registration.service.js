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

        console.log(user, 'user from registration service')
    }
}

export default new ServiceRegistration();