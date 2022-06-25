class Book {
    #id
    #userId
    #name
    #description
    #categories
    #blocked

    constructor(id = 0, userId, name, description, categories, blocked = false) {
        this.#id = id
        this.#userId = userId
        this.#name = name
        this.#description = description
        this.#categories = categories
        this.#blocked = blocked
    }

    getID() {
        return this.#id
    }
    getIdUser() {
        return this.#userId
    }
    getName() {
        return this.#name
    }
    getDescription() {
        return this.#description
    }
    getCategories() {
        return this.#categories
    }
    getBlocked() {
        return this.#blocked
    }


    setIdUser(newUserId) {
        this.#userId = newUserId
    }
    setName(newName) {
        this.#name = newName
    }
    setDescription(newDescription) {
        this.#description = newDescription
    }
    setCategories(newCategories) {
        this.#categories = newCategories
    }
    setBlocked(newBlock) {
        this.#blocked = newBlock
    }

    toJson() {
        return {
            id: this.#id,
            userId: this.#userId,
            name: this.#name,
            description: this.#description,
            categories: this.#categories,
            blocked: this.#blocked
        }
    }

}

module.exports = Book