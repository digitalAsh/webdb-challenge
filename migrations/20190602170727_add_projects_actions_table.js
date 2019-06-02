//creates projects and actions table
exports.up = async function(knex) {
    await  knex.schema.createTable('projects', (tbl) => {
        tbl.increments('id')
        tbl.string('name').unique().notNullable()
        tbl.string('description').notNullable()
        tbl.boolean('is_template').notNullable().defaultTo(false)
    })

    await knex.schema.createTable('actions', (tbl) => {
        tbl.increments('id')
        tbl.string('name').unique().notNullable()
        tbl.string('description').notNullable()
        tbl.boolean('is_template').notNullable().defaultTo(false)  
        tbl.integer('project_id').references('id').inTable('projects').onDelete('CASCADE')
          .onUpdate('CASCADE').notNullable()
    })      
  };
  //allows rollback to delete last migration
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('actions')
    await knex.schema.dropTableIfExists('projects')
    
  };