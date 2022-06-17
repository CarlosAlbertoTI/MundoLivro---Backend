const User = require("../../models/User/User");
const database = require("firebase/database");
const { getDatabase, ref, set, push, onValue, update, remove } = database
const app = require('./firebase');
const db = getDatabase();
const reference = ref(db, '/users');


const getUsers = () => {
    const users = []
    onValue(reference, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            users.push({ ...childSnapshot.val(), id: childSnapshot.key });
        });
    })
    return users
}

const getUserById = async (userId) => {
    const users = []
    const starCountRef = ref(db, 'users' + `/${userId}`);
    onValue(starCountRef, (snapshot) => {
        users.push({ ...snapshot.val(), id: snapshot.key });
    });
    return users
}

const searchByUser = async (info, value) => {
    const search = []
    onValue(reference, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val()[info] == value) {
                search.push({ ...childSnapshot.val(), id: childSnapshot.key });
            }
        });
    })
    return search
}

const addNewUser = (newUser) => {
    const refOfUsers = push(reference);
    set(refOfUsers, newUser);
}

const changeUserInfo = async (userId, info, value) => {
    let returnData;
    const starCountRef = ref(db, 'users' + `/${userId}`);
    onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
            const updates = {};
            updates[`/${info}`] = value;
            update(ref(db, 'users/' + userId), updates)

        } else {
            returnData = 0
        }

    }, () => {
        console.info("ALGO DEU RUIM")
    });
    return returnData
}


// Books
const addUserBook = async (userId, newBook) => {
    const starCountRef = ref(db, 'users' + `/${userId}/bookList`);
    const refOfUsers = push(starCountRef);
    set(refOfUsers, newBook);
}
const removeUserBook = async (userId, bookId) => {
    const starCountRef = ref(db, 'users' + `/${userId}/bookList/${bookId}`);
    remove(starCountRef)
}

const getUsersBooks = async (userId) => {
    const users = []
    const starCountRef = ref(db, 'users' + `/${userId}/bookList`);
    onValue(starCountRef, (snapshot) => {
        users.push(snapshot.val());
    });
    return [users]
}

const getBookByIdOfUser = async (userId, bookId) => {
    const users = []
    const starCountRef = ref(db, 'users' + `/${userId}/bookList/${bookId}`);
    onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
            users.push(snapshot.val());
        }
    });
    return [users]
}

module.exports = {
    addNewUser,
    getUsers,
    getUserById,
    searchByUser,
    changeUserInfo,
    getUsersBooks,
    getBookByIdOfUser,
    addUserBook,
    removeUserBook
}


