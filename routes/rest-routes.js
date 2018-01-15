const router = require('express').Router();
const publicController = require('../controllers/rest-controller');

router.get('/', publicController.index);
// router.get('/profile', publicController.profile);
router.get('/help', publicController.help); 
router.post('/results', publicController.search); 
router.post('/location', publicController.show);
// router.post('/favorites', publicController.favorites); 
// router.post('/rating', publicController.rating); 
router.post('/help', publicController.help); 
// router.post('/search', controller.search)

module.exports = router;