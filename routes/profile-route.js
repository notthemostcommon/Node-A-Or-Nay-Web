const router = require('express').Router();
const profController = require('../controllers/profile-controller');

router.get('/', profController.index);
router.get('/favorites', profController.favShow); 
router.get('/reviews', profController.reviewShow); 
// router.put('/favorites/edit', profController.reviewEdit); 

module.exports = router; 