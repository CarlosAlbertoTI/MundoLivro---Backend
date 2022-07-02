
module.exports = class DeleteBookService {
  constructor(db) {this.db = db;}

  async execute(userId, bookId) {
    // Checa se o usuário existe
    const user = (await this.db.getUserById(userId));
    if(!user) throw new Error("User does not exist.");

    // Checa se o livro existe
    const book = (await this.db.getBookById(userId, bookId));
    if(!book) throw new Error("Book does not exist.");

    const deletedBook = await this.db.removeUserBook(userId, bookId);
    return deletedBook;
  }
}