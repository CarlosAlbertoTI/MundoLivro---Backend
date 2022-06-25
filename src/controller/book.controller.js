//Services
const GetBooksService = require("../services/book/GetBooksService");
const GetBooksFromUserService = require("../services/book/GetBooksFromUserService");
const GetBookByIdOfUser = require("../services/book/GetBookByIdOfUserService");
const CreateBookService = require("../services/book/CreateBookService");
const DeleteBookService = require("../services/book/DeleteBookService");
const ChangeBookInfoService = require('../services/book/ChangeBookInfoService')
const Book = require("../models/Book/Book")
//DB
const FirebaseDB = require("../services/firebase/database");

class BookController {

  // Pega todos os livros do banco de dados
  static async getAll(req, res) {
    const getBooksService = new GetBooksService(FirebaseDB);

    const books = await getBooksService.execute();

    return res.status(200).json({ books });
  }

  // Pega todos os livros de um usuário
  static async getAllFromUser(req, res) {
    const { userId } = req.body;

    const getBooksFromUserService = new GetBooksFromUserService(FirebaseDB);

    const books = await getBooksFromUserService.execute(userId);
    return res.status(200).json({ books });
  }

  // Pega um livro por id de um usuário
  static async getById(req, res) {
    const { userId, bookId } = req.body

    const getBookByIdOfUser = new GetBookByIdOfUser(FirebaseDB);
    const book = await getBookByIdOfUser.execute(userId, bookId);

    return res.status(200).json({ book });
  }

  // Adiciona um livro a um usuário
  static async create(req, res) {
    const {
      id,
      userId,
      name,
      description,
      categories
    } = req.body;

    const createBookService = new CreateBookService(FirebaseDB);
    const newBook = new Book(id, userId,
      name,
      description,
      categories)
    const data = newBook.toJson()
    delete data.id
    const book = await createBookService.execute(userId, data);

    return res.status(200).json({ book });
  }

  static async update(req, res) {
    const {
      userId,
      bookId,
      value
    } = req.body;

    console.info(req.body)
    const changeBookInfoService = new ChangeBookInfoService(FirebaseDB)
    const updateBook = changeBookInfoService.execute(userId, bookId, value)
    if (updateBook) {
      return res.status(200).json({ message: "The book was updated" });
    }
    return res.status(400).json({ message: "Error!!!" });
    //   const { id } = req.params
    //   const { title, author, categories } = req.body

    //   return res.status(200).json({ data: req.body, id })
  }

  // Deleta um livro de um usuário
  static async delete(req, res) {
    const { userId, bookId } = req.body;

    const deleteBookService = new DeleteBookService(FirebaseDB);
    const book = await deleteBookService.execute(userId, bookId);

    return res.status(200).json({ book });
  }
}

module.exports = BookController
