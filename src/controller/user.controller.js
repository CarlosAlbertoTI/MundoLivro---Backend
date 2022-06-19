// Services
const GetUsersService = require("../services/user/GetUsersService");
const GetUserByIdService = require("../services/user/GetUserByIdService");

class UserController {

  static async getAll(req, res) {
    const getUsersService = new GetUsersService(FirebaseDB);
    const users = await getUsersService.execute();

    return res.status(200).json({ users })
  }

  static async getById(req, res) {
    const { id } = req.body

    const getUserByIdService = new GetUserByIdService(FirebaseDB);
    const user = await getUserByIdService.execute(id);

    return res.status(200).json({ user })
  }

  // static async update(req, res) {
  //   const { id, info, value } = req.body

  //   if (id == undefined || info == undefined || value == undefined) {
  //     return res.status(400).json({ message: "There are some data missing" })
  //   }

  //   const result = await changeUserInfo(id, info, value)
  //   if (result == 0) {
  //     return res.status(400).json({ message: "We couldn't change user's info" })
  //   }

  //   return res.status(200).json({ message: "User's info updated" })
  // }

  // static async delete(req, res) {
  //   const { id } = req.params

  //   return res.status(200).json({ data: id })
  // }
}

module.exports = UserController
