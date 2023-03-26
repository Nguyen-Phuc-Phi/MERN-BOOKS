import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    publishdate:{
        type:Date,
    },
    publisher:{
        type:String,
    },
    updateddate:{
        type:Date,
        default:Date.now()
    },
})
export default mongoose.model('Book',bookSchema)