const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  
  // needs to get terrain instead

  // db.getUsers()
  //   .then(users => {
  //     res.render('index', {users: users})
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

module.exports = router
