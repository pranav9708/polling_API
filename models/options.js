const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
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