const router = require('express').Router();
const restController = require('../controllers/rest-controller');

router.get('/', restController.index);
router.post('/results', restController.search); 
router.post('/location', restController.show);
router.post('/favorites', restController.favorites); 
// router.post('/search', controller.search)

module.exports = router;