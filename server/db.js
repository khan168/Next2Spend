const { default: mongoose } = require("mongoose")

module.exports = ()=>{
    const connectionParams={ useNewUrlParser: true, useUnifiedTopology: true}
    try {
        mongoose.connect(
          "mongodb+srv://khan162:oR95WrvGSrNyycXn@cluster0.dnivg54.mongodb.net/NextSpend?retryWrites=true&w=majority"
        );
        console.log("Successfully connected");
    } catch (error) {
        console.log(error);
        console.log("couldn't connect to DB");
    }
}