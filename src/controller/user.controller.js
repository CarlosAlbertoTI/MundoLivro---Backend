class UserController {

  static async getAll(req, res) {
    return res.status(200).json({data: ["user1", "user2", "user3"]}) 
  }

  static async getById(req, res) {
    return res.status(200).json({data: ["user1"]}) 
  }

  static async update(req, res) {
    return res.status(200).json({data: ["user1"]}) 
  }

  static async delete(req, res) {
    return res.status(200).json({data: ["user1"]}) 
  }
} 

module.exports = UserController
