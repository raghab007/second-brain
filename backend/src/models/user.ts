import { Schema } from "mongoose";
import mongoose from "../db/db";
const userSchema = new Schema({
    username:String,
    password:String
})


const User =  mongoose.model('User', userSchema);
export default User;
