// Services
const CreateLoginOrRegisterService = require("../services/login/CreateLoginOrRegisterService");
const firebaseDB = require('../services/firebase/database');

class LoginController {
  static async createOrLogin(req, res) {
    const { id, email, username, urlPhoto } = req.body
    
    const createLoginOrRegisterService = new CreateLoginOrRegisterService(firebaseDB);
    try {
      const user = await createLoginOrRegisterService.execute(id, email, username, urlPhoto);
      return res.status(201).json(user)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }
}

module.exports = LoginController
