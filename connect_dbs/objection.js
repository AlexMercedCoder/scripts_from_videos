const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'example.db'
    }
  });

// Give the knex instance to objection.
Model.knex(knex);

// Person model.
class Person extends Model {
    static get tableName() {
      return 'persons';
    }
  
    static get relationMappings() {
      return {
        children: {
          relation: Model.HasManyRelation,
          modelClass: Person,
          join: {
            from: 'persons.id',
            to: 'persons.parentId'
          }
        }
      };
    }
  }

  