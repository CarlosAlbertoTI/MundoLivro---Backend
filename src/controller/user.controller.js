const { addNewUser, searchByUser, getUsers, changeUserInfo, getUserById } = require("../services/firebase/database")
const User = require("../models/User/User")
class UserController {

  static async getAll(_, res) {
    const allUser = await getUsers()
    return res.status(200).json({ message: "The data was receive!", data: allUser })
  }

  static async getById(req, res) {
    // const { id } = req.params
    const { id } = req.body

    if (id == undefined) return res.status(400).json({ message: "There are some data missing" })

    const data = await getUserById(id)

    return res.status(200).json({ data: data })
  }

  static async update(req, res) {
    // const { id } = req.params
    const { id, info, value } = req.body

    if (id == undefined || info == undefined || value == undefined) {
      return res.status(400).json({ message: "There are some data missing" })
    }

    const result = await changeUserInfo(id, info, value)
    if (result == 0) {
      return res.status(400).json({ message: "We couldn't change user's info" })
    }

    return res.status(200).json({ message: "User's info updated" })
  }

  static async delete(req, res) {
    const { id } = req.params

    return res.status(200).json({ data: id })
  }
}

module.exports = UserController
