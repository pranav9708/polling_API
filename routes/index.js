const express = require('express');
const router=express.Router();

router.get('/questions',require('./question'));
router.get('/options',require('./options'));

module.exports = router;
