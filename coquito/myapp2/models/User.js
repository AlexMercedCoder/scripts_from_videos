import mongoose from "../db/connection.js";

    // User SCHEMA - Definition/Shape of the Data Type
    const userSchema = new mongoose.Schema({
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    }, {timestamps: true})
    
    // User Model - Interface with the database for User
    const User = mongoose.model("User", userSchema)
    
    // Export the User Model
    export default User