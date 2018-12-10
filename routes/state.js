const express = require('express')
const router = express.Router();
const StateController = require('../controllers/state');
router.get('/', StateController.getStates);
router.get('/cities', StateController.getCities);

module.exports = router;
