// Services
const CreateLoginOrRegisterService = require("../services/login/CreateLoginOrRegisterService");
const GetUserByIdService = require("../services/user/GetUserByIdService");
const firebaseDB = require('../services/firebase/database');
const User = require("../models/User/User");

class LoginController {

  static async createOrLogin(req, res) {
    const { id, username, email, urlPhoto, booksList, campus, phone } = req.body
    

    if (id != undefined) {
      const getUserByIdService = new GetUserByIdService(firebaseDB)
      const [searchById] = await getUserByIdService.execute(id)
      if (searchById != undefined)
        return res.status(200).json({ message: "The user has logged", data: searchById })
    }

    const createLoginOrRegisterService = new CreateLoginOrRegisterService(firebaseDB);
    const newUser = new User(id,username,email,urlPhoto,booksList, campus,phone)
    const user = await createLoginOrRegisterService.execute(newUser.getID(),newUser.getEmail(),newUser.getUsername(),newUser.getUrlPhoto());
    if(user.message == 'The email is not valid!') return res.status(400).json(user);
    const searchByUserService = new GetUserByIdService(firebaseDB)
    const searchUser = await searchByUserService.execute(id)

    return res.status(200).json({ message: "The user has created succefully", data: searchUser });
  }
}

module.exports = LoginController
