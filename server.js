const express = require('express')
const hbs = require('express-handlebars')

const homeRoute = require('./routes/home')
const genRoute = require('./routes/worldGen')
const worldMod = require('./routes/worldMod')

const server = express()

// Middleware

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/', homeRoute)
server.use('/', genRoute)
server.use('/', worldMod)

module.exports = server
