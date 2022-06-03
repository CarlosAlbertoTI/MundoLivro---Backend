class LoginController {

  static async createOrLogin(req, res) {
    const {email,username,urlPhoto,id} = req.body

    if(email == undefined || username == undefined || urlPhoto == undefined || id == undefined){
      return res.status(400).json({message:"There are some data missing"})
    }
    //console.log(typeof email)
    //console.log(req.body)
    
    if(email.split("@")[1] == "alu.ufc.br"){
        //console.log(email)
        return res.status(200).json({message:"This email is valid", email})
    }
     //console.log(email)
     return res.status(200).json({message:"This email is not valid", email})
     
 
     // autenticação com o google ==> Firebase
  }
} 

module.exports = LoginController
