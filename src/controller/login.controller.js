
const { addNewUser, searchByUser, getUsers } = require("../services/firebase/database")
const User = require("../models/User/User")


class LoginController {

  static async createOrLogin(req, res) {
    const { email, username, urlPhoto, id } = req.body

    if (email == undefined || username == undefined || urlPhoto == undefined || id == undefined) {
      return res.status(400).json({ message: "There are some data missing" })
    }

    if (email.split("@")[1] == "alu.ufc.br") {
      // checar se o dado ja existe no banco
      const [checkUser] = await searchByUser('email', email)

      if (checkUser == undefined) {
        const newUser = new User(null, username, email, urlPhoto);
        addNewUser(newUser.toJson());
        return res.status(200).json({ message: "The user was created" });
      }
      res.status(200).json({ message: "The user has logged succefully", data: checkUser })
    }
    return res.status(200).json({ message: "This email is not valid", email })
  }
}

module.exports = LoginController
