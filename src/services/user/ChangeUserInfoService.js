module.exports = class ChangeUserInfoService {
    constructor(db) { this.db = db; }

    async execute(id, username, urlPhoto, campus, phone) {
        // Checa se o usuário existe
        const user = (await this.db.getUserById(id));
        if(!user) throw new Error("User does not exist.");
        
        const updatedUser = {...user}
        // Modifica o objeto usuário
        if(username) updatedUser.username = username;
        if(urlPhoto) updatedUser.urlPhoto = urlPhoto;
        if(campus) updatedUser.campus = campus;
        if(phone) updatedUser.phone = phone;
        delete updatedUser.id

        // Faz o update
        await this.db.changeUserInfo(id, updatedUser);

        return {id, ...updatedUser};
    }
}