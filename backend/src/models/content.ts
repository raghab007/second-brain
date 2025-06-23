import mongoose from "../db/db";
import { Schema } from "mongoose";
const contentSchema = new Schema({
    type:{type:String,enum:['document','tweet','youtube','link']},
    link:String,
    title:String,
    tag:[
        {
            type:Schema.Types.ObjectId,
            ref:'Tag'
        }
        ],
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
const Content = mongoose.model('Content', contentSchema);
export default Content;



