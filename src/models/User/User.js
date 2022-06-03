class User{
    #id
    #username
    #email
    #urlPhoto


    constructor(id, username, email, urlPhoto){
        this.#id = id
        this.#email = email
        this.#username = username
        this.#urlPhoto = urlPhoto
    }


    getID(){
        return this.#id
    }
    getUsername(){
        return this.#username
    }
    getEmail(){
        return this.#email
    }
    getUrlPhoto(){
        return this.#urlPhoto
    }

    setUsername(newUsername){
        this.#username = newUsername;
    }
    setEmail(newEmail){
        this.#email = newEmail;
    }
    setUrlPhoto(newUsername){
        this.#username = newUsername;
    }
}