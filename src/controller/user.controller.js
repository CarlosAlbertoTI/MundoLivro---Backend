// Services
const GetUsersService = require("../services/user/GetUsersService");
const GetUserByIdService = require("../services/user/GetUserByIdService");
const ChangeUserInfoService = require("../services/user/ChangeUserInfoService")


const firebaseDB = require('../services/firebase/database')
class UserController {

  static async getAll(req, res) {
    const getUsersService = new GetUsersService(firebaseDB);
    const users = await getUsersService.execute();

    return res.status(200).json(users);
  }

  static async getById(req, res) {
    const { id } = req.params;

    const getUserByIdService = new GetUserByIdService(firebaseDB);
    const user = await getUserByIdService.execute(id);

    return res.status(200).json(user);
  }

  static async update(req, res) {
    const { id } = req.params;
    const { username, urlPhoto, campus, phone } = req.body;

    const changeUserInfoService = new ChangeUserInfoService(firebaseDB);
    try {
      const user = await changeUserInfoService.execute(id, username, urlPhoto, campus, phone);
      return res.status(201).json(user)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }
}

module.exports = UserController
