const Question=require('../models/questions');
const Option=require('../models/options');

//controller function to add vote to an option using option's id
module.exports.addVote=async(req,res)=>{
    try{
        await Option.findByIdAndUpdate(req.params.id, {$inc:{votes:1}});
        return res.status(200).json({
            message:'Vote added to Option sucessfully'
        })
            
    }catch(err){
        return res.status(500).json({
            error:err,
            message:"Internal server error while adding vote to option"
        })
    }
}

//controller function to delete an option using options id
module.exports.deleteOption= async(req,res)=>{
    try{
        const id=req.params.id;
        let option =await Option.findById(id);
        //preventing from deleting an option if it is already voted
        if(option.votes>0){
            return res.status(401).json({
                message:'Option cannot be deleted as it already has votes > 0'
            })
        }

        //removing option from question before deleting the option
        await Question.findByIdAndUpdate(option.question,{$pull: {options:id}});
        await Option.findByIdAndDelete(id);

        return res.status(200).json({
            message:'Option deleted successfully'
        })

    }catch(err){
        return res.status(500).json({
            error:err,
            message:"Internal server error while deleting option"
        })
    }
}