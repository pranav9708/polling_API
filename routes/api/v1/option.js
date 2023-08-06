const express = require('express');
const router=express.Router();
const optionController=require('../../../controllers/api/v1/option_controller');

router.post('/:id/add_vote',optionController.addVote);
router.delete('/:id/delete',optionController.deleteOption);

module.exports = router;