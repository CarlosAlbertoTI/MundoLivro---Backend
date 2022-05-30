class BookController {

  static async getAll(req, res) {
    const {title, author, categories} = req.query

    return res.status(200).json({data: req.query})
  }

  static async getById(req, res) {
    const {id} = req.params

    return res.status(200).json({data: req.params})
  }

  static async create(req, res) {
    const {title, author, categories} = req.body
    
    return res.status(200).json({data: req.body})
  }

  static async update(req, res) {
    const {id} = req.params
    const {title, author, categories} = req.body

    return res.status(200).json({data: req.body, id})
  }

  static async delete(req, res) {
    const {id} = req.params

    return res.status(200).json({data: id})
  }
}

module.exports = BookController
