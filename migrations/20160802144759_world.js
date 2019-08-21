exports.up = (knex, Promise) => {
  return knex.schema.createTable('world', (table) => {
    table.increments('id').primary()
    table.string('terrain')
    table.integer('x')
    table.integer('y')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
