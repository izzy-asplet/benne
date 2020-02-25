import request from 'superagent'

export function getBennes() {
  return request
  .get('/v1/bennes')
  .then(res => {
    return res.body
  })
}

export function saveBenne(benne) {
  return request
    .post('/v1/bennes')
    .insert({
      cafe_name: benne.cafe_name,
      image: benne.image,
      variation: benne.variation,
      price: benne.price,
      rating: benne.rating
    })
    .send(benne)
    .then(res => res.body)
}