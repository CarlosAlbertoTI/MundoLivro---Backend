// Services
const CreateLoginOrRegisterService = require("../services/login/CreateLoginOrRegisterService");
const GetUserByIdService = require("../services/user/GetUserByIdService");
const firebaseDB = require('../services/firebase/database');
const User = require("../models/User/User");

class LoginController {

  static async createOrLogin(req, res) {
    const { id, username, email, urlPhoto, booksList, campus, phone } = req.body
    const createLoginOrRegisterService = new CreateLoginOrRegisterService(firebaseDB);
    const newUser = new User(id,username,email,urlPhoto,booksList, campus,phone)
    const {message,data} = await createLoginOrRegisterService.execute(newUser.getID(),newUser.getEmail(),newUser.getUsername(),newUser.getUrlPhoto());
    if(message == 'Email is not valid!') {
      return res.status(401).json(message);
    }
    if(message == "The user was created"){
      const searchByUserService = new GetUserByIdService(firebaseDB)
      const searchUser = await searchByUserService.execute(id)
      return res.status(201).json({ message: "The user has created succefully", data: searchUser[0] });
    }
    return res.status(201).json({message, data})

  }
}

module.exports = LoginController
