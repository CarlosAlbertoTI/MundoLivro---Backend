
class BookController {

  static async getAll(req, res) {
    // TODO: Filtrar por nome, categoria e autor.
    return res.status(200).json({data: ["book1", "book2", "book3"]}) 
  }

  static async getById(req, res) {
    return res.status(200).json({data: ["book1"]})
  }

  static async create(req, res) {
    return res.status(200).json({data: ["book1", "book2", "book3"]}) 
  }

  static async update(req, res) {
    return res.status(200).json({data: ["book1", "book2", "book3"]}) 
  }

  static async delete(req, res) {
    return res.status(200).json({data: ["book1", "book2", "book3"]}) 
  }
} 

module.exports = BookController
