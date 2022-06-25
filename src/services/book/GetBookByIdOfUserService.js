
module.exports = class GetBookByIdOfUser {
  constructor(db) { this.db = db; }

  async execute(userId, newBook) {
    const book = await this.db.getBookByIdOfUser(userId, newBook);

    return book;
  }
}