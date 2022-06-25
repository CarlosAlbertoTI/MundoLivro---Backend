module.exports = class GetUsersByInfoService {
    constructor(db) { this.db = db; }

    async execute(info, value) {
        const user = await this.db.searchByUser(info, value)
        return user;
    }
}