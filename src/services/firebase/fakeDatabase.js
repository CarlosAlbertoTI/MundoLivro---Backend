// Classe responsável por representar o banco de dados falso para testes
class fakeDatabase {
    db = {
        users: [
            {
                id: 0,
                books: [

                ]
            },
            {
                id: 1,
                books: [
                    {
                        id: 0
                    }
                ]
            }
        ]
    }

    constructor() {}

    async getUsers() {
        return this.db.users;
    }

    async getUserById(userId) {
        // const users = [];
        // const starCountRef = ref(db, 'users' + `/${userId}`);
        // onValue(starCountRef, (snapshot) => {
        //     users.push({ ...snapshot.val(), id: snapshot.key });
        // });
        // return users;
    }
    
    async searchByUser(info, value) {
        // const search = [];
        // onValue(reference, (snapshot) => {
        //     snapshot.forEach((childSnapshot) => {
        //         if (childSnapshot.val()[info] == value) {
        //             search.push({ ...childSnapshot.val(), id: childSnapshot.key });
        //         }
        //     });
        // });
        // return search;
    }
    
    async addNewUser(newUser) {
        // const refOfUsers = push(reference);
        // set(refOfUsers, newUser);
    }
    
    async changeUserInfo(userId, info, value) {
        // let returnData;
        // const starCountRef = ref(db, 'users' + `/${userId}`);
        // onValue(starCountRef, (snapshot) => {
        //     if (snapshot.exists()) {
        //         const updates = {};
        //         updates[`/${info}`] = value;
        //         update(ref(db, 'users/' + userId), updates);
    
        //     } else {
        //         returnData = 0;
        //     }
    
        // }, () => {
        //     console.info("ALGO DEU RUIM");
        // });
        // return returnData;
    }
    
    // Books
    async addUserBook(userId, newBook) {
        // const starCountRef = ref(db, 'users' + `/${userId}/bookList`);
        // const refOfUsers = push(starCountRef);
        // set(refOfUsers, newBook);
    }
    async removeUserBook(userId, bookId) {
        // const starCountRef = ref(db, 'users' + `/${userId}/bookList/${bookId}`);
        // remove(starCountRef);
    }

    // Pega todos os livros do banco de dados
    async getBooks() {
        const books = [];
        this.db.users.forEach(user => {
            books.push(...user.books)
        });
        return books;
    }
    
    // Pega todos os livros do banco de dados de um determinado usuário
    async getUsersBooks(userId) {
        const user = this.db.users.find(user => user.id == userId);
        return user.books
    }
    
    // Pega um livro por id de um usuário
    async getBookByIdOfUser(userId, bookId) {
        const user = this.db.users.find(user => user.id == userId);
        const book = user.books.find(book => book.id == bookId);
        return book;
    }
}

module.exports = fakeDatabase


