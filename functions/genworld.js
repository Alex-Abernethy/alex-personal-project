
// needs to insert an object for each DB row eg. {terrain: forrest}
// needs to insert rows into DB = to x*y

function genWorld(x, y) {
  console.log('world')

  let world = []
  let size = x * y

  for (let i = 0; i < size; i++) {
    world.push({terrain: terrainRandom()});
    
  }
  
}

module.exports = genWorld