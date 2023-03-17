const express = require('express')
bodyParser = require("body-parser")
require("dotenv").config();
const app = express();
const cors =require("cors")

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());    //added extra, may cause error
app.use(cors());

const PORT = process.env.PORT ||  5000;
const mongoose = require("mongoose");
const connect = require("./db")


// database connection
connect()


app.listen(PORT,()=>{console.log(`listening on port ${PORT}`);})
app.use("/api/user",require("./routes/userRoutes"))  //signup, login , getuserinfo
app.use("/api/transactions", require("./routes/transactionRoutes"));
