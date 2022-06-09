const User = require("../../models/User/User");
const { getDatabase, ref, set, push, get, query, onValue, equalTo } = require("firebase/database");
const app = require('./firebase');
const { async } = require("@firebase/util");
// Get a reference to the database service
const db = getDatabase();
const reference = ref(db, '/users');

const addNewUser = (newUser) => {
    const refOfUsers = push(reference);
    set(refOfUsers, newUser);

}

const getUsers = async () => {
    const users = []
    onValue(reference, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            users.push(childSnapshot.val());
        });
    })
    return users
}

const searchByQuerie = async (info, value) => {
    const search = []
    onValue(reference, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val()[info] == value)
                search.push(childSnapshot.val());
        });
    })
    return search
}


module.exports = {
    addNewUser,
    getUsers,
    searchByQuerie
}


