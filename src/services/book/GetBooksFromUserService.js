
module.exports = class GetBooksFromUserService {
  constructor(db) {this.db = db;}

  async execute(userId) {
    // TODO: Checar se o userId existe.

    const books = await this.db.getUsersBooks(userId);

    return books;
  }
}