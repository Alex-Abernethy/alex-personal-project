exports.up = (knex, Promise) => {
  return knex.schema.createTable('world', (table) => {
    table.increments('id').primary()
    table.interger('x')
    table.interger('y')
    table.string('terrain')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
