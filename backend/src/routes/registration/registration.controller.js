import registrationService from "./registration.service.js";

class RegistrationController {
    async registration(req, res) {
        try {
            const user = await registrationService.checkUserExist('fermonmantego@gmail.com', 'fermonmantego');

            if (user) return res.status(400).json({ message: 'Пользователь уже существует' });

            res.status(200).json({ message: 'OK' })
        } catch (error) {
            res.status(500).json({ message: 'Some error', error });
        }
    }

    getRegistrationPage(req, res) {
        try {
            res.json({ message: 'response from registration route methods getRegistrationPage' })
        } catch (error) {
            console.log(error)
        }
    }
}

export default new RegistrationController();