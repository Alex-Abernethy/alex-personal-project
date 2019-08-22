

function modWorld(X, Y, terrainType) {
  let mod = {id: 1, terrain: 'placeholder'}

  mod.id = x + (y-1) * 20
  mod.terrain = terrainType

  return mod
}

module.exports = modWorld