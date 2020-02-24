
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bennes').del()
    .then(function () {
      // Inserts seed entries
      return knex('bennes').insert([
        {id: 1, cafe_name: 'rowValue1', image: '', price: '', rating: ''},
        {id: 2, cafe_name: 'rowValue2', image: '', price: '', rating: ''},
        {id: 3, cafe_name: 'rowValue3', image: '', price: '', rating: ''}
      ]);
    });
};
