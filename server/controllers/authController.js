const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken")
require("dotenv").config();

// @ desc       login user
// @ router     router /api/user/login
const login= async (req,res)=>{
    const { email, password } = req.body;
    try{
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
            throw new Error("Invalid credentials")
        }
    }catch(err){
        res.json({ err: "Invalid credentials" });
    }
}

// @ desc       sign up user
// @ router     router /api/user/signup
const  register = async (req, res,next) => {

    const {name,email,password} = req.body;
    
    try{
        if (!email || !name || !password) {
            throw { message: "please add all fields" };
        }
        const existinguser = await User.findOne({ email: email });
        if(existinguser){
            res.status(400)
            throw {message:"Invalid credentials"}
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
            }
            )
        }else{
            throw { message: "Invalid data" };
        }
    }catch(err){
        if(!err.message){
            res.status(400);
            res.json({ err: "Invalid credentials" });
        }else{
            res.json({ err: err.message });
        }
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