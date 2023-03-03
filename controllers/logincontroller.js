const jwt = require('jsonwebtoken');
const CONSTANTS = require('../config/Constant');

const LoginController = (req, res) => {
    console.log("login controller");
    const loginDetails = req.body;
    
    if(loginDetails.username && loginDetails.password){
        console.log("Recieved login details =>", loginDetails);
        const jwtToken = jwt.sign(loginDetails, CONSTANTS.SECRET_KEY);
        return res.status(200).send({"token": jwtToken});
    }
    else{
        return res.status(400).send({message:"Invalid credentials"});
    }
};

module.exports = {LoginController};