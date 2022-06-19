// Services
const CreateLoginOrRegisterService = require("../services/login/CreateLoginOrRegisterService");

class LoginController {

  static async createOrLogin(req, res) {
    const { email, username, urlPhoto, id } = req.body

    const createLoginOrRegisterService = new CreateLoginOrRegisterService(FirebaseDB);
    const user = await createLoginOrRegisterService.execute(id, email, username, urlPhoto);

    return user;
  }
}

module.exports = LoginController
