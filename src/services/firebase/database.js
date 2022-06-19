const User = require("../../models/User/User");
const database = require("firebase/database");
const { getDatabase, ref, set, push, onValue, update, remove } = database
const app = require('./firebase');
const db = getDatabase();
const reference = ref(db, '/users');

// Classe responsável por representar o banco de dados do firebase
class FirebaseDB {
    constructor() {}

    // Pega todos os usuários do banco de dados
    async getUsers() {
        // TODO
        return [];
    }

    async getUserById(userId) {
        const users = [];
        const starCountRef = ref(db, 'users' + `/${userId}`);
        onValue(starCountRef, (snapshot) => {
            users.push({ ...snapshot.val(), id: snapshot.key });
        });
        return users;
    }
    
    async searchByUser(info, value) {
        const search = [];
        onValue(reference, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val()[info] == value) {
                    search.push({ ...childSnapshot.val(), id: childSnapshot.key });
                }
            });
        });
        return search;
    }
    
    async addNewUser(newUser) {
        const refOfUsers = push(reference);
        set(refOfUsers, newUser);
    }
    
    async changeUserInfo(userId, info, value) {
        let returnData;
        const starCountRef = ref(db, 'users' + `/${userId}`);
        onValue(starCountRef, (snapshot) => {
            if (snapshot.exists()) {
                const updates = {};
                updates[`/${info}`] = value;
                update(ref(db, 'users/' + userId), updates);
    
            } else {
                returnData = 0;
            }
    
        }, () => {
            console.info("ALGO DEU RUIM");
        });
        return returnData;
    }
    
    // Books
    async addUserBook(userId, newBook) {
        const starCountRef = ref(db, 'users' + `/${userId}/bookList`);
        const refOfUsers = push(starCountRef);
        set(refOfUsers, newBook);
    }
    async removeUserBook(userId, bookId) {
        const starCountRef = ref(db, 'users' + `/${userId}/bookList/${bookId}`);
        remove(starCountRef);
    }

    // Pega todos os livros do banco de dados
    async getBooks() {
        // TODO
        return [];
    }
    
    async getUsersBooks(userId) {
        const users = [];
        const starCountRef = ref(db, 'users' + `/${userId}/bookList`);
        onValue(starCountRef, (snapshot) => {
            users.push(snapshot.val());
        });
        return [users];
    }
    
    async getBookByIdOfUser(userId, bookId) {
        const users = [];
        const starCountRef = ref(db, 'users' + `/${userId}/bookList/${bookId}`);
        onValue(starCountRef, (snapshot) => {
            if (snapshot.exists()) {
                users.push(snapshot.val());
            }
        });
        return [users];
    }
}

module.exports = new FirebaseDB()


