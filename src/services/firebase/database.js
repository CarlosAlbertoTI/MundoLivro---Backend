const app = require('./firebase');
const database = require("firebase/database");
const { getDatabase, ref, get, push, onValue, update, remove } = database
const db = getDatabase();

// Classe responsável por representar o banco de dados do firebase
class FirebaseDB {
    constructor() { }

    // Pega todos os usuários do banco de dados
    async getUsers() {
        const users = [];
        const snapshot = await get(ref(db, 'users/'));
        snapshot.forEach(userSnapshot => {
            users.push({id: userSnapshot.key, ...userSnapshot.val()})
        })
        return users;
    }

    // Pega um usuário por id
    async getUserById(userId) {
        const snapshot = await get(ref(db, `users/${userId}`));
        return snapshot.exists() ? {id: snapshot.key, ...snapshot.val()} : null;
    }

    // Pega usuários que possuam info == value
    async searchByUser(info, value) {
        const users = [];
        const snapshot = await get(ref(db, 'users/'));
        snapshot.forEach(userSnapshot => {
            if(userSnapshot.val()[info] == value) users.push({id: userSnapshot.key, ...userSnapshot.val()})
        })
        return users;
    }

    // Adiciona um novo usuário
    async addNewUser(id, email, username, urlPhoto) {
        const snapshot = await get(push(ref(db, `users/${id}`), {email, username, urlPhoto}).ref);
        return snapshot.exists() ? {id: snapshot.key, ...snapshot.val()} : null;
    }

    // Faz update do usuário
    async changeUserInfo(userId, data) {
        return await update(ref(db, `users/${userId}`), data)
    }

    // Adiciona um livro a um usuário
    async addUserBook(userId, book) {
        const snapshot = await get(push(ref(db, `users/${userId}/bookList`), book).ref);
        return snapshot.val();
    }

    // Remove um livro de um usuário
    async removeUserBook(userId, bookId) {
        const bookSnapshot = await get(ref(db, `users/${userId}/bookList/${bookId}`));
        await remove(bookSnapshot.ref);
        return bookSnapshot.val();
    }

    // Pega todos os livros do banco de dados
    async getBooks() {
        const books = [];
        
        const snapshot = await get(ref(db, 'users/'));
        snapshot.forEach((user) => {
            const { bookList } = user.val()
            if(bookList) {
                Object.entries(bookList).map(([id, book]) => {
                    books.push({id, ...book})
                })
            }
        })
        return books
    }

    // Pega todos os livros de um usuário
    async getUsersBooks(userId) {
        const books = [];
        const snapshot = await get(ref(db, `users/${userId}/bookList`));
        snapshot.forEach(bookSnapshot => { books.push(bookSnapshot.val()) })
        return books;
    }

    // Pega livro pelo o id
    async getBookById(userId, bookId) {
        const snapshot = await get(ref(db, `users/${userId}/bookList/${bookId}`));
        return snapshot.exists() ? {id: snapshot.key, ...snapshot.val()} : null;
    }

    // Faz update de um livro
    async changeBookInfo(userId, bookId, data) {
        return await update(ref(db, `users/${userId}/bookList/${bookId}`), data)
    }
}

module.exports = new FirebaseDB()


