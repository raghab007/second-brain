import { ObjectId } from "mongoose"
import Content from "../models/content"
import User from "../models/user"

export const getAllContent = async function (username: string) {
    const user = await User.findOne({
        username: username
    })
    const contents = await Content.find({
        user: user
    })
    return contents;
}

export const deleteContent = async function (id: string) {
    const content = await Content.find({
        id: id
    })
    if (content) {
        await Content.deleteOne({
            _id: id
        })
        return {
            message: "content deleted"
        }
    } else {
        return {
            message: "content doesnot exists"
        }

    }
}