const { getUsersBooks, getBookByIdOfUser, addUserBook, removeUserBook } = require("../services/firebase/database")
const Book = require('../models/Book/Book')
class BookController {

  static async getAll(req, res) {
    const { userId } = req.body
    const data = await getUsersBooks(userId)
    return res.status(200).json({ data: data })
  }

  static async getById(req, res) {
    const { userId, bookId } = req.body

    if (userId == undefined || bookId == undefined) return res.status(400).json({ message: "There are some data missing" })

    const data = await getBookByIdOfUser(userId, bookId)

    return res.status(200).json({ data: data })
  }

  static async create(req, res) {
    const {
      userId,
      name,
      description,
      categories
    } = req.body

    if (userId == undefined || name == undefined || description == undefined || categories == undefined) return res.status(400).json({ message: "There are some data missing" })

    const data = await addUserBook(userId, {
      userId,
      name,
      description,
      categories
    })

    return res.status(200).json({ data: data })
  }

  static async update(req, res) {
    const { id } = req.params
    const { title, author, categories } = req.body

    return res.status(200).json({ data: req.body, id })
  }

  static async delete(req, res) {
    const { userId, bookId } = req.body

    if (userId == undefined || bookId == undefined) return res.status(400).json({ message: "There are some data missing" })

    const data = removeUserBook(userId, bookId)


    return res.status(200).json({ data: data })
  }
}

module.exports = BookController
