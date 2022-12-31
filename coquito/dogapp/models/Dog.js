import { DataTypes } from 'sequelize';
      import connection from "../db/connection.js"
      
      const Dog = connection.define('Dog', {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: DataTypes.NUMBER
        }
      }, {
        // Other model options go here
      });
      
      Dog.sync()
      
      export default Dog