
const terrainRandom = require('./terrainRandom')

// needs to insert an object for each DB row eg. {terrain: forrest}
// needs to insert rows into DB = to x*y

function genWorld(x, y) {
  let worldSetup = []
  let size = x * y

  for (let i = 0; i < size; i++) {
     worldSetup.push({terrain: terrainRandom()});
  }
  return worldSetup
}

module.exports = genWorld