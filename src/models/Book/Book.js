class Book{
    #id
    #idUser
    #name
    #description
    #categories

    constructor(id,idUser,name, description, categories){
        this.#id = id
        this.#idUser = idUser
        this.#name = name
        this.#description = description
        this.#categories = categories
    }

    getID(){
        return this.#id
    }
    getIdUser(){
        return this.#idUser
    }
    getName(){
        return this.#name
    }
    getDescription(){
        return this.#description
    }
    getCategories(){
        return this.#categories
    }


    setIdUser(newUserId){
        this.#idUser = newUserId
    }
    setName(newName){
        this.#name = newName
    }
    setDescription(newDescription){
        this.#description = newDescription
    }
    setCategories(newCategories){
        this.#categories = newCategories
    }
}