
module.exports = class ChangeBookInfoService {
    constructor(db) { this.db = db; }

    async execute(userId, bookId, name, description, categories, blocked) {
        // Checa se o usuário existe
        const user = (await this.db.getUserById(userId));
        if(!user) throw new Error("User does not exist.");

        // Checa se o livro existe
        const book = (await this.db.getBookById(userId, bookId));
        if(!book) throw new Error("Book does not exist.");

        const updatedBook = {...book}
        // Modifica o objeto livro
        if(name !== undefined) updatedBook.name = name;
        if(description !== undefined) updatedBook.description = description;
        if(categories !== undefined) updatedBook.categories = categories;
        if(blocked !== undefined) updatedBook.blocked = blocked;
        delete updatedBook.id

        await this.db.changeBookInfo(userId, bookId, updatedBook);
        
        return {id: bookId, ...updatedBook};
    }
}