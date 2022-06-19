
module.exports = class CreateBookService {
  constructor(db) {this.db = db;}

  async execute(userId, newBook) {
    // TODO: Checar se o userId existe.

    const book = await this.db.addUserBook(userId, newBook);

    return book;
  }
}