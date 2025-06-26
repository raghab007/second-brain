import mongoose, { Schema } from "mongoose";
const linkSchema = new Schema({
    hash: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})


const Link = mongoose.model('Link', linkSchema)

export { Link };