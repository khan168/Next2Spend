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
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const { email, password } = req.body;
        const user = await User.findOne({email:email}) 
        if(user && (await bcrypt.compare(password,user.password))){
            res.json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user.id)
            })
        }
        else{
            res.status(400)
            res.json({error:"Invalid credentials"})
        }
    }catch(err){
            res.status(400)
            res.json({ error: err });
    }
}

// @ desc       sign up user
// @ router     router /api/user/signup
const  register = async (req, res,next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const {name,email,password} = req.body;
        const existinguser = await User.findOne({ email: email });
        if(existinguser){
            return res.status(400).json({error:"Invalid credentials"})
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        if(user){
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user.id)
            })
        }else{
            return res.status(400).json({ error: "Invalid data" })
        }
    }catch(err){
        res.status(400);
        res.json({ error: err });
    }
}

// @ desc       get user data
// @ router     router /api/user/getuser
// @ protected
const getuser =async (req,res)=>{
    try{
        const {_id,name,email} = await User.findById(req.user.id)
        res.status(200).json({
            id:_id,
            name,
            email
        })
    }catch(err){
        res.status(500).json({error:err})
    }
}



//generate jwt
const generateToken = (id)=>{
    return jwt.sign(
        { id }, process.env.JWT_SECRET,{expiresIn:"30d"}
        );
}

module.exports={
    login,register,getuser
}