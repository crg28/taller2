const pokeneaService = require('../services/pokenea.service');
const { getContainerId } = require('../utils/container');

const getRandomPokeneaJson = (req, res) => {
  const pokenea = pokeneaService.getRandomPokenea();

  res.json({
    ...pokeneaService.toSummary(pokenea),
    containerId: getContainerId(),
  });
};

const renderRandomPokenea = (req, res) => {
  const pokenea = pokeneaService.getRandomPokenea();

  res.render('pokenea', {
    ...pokeneaService.toDisplay(pokenea),
    name: pokenea.name,
    containerId: getContainerId(),
  });
};

const redirectToView = (req, res) => {
  res.redirect('/pokenea/view');
};

module.exports = { redirectToView, getRandomPokeneaJson, renderRandomPokenea };
