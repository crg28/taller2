const pokeneas = require('../data/pokeneas');
const config = require('../config');

const getRandomPokenea = () => pokeneas[Math.floor(Math.random() * pokeneas.length)];

const toSummary = ({ id, name, height, ability }) => ({ id, name, height, ability });

const toDisplay = ({ image, philosophicalPhrase }) => ({
  imageUrl: `${config.imagesBaseUrl}/${image}`,
  philosophicalPhrase,
});

module.exports = { getRandomPokenea, toSummary, toDisplay };
