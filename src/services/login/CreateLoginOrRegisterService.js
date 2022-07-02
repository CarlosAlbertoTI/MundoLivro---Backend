module.exports = class CreateLoginOrRegisterService {
    constructor(db) { this.db = db; }

    async execute(id, email, username, urlPhoto) {
        
        // Checa se o email é da ufc
        if (email.split("@")[1] != "alu.ufc.br") throw new Error("This email is not valid.");

        // Checa se o usuário já existe
        const user = (await this.db.searchByUser('email', email))[0];

        // Faz login caso exista
        if(user) return user;

        // Cadastra o novo usuário
        return await this.db.addNewUser(email, username, urlPhoto);
    }
}