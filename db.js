const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTerrain: getTerrain,
  buildWorld: buildWorld,
  modWorld: modWorld,
}

function getTerrain (db = connection) {
  return db('world').select()
}

function buildWorld (world, db = connection) {
  return db('world')
  .insert(world)
  .then(
    console.log('inserted')
  )
}

function modWorld (mod, db = connection) {
  return db('world')
    .update(mod)
    .then(
      console.log('modified')
    )
}