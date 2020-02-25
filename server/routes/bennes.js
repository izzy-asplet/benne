const express = require('express')

const db = require('../db/bennes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBennes()
  .then(benneData => {
    res.json(benneData)
  })
})

router.post('/', (req, res) => {
  // console.log(req.body)
  db.saveBenne(req.body)
  .then(benne => {
    res.json(benne)
  })
})

module.exports = router
