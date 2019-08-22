const express = require('express')
const modWorld = require('../functions/modWorld')

const db = require('../db')

const router = express.Router()

router.get('/worldMod', (req, res) => {
      res.render('worldModification')
})

router.post('/worldMod', (req, res) => {
  var mod = modWorld(req.body.X, req.body.Y, req.body.terrainType)
  db.modWorld(mod)
  res.redirect('/')
})

module.exports = router