import { DataTypes } from "sequelize";
    import connection from "../db/connection.js";
    
    const User = connection.define(
      "User",
      {
        // Model attributes are defined here
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        // Other model options go here
      }
    );
    
    User.sync({ alter: true });
    
    export default User;