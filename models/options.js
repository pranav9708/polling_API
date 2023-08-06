const mongoose=require('mongoose');

const optionSchema=new mongoose.Schema({
    question:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'question'
    },
    text:{
        type:String,
        required: true
    },
    votes:{
        type:Number,
        required: true
    },
    link_to_vote:{
        type: String,
    }
})

module.exports=mongoose.model('option',optionSchema);