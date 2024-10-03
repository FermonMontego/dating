import registrationService from "./registration.service.js";

class RegistrationController {
    registration(req, res) {
        try {
            registrationService.checkUserExist('fermonmantego@gmail.com', 'fermonmantego');
        } catch (error) {
            console.log(error)
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