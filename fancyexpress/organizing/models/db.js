
require("dotenv").config()
const mongoose = require("mongoose");

////////////////////////////////////
// Connect to Database
///////////////////////////////////
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/////////////////////////////////////
// Database Events
/////////////////////////////////////
mongoose.connection
.on("open", ()=> {console.log("Mongo Connection is Open")})
.on("close", ()=> {console.log("Mongo Connection is closed")})
.on("error", (error)=> {
    console.log("ERROR-----------------------------------------------------------")
    console.log(error)
    console.log("ERROR-----------------------------------------------------------")
})

module.exports = mongoose