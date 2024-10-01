class RegistrationController {
    registration(req, res) {
        try {
            res.json({ message: 'response from registration route' })
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