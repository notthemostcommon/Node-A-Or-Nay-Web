const router = require('express').Router();
const restController = require('../controllers/rest-controller');

router.get('/', restController.index);
router.get('/profile', restController.profile);
router.post('/results', restController.search); 
router.post('/location', restController.show);
router.post('/favorites', restController.favorites); 
router.post('/rating', restController.rating); 
router.post('/help', restController.help); 
// router.post('/search', controller.search)

module.exports = router;