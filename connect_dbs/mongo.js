const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/cheesedb", {useNewUrlParser: true})

mongoose.connection.on("open", () => console.log("connected"))
mongoose.connection.on("close", () => console.log("disconnected"))

mongoose.connection.close()