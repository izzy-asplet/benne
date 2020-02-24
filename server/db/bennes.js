
const config = require('../../knexfile').development

const connection = require('knex')(config)

function getBennes(db = connection) {
  return db('bennes')
}

function saveBennes(benne, db = connection) {
  return db('bennes')
}
module.exports = {
  getBennes,
  saveBennes,
}