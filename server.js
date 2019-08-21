const express = require('express')
const hbs = require('express-handlebars')

const homeRoute = require('./routes/home')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', homeRoute)

module.exports = server
