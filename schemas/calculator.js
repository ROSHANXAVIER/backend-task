var mongoose=require('mongoose');

const calculatorSchema=new mongoose.Schema({
    result:{type:String,default:""},},
    {collection:'Calculator'}
)
const s1=mongoose.model('calculatorModel',calculatorSchema)
module.exports=s1;