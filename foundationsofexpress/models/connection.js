import mongoose from "mongoose"

// connect to database
mongoose.connect("mongodb://localhost:27017/practiceexpress")

mongoose.connection
.on("open", () => console.log("connected to mongodb"))


export default mongoose