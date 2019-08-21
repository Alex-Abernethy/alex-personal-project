const express = require('express')
const genWorld = require('../functions/genworld')

const db = require('../db')

const router = express.Router()

router.get('/worldGen', (req, res) => {
      res.render('worldGenerator')
})

router.post('/worldGen', (req, res) => {
  const world = genworld(req.body.x, req.body.y)
  db.buildWorld(world)
  res.redirect('/')
})

module.exports = router