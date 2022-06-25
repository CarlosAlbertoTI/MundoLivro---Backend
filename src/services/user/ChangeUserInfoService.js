module.exports = class ChangeUserInfoService {
    constructor(db) { this.db = db; }

    async execute(userId, info, value) {
        const users = await this.db.changeUserInfo(userId, info, value);
        return users;
    }
}