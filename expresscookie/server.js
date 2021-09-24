///////////////////////////////////////
// Load Dependencies
//////////////////////////////////////
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const morgan = require("morgan");
const cp = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");

//////////////////////////////////////
// Create Application Object
//////////////////////////////////////
const app = express();

/////////////////////////////////////
// Database Connection
////////////////////////////////////
mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to mongo")
);

///////////////////////////////////////
// User Model
///////////////////////////////////////
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

/////////////////////////////////////
// Auth Middleware
////////////////////////////////////
const auth = (req, res, next) => {
    if (!req.cookies.token){
        res.status(400).json({"error": "not authorized"})
    }
    req.payload = jwt.decode(req.cookies.token, process.env.SECRET)
    next()
}

/////////////////////////////////////
//Middleware
/////////////////////////////////////
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cp());
app.use(auth)
app.use(express.static("public"))

////////////////////////////////////
// Routes
////////////////////////////////////

app.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const user = await User.create(req.body);
  res.json(user);
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    const result = await bcrypt.compare(req.body.password, user.password);
    if (result) {
      const payload = { username: user.username };
      const token = jwt.sign(payload, process.env.SECRET);
      res
        .cookie("token", token, { httpOnly: true })
        .json({ message: "login successful" });
    } else {
      res.status(400).json({ error: "Password does not match" });
    }
  } else {
    res.status(400).json({ error: "User Not Found" });
  }
});

app.get("/test", (req, res) =>  res.json(req.payload))

////////////////////////////////////
// Server Listener
////////////////////////////////////
app.listen(4000, () => console.log("listening on port 4000"));
