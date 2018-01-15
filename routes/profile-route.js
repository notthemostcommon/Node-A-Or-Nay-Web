const router = require('express').Router();
const profController = require('../controllers/profile-controller');

router.get('/', profController.index);
router.get('/favorites', profController.favShow); 
router.get('/reviews', profController.reviewShow);
router.get('/:id/edit', profController.reviewEdit); 
// router.post('/reviews/edit', profController.update);
router.put('/:id', profController.update); 
router.delete('profile/:id', profController.delete); 


module.exports = router; 