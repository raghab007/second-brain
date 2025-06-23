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