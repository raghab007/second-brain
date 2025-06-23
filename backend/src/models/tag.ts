import { Schema } from "mongoose";
import mongoose from "../db/db";
const tagSchema = new Schema({
    title:String
})

const Tag = mongoose.model('Tag', tagSchema);
export default Tag;

