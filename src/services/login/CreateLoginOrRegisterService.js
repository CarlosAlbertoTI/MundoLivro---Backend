const User = require("../../models/User/User");

module.exports = class CreateLoginOrRegisterService {
    constructor(db) { this.db = db; }

    async execute(id, email, username, urlPhoto) {
            
        if (email.split("@")[1] == "alu.ufc.br") {
            // Checa se o usuário já existe
            const [checkUser] = await this.db.searchByUser('email', email);
            // Cadastro
            if (checkUser == undefined) {
                const newUser = new User(id, username, email, urlPhoto);
                const newUserJson = newUser.toJson()
                delete newUserJson.id
                this.db.addNewUser(newUser.toJson(), id);
                return { message: "The user was created", data:undefined};
            }
            // Login
            return { message: "The user has logged", data: checkUser };
        }

        return {message:"Email is not valid!",data: undefined}
    }
}