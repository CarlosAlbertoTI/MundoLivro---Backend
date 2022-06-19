module.exports = class GetUserByIdService {
  constructor(db) {this.db = db;}

  async execute(userId) {
    const user = await this.db.getUserById(userId);

    return user;
  }
}