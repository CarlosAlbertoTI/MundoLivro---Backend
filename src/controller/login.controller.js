class LoginController {

  static async create(req, res) {
    const {email} = req.body
    if(email.split("@")[1] == "alu.ufc.br"){
        return res.status(200).json({message:"This email is valid", email})
     }
     return res.status(200).json({message:"This email is not valid", email})
 
     // autenticação com o google ==> Firebase
  }
} 

module.exports = LoginController
