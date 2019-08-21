var textArray = [
  'forrest',
  'desert',
  'mountain',
  'sea',
  'lake',
  'grassland'
];

function randomiser() {
  return randomNumber = Math.floor(Math.random()*textArray.length);
}

function terrainRandom() {
  return textArray[randomiser()]
}


module.exports = terrainRandom