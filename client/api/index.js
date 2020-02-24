import request from 'superagent'

export function getBennes() {
  return request.get('/v1/bennes')
  .then(res => {
    return res.body
  })
}

export function saveBenne(benne) {
  return request
    .post('/v1/bennes')
    .send(benne)
    .then(res => res.body)
}