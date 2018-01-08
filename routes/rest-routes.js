const router = require('express').Router();
const restController = require('../controllers/rest-controller');

router.get('/', restController.search);
r
// router.post('/search', controller.search)

module.exports = router;