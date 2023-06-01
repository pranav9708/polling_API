const express = require('express');
const router=express.Router();
const questionController=require('../controllers/question_controller');

router.post('/create',questionController.create);
router.post('/:id/options/create',questionController.createOptions);
router.delete('/:id/delete',questionController.delete);
router.get('/:id',questionController.viewQuestions);

module.exports = router;