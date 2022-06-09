
class UserController {

  static async getAll(req, res) {

    return res.status(200).json({ data: ["user1", "user2", "user3"] })
  }

  static async getById(req, res) {
    const { id } = req.params

    return res.status(200).json({ data: id })
  }

  static async update(req, res) {
    const { id } = req.params
    const { name, email } = req.body

    return res.status(200).json({ data: req.body, id })
  }

  static async delete(req, res) {
    const { id } = req.params

    return res.status(200).json({ data: id })
  }
}

module.exports = UserController
