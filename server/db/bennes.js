
const config = require('../../knexfile').development

const connection = require('knex')(config)

function getBennes(db = connection) {
  return db('bennes')
}

function saveBennes(bennes, db = connection) {
  return db('bennes')
  .insert(bennes)
}

module.exports = {
  getBennes,
  saveBennes,
}