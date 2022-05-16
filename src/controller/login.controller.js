const loginController = (req, res) => {
    if(req.body.email == undefined || req.body.password == undefined){
        return res.status(400).json({message:"Data is missing!"})
    }
 
    const {email, password} = req.body
    if(email.split("@")[1] == "alu.ufc.br"){
        return res.status(200).json({message:"This email is valid", email:email})
     }
     return res.status(200).json({message:"This email is not valid", email:email})
 
     // autenticação com o google ==> Firebase
     
 }

module.exports = {loginController}