import { DataTypes } from 'sequelize';
      import connection from "../db/connection.js"
      
      const Dog = connection.define('Dog', {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        // Other model options go here
      });
      
      await Dog.sync()
      
      export default Dog