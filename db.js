const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTerrain: getTerrain,
}

function getTerrain (db = connection)
  return db('world').select
