const express = require('express');
const router = express.Router();

const contacController = require('../controllers/contacController');

router.get('/',contacController.index);


module.exports = router;