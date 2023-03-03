const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
// const CONSTANTS = require('../config/constant');
const RegisterController = (req, res) => {
    console.log("Registering the user details");
    const registerDetails = req.body;
    console.log("Recieved user details:", registerDetails);
    const password = registerDetails.password;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (error, salt) => {
        if(error){
            console.log(error);
        }
        else{
            bcrypt.hash(password, salt, (error, hashedPassword) => {
                if(error){
                    console.log(error);
                }
                else{
                    console.log("User has registered successfully ")
                    res.send({"hashedPassword":hashedPassword})
                }
            })
        }
    })
};

module.exports = {RegisterController};