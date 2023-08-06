const express = require('express');
const router=express.Router();
const questionController=require('../../../controllers/api/v1/question_controller');

router.post('/create',questionController.createQuestion);
router.post('/:id/options/create',questionController.addOption);
router.delete('/:id/delete',questionController.deleteQuestion);
router.get('/:id',questionController.viewQuestion);

module.exports = router;