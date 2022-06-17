class User {
    #id
    #username
    #email
    #urlPhoto
    #booksList
    #campus
    #phone

    constructor(id = 0, username, email, urlPhoto, booksList = [], campus = '', phone = 0) {
        this.#id = id
        this.#email = email
        this.#username = username
        this.#urlPhoto = urlPhoto
        this.#campus = campus
        this.#phone = phone
        this.#booksList = booksList ?? []
    }

    getID() {
        return this.#id
    }
    getUsername() {
        return this.#username
    }
    getEmail() {
        return this.#email
    }
    getUrlPhoto() {
        return this.#urlPhoto
    }
    getBooksList() {
        return this.#booksList
    }
    getCampus() {
        return this.#campus
    }
    getPhone() {
        return this.#phone
    }

    setUsername(newUsername) {
        this.#username = newUsername;
    }
    setEmail(newEmail) {
        this.#email = newEmail;
    }
    setUrlPhoto(newUsername) {
        this.#username = newUsername;
    }
    setBooksList(newBooksList) {
        this.#booksList = newBooksList
    }
    setCampus(newCampusName) {
        this.#campus = newCampusName;
    }
    setPhone(newPhone) {
        this.#phone = newPhone
    }

    toJson() {
        return {
            email: this.#email,
            username: this.#username,
            urlPhoto: this.#urlPhoto,
            booksList: this.#booksList,
            campus: this.#campus,
            phone: this.#phone
        }
    }
}


module.exports = User