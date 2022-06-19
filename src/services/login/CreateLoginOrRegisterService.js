const User = require("../../models/User/User");

module.exports = class CreateLoginOrRegisterService {
    constructor(db) {this.db = db;}
  
    async execute(id, email, username, urlPhoto) {
        const user = await this.db.getUserById(id);
        
        if (email.split("@")[1] == "alu.ufc.br") {
            // Checa se o usuário já existe
            const checkUser = await this.db.searchByUser('email', email);

            // Cadastro
            if (checkUser == undefined) {
                const newUser = new User(null, username, email, urlPhoto);
                this.db.addNewUser(newUser.toJson());
                return newUser;
            }

            // Login
            return checkUser;
        }

        throw new Error('Email inválido');
    }
  }