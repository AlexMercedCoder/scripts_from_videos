//////////////////////////////////
// Setup all your env variables here
//////////////////////////////////

import dotenv from "dotenv"

dotenv.config()

export default {
    PORT: process.env.PORT || 4000,
    NODE_ENV: process.env.NODE_ENV || "development",
    DATABASE_URL: process.env.DATABASE_URL || "",
    USEBASEPATH: process.env.USEBASEPATH || "false"
}