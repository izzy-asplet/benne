
const config = require('../../knexfile').development

const connection = require('knex')(config)

function getBennes(db = connection) {
  return db('bennes')
}

function saveBenne(benne, db = connection) {
  // console.log(benne)
  return db('bennes')
  .insert({
    cafe_name: benne.cafeName,
    image: benne.image,
    variation: benne.variation,
    price: benne.price,
    rating: benne.rating
  })
}

module.exports = {
  getBennes,
  saveBenne,
}