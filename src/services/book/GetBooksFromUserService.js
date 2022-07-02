
module.exports = class GetBooksFromUserService {
  constructor(db) {this.db = db;}

  async execute(userId) {
    // Checa se o usuário existe
    const user = (await this.db.getUserById(userId));
    if(!user) throw new Error("User does not exist.");

    const books = await this.db.getUsersBooks(userId);

    return books;
  }
}