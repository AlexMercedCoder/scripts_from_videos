require("dotenv").config();
const mongoose = require("mongoose");

//connect
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//messages
mongoose.connection
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", (error) => console.log("------\n" + error + "------\n"));

// export connection
module.exports = mongoose
