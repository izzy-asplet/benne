const path = require('path')
const express = require('express')

const server = express()
const benneRoutes = require('./routes/bennes')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/bennes', benneRoutes)

module.exports = server
