import { DataTypes } from 'sequelize';
      import connection from "../db/connection.js"
      
      const Cat = connection.define('Cat', {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        // Other model options go here
      });
      
      await Cat.sync()
      
      export default Cat