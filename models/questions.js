const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    question:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'question'
    },
    text:{
        type:String,
        required: true
    },
    votes:{
        type:Number
    },
    link_to_vote:{
        type: String,
        required: true
    }
    
})

module.exports=mongoose.model('option',questionSchema);