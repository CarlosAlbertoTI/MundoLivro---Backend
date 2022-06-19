
module.exports = class DeleteBookService {
  constructor(db) {this.db = db;}

  async execute(userId, bookId) {
    // TODO: Checar se o userId existe.

    const book = await this.db.removeUserBook(userId, bookId);

    return book;
  }
}