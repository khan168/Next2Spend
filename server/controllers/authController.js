const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const {validationResult } = require("express-validator");


// @ desc       login user
// @ router     router /api/user/login
const login= async (req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ message: errors.array() });
        }
        const { email, password } = req.body;
        const user = await User.findOne({email:email}) 
        if(user && (await bcrypt.compare(password,user.password))){
            res.status(200).send({
                data:generateToken(user.id),
                message:"logged in successfully"
            })
        }
        else{
            res.status(401)
            res.send({message:"Invalid credentials"})
        }
    }catch(err){
            res.status(400)
            res.send({ message: err });
    }
}

// @ desc       sign up user
// @ router     router /api/user/signup
const  register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).send({ message: errors.array() });
            return;
        }
        const {name,email,password} = req.body;
        const existinguser = await User.findOne({ email: email });
        if(existinguser){
            return res.status(409).send({message:"Invalid credentials"})
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        if(user){
            res.status(201).send({
                data:generateToken(user.id),
                message:"user successfully created"
            })
        }else{
            return res.status(500).send({ message: "Invalid data" })  //case of server error
        }
    }catch(err){
        res.status(400);
        res.send({ message: err });
    }
}



//generate jwt
const generateToken = (id)=>{
    return jwt.sign(
        { id }, "abc123",{expiresIn:"30d"}
        );
}

module.exports={
    login,register
}