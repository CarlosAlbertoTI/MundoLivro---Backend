
module.exports = class GetBooksService {
  constructor(db) {this.db = db;}

  async execute(campus) {
    const books = await this.db.getBooks(campus);

    return books;
  }
}