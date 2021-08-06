//----------------------------------------
//  Import Dependencies
//----------------------------------------
import mongoose from "./connection.js";
import { log } from "mercedlogger";

//----------------------------------------
//  DROP DATABASE
//----------------------------------------
const drop = async () => {
  mongoose.connection.on("open", async () => {
    await mongoose.connection.db.dropDatabase();
    log.red("DROPPED", "DATABASE HAS BEEN DROPPED")
    mongoose.disconnect()
  });
};

drop();
