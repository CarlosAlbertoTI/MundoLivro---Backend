
module.exports = class CreateBookService {
  constructor(db) {this.db = db;}

  async execute(userId, name, description, categories) {
    // Checa se o usuário existe
    const user = (await this.db.getUserById(userId));
    if(!user) throw new Error("User does not exist.");

    const book = await this.db.addUserBook(userId, { name, description, categories });

    return book;
  }
}