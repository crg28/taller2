const { Router } = require('express');
const controller = require('../controllers/pokenea.controller');

const router = Router();

router.get('/', controller.redirectToView);
router.get('/pokenea/json', controller.getRandomPokeneaJson);
router.get('/pokenea/view', controller.renderRandomPokenea);

module.exports = router;
