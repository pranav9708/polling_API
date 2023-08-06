const express = require('express');
const router=express.Router();

//routing questions to questions route and options to options route
router.use('/questions',require('./question'));
router.use('/options',require('./option'));

module.exports = router;
