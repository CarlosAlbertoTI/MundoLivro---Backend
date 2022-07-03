//Services
const GetBooksService = require("../services/book/GetBooksService");
const GetBooksFromUserService = require("../services/book/GetBooksFromUserService");
const GetBookByIdService = require("../services/book/GetBookByIdService");
const CreateBookService = require("../services/book/CreateBookService");
const DeleteBookService = require("../services/book/DeleteBookService");
const ChangeBookInfoService = require('../services/book/ChangeBookInfoService')

//DB
const FirebaseDB = require("../services/firebase/database");

class BookController {

  // Pega todos os livros do banco de dados
  static async getAll(req, res) {
    const getBooksService = new GetBooksService(FirebaseDB);
  
    const books = await getBooksService.execute();
    return res.status(200).json(books);
  }

  // Pega todos os livros de um usuário
  static async getAllFromUser(req, res) {
    const { userId } = req.params;

    const getBooksFromUserService = new GetBooksFromUserService(FirebaseDB);
    try {
      const books = await getBooksFromUserService.execute(userId);
      return res.status(201).json(books)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }

  // Pega um livro por id de um usuário
  static async getById(req, res) {
    const { userId, bookId } = req.params

    const getBookByIdService = new GetBookByIdService(FirebaseDB);
    try {
      const book = await getBookByIdService.execute(userId, bookId);
      return res.status(201).json(book)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }

  // Adiciona um livro a um usuário
  static async create(req, res) {
    const { userId } = req.params;
    const { name, description, categories, img, author } = req.body;

    const createBookService = new CreateBookService(FirebaseDB);
    try {
      const book = await createBookService.execute(userId, name, description, categories, img, author);
      return res.status(201).json(book)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }

  static async update(req, res) {
    const { userId, bookId } = req.params
    const { name, description, categories, blocked } = req.body;

    const changeBookInfoService = new ChangeBookInfoService(FirebaseDB)
    try {
      const book = await changeBookInfoService.execute(userId, bookId, name, description, categories, blocked)
      return res.status(201).json(book)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }

  // Deleta um livro de um usuário
  static async delete(req, res) {
    const { userId, bookId } = req.params;

    const deleteBookService = new DeleteBookService(FirebaseDB);
    try {
      const book = await deleteBookService.execute(userId, bookId);
      return res.status(201).json(book)
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  }
}

module.exports = BookController
