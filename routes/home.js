const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTerrain()
  .then(terrain => {
      res.render('index', {terrain: terrain})
  })
})

module.exports = router
