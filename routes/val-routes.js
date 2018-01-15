const router = require('express').Router();
const valController = require('../controllers/val-controller');

router.get('/', valController.index);
router.get('/profile', valController.profile);
router.get('/help', valController.help); 
router.post('/results', valController.search); 
router.post('/location', valController.show);
router.post('/favorites', valController.favorites); 
router.post('/rating', valController.rating); 
router.post('/help', valController.help); 
// router.post('/search', controller.search)

module.exports = router;