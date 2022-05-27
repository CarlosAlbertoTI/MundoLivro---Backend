class LoginController {

  static async create(req, res) {
    if(req.body.email == undefined || req.body.password == undefined){
        return res.status(400).json({message:"Data is missing!"})
    }
 
    const {email, password} = req.body
    if(email.split("@")[1] == "alu.ufc.br"){
        return res.status(200).json({message:"This email is valid", email})
     }
     return res.status(200).json({message:"This email is not valid", email})
 
     // autenticação com o google ==> Firebase
     
  }
} 

module.exports = LoginController
