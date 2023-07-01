const mongoose=require('mongoose')
const {Schema}=mongoose;
const StudentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('student',StudentSchema)
    