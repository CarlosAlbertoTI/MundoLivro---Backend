
module.exports = class GetBookByIdService {
  constructor(db) { this.db = db; }

  async execute(userId, bookId) {
    // Checa se o usuário existe
    const user = (await this.db.getUserById(userId));
    if(!user) throw new Error("User does not exist.");

    const book = await this.db.getBookById(userId, bookId);

    return book;
  }
}