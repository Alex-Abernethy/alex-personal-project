const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTerrain: getTerrain,
  buildworld: buildWorld,
}

function getTerrain (db = connection) {
  return db('world').select()
}

function buildWorld (world, db = connection) {
  return db('world')
  .insert(world)
}