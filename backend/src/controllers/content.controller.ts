import Content from "../models/content";
import User from "../models/user";
import Tag from "../models/tag";
import { Request, response, Response } from "express";
import { getAllContent } from "../services/content.service";

export async function createContent(req: Request, res: Response) {
    try {
        const body = req.body;
        const user = await User.findOne({
            username: (req as any).user.username
        });
        const userId
            = user?.id

        const tagIds: any = [];

        for (const tag of body.tags) {
            let result = await Tag.findOne({ title: tag });
            if (!result) result = await Tag.create({ title: tag });
            tagIds.push(result.id);
        }
        const content = {
            type: body.type,
            link: body.link,
            tag: tagIds,
            title: body.title,
            user: userId
        }

        const finalOutput = await Content.create(content);
        res.status(200).send({
            message: "content created"
        })

    }
    catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }
}
export async function getAllContentController(req: Request, res: Response) {
    const username = (req as any).user.username;
    const contents = await getAllContent(username)
    res.status(200).send(contents);
}
