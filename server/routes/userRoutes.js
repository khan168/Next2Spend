const express = require("express");
const { login, register,getuser } = require("../controllers/authController");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")

router.post("/login", login);

router.post("/signup",register);

router.get("/getuser",protect,getuser);

module.exports = router;
