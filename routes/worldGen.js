const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/worldGen', (req, res) => {
      res.render('worldGenerator')
})

module.exports = router