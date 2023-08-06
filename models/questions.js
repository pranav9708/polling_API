const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    options:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'option'
        }
    ]
})

module.exports=mongoose.model('question',questionSchema);