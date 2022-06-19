
module.exports = class GetBooksService {
  constructor(db) {this.db = db;}

  async execute() {
    const books = await this.db.getBooks();

    return books;
  }
}