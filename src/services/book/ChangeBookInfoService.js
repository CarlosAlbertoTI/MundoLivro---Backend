
module.exports = class ChangeBookInfoService {
    constructor(db) { this.db = db; }

    async execute(userId, bookId, newValue) {
        const book = await this.db.changeBookInfo(userId, bookId, 'blocked', newValue);
        return book;
    }
}