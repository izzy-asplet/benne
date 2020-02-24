
exports.up = function(knex) {
  return knex.schema.createTable('bennes', table => {
    table.increments('id')
    table.string('cafe_name')
    table.string('image')
    table.decimal('price')
    table.string('rating') 
})
}

exports.down = function(knex) {
  return knex.schema.dropTable('bennes')
}
