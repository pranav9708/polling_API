const Question=require('../models/questions');
const Option=require('../models/options');

module.exports.createQuestion=async(req,res)=>{
    try{
        let question = await Question.create(req.body);
        return res.status(200).json({
            newQuestion: question,
            message: 'Question created successfully'
        });
            
    }catch(err){
        return res.status(500).json({
            error:err,
            message:"Internal server error while creating a new question"
        })
    }
}

module.exports.addOption=async(req,res)=>{
    try{
        let question =await Question.findById(req.params.id);
        if(question){
            let option =await Option.create({
                question: question._id,
                text: req.body.text,
                votes:0
            });

            option.link_to_vote=`http://localhost:8000/options/${option._id}/add_vote`;
            option.save();

            question.options.push(option);
            question.save();

            return res.status(200).json({
                newOption:option,
                message: 'newOption added successfully'
            })
        }else{
            res.status(404).json({
                message: `Couldn't find question with ID ${req.params.id}`
            })
        }
    }catch(err){
        return res.status(500).json({
            error:err,
            message:"Internal server error while creating a new option"
        })
    }
}

module.exports.viewQuestion=async(req,res)=>{
    try{
        let question = await Question.findById(req.params.id).populate('options');
        if(question){
            return res.status(200).json({
                question:question,
                message: 'Question found successfully'
            })
        }else{
            return res.status(404).json({
                message: `Couldn't find question with id ${req.params.id}`
            })
        }
    }catch(err){
        return res.status(500).json({
            error:err,
            message:"Internal server error while viewing question"
        })
    }
}

module.exports.deleteQuestion = async(req,res)=>{
    try{
        let question = await Question.findById(req.params.id);
        for(let option of question.options){
            if(option.votes>0){
                return res.status(401).json({
                    message:"Question cannot be deleted as its options votes is greater than 0"
                })
            }
        }

        for(let option of question.options){
            await Option.findByIdAndDelete(option._id);
        }
        await Question.findByIdAndDelete(req.params.id);
        
        return res.status(200).json({
            message:"Question deleted successfully"
        })

    }catch(err){
        return res.status(500).json({
            error:err,
            message:"Internal server error while deleting question"
        })
    }
}