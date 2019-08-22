const express = require('express')
const genWorld = require('../functions/genWorld')

const db = require('../db')

const router = express.Router()

router.get('/worldGen', (req, res) => {
      res.render('worldGenerator')
})

router.post('/worldGen', (req, res) => {
  var world = genWorld(req.body.X, req.body.Y)
  db.buildWorld(world)
  res.redirect('/')
})

module.exports = router