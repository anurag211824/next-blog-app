import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email:{type:String,required:true},
    date:{type:Date,default:Date.now()}
})

export default mongoose.model("Email",Schema)