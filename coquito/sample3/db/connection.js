
    import {Sequelize} from "sequelize"
    import dotenv from "dotenv"
    
    // load .env variables
    dotenv.config()
    
    // establish connection
    // Define DATABASE_URL in .env
    const connection = new Sequelize(process.env.DATABASE_URL)
    
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
    export default connection
    