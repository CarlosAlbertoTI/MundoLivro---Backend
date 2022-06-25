// Services
const GetUsersService = require("../services/user/GetUsersService");
const GetUserByIdService = require("../services/user/GetUserByIdService");
const ChangeUserInfoService = require("../services/user/ChangeUserInfoService")


const firebaseDB = require('../services/firebase/database')
class UserController {

  static async getAll(_, res) {
    const getUsersService = new GetUsersService(firebaseDB);
    const users = await getUsersService.execute();

    return res.status(200).json({ users })
  }

  static async getById(req, res) {
    const { id } = req.body

    const getUserByIdService = new GetUserByIdService(firebaseDB);
    const user = await getUserByIdService.execute(id);

    return res.status(200).json({ user })
  }

  static async update(req, res) {
    const { id, info, value } = req.body

    const changeUserInfoService = new ChangeUserInfoService(firebaseDB)
    const updateUser = await changeUserInfoService.execute(id, info, value)

    if (updateUser) {
      return res.status(200).json({ message: "User's info updated" })
    }
    return res.status(400).json({ message: "We couldn't change user's info" })

  }

  static async delete(req, res) {
    const { id } = req.params

    //   return res.status(200).json({ data: id })
  }
}

module.exports = UserController
