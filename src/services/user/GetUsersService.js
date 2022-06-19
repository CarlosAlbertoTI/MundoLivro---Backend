
module.exports = class GetUsersService {
  constructor(db) {this.db = db;}

  async execute() {
    const users = await this.db.getUsers();

    return users;
  }
}