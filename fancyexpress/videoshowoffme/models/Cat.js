
      //----------------------------------------
      //  Import Dependencies
      //----------------------------------------
      import mongoose from "../db/connection.js";
      const {Schema, model} = mongoose;
      
      //----------------------------------------
      //  New Schema
      //----------------------------------------
      
      const CatSchema = new Schema({
            name: String,
            age: Number
      }, { timestamps: true });
      
      //----------------------------------------
      //  Generate Model
      //----------------------------------------
      
      const Cat = model("Cat", CatSchema)
      
      //----------------------------------------
      //  Export Module
      //----------------------------------------
      export default Cat
       