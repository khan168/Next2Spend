const express = require("express");
const { login, register,getuser } = require("../controllers/authController");
const router = express.Router();
const {Auth} = require("../middleware/authMiddleware")
const { validate } = require("../middleware/validatorMiddleware");

router.post("/login",validate('loginUser'), login);     //validate middleware 

router.post("/signup",validate('createUser'),register);

router.get("/getuser",Auth,getuser);

module.exports = router;
