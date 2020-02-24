
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bennes').del()
    .then(function () {
      // Inserts seed entries
      return knex('bennes').insert([
        {id: 1, cafe_name: 'Neo', image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/f6/ba/f2/eggs-benedict-with-cured.jpg', variation: 'salmon', price: '20', rating: '9'},
        {id: 2, cafe_name: 'Fidels', image: 'https://isastudentblog.files.wordpress.com/2016/05/fidels-cafe-wellington-new-zealand-moscardi-photo-4.jpg', variation: 'bacon', price: '18', rating: '7'},
        {id: 3, cafe_name: 'Colonial Cafe', image: 'https://b.zmtcdn.com/data/pictures/0/7102210/5e6c7dcfaa4b8d039dff582076835775_featured_v2.jpg', variation: 'spinach', price: '15', rating: '5'}
      ]);
    });
};
