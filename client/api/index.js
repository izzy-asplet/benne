import request from 'superagent'

export function getBennes() {
  return request
  .get('/v1/bennes')
  .then(res => {
    console.log(res.body)
    return res.body
  })
}

export function saveBenne(benne) {
  console.log(benne)
  return request
    .post('/v1/bennes')

    .send(benne)
    .then(res => res.body)
}