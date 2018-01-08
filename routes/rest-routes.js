const router = require('express').Router();
const restController = require('../controllers/rest-controller');

router.get('/', restController.index);
router.post('/results', restController.search); 
console.log("inside rest-routes")
// router.post('/search', controller.search)

module.exports = router;