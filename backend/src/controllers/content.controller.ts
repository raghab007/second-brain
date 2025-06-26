import Content from "../models/content";
import User from "../models/user";
import Tag from "../models/tag";
import { Request, Response } from "express";
import { deleteContent, getAllContent } from "../services/content.service";
import brcypt from 'bcrypt'
import { Link } from "../models/link";

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


export async function deleteContentController(req: Request, res: Response) {
    try {
        const id = req.params.id
        const result = await deleteContent(id);
        console.log(result);
        res.send({
            message: "Content deleted successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Server error!"
        })
    }
}


export async function createShareableLinkController(req: Request, res: Response) {
    const username = (req as any).user.username;
    const user = await User.findOne({
        username: username
    })
    try {
        const link = {
            hash: await brcypt.hash(username, 10),
            user: user?.id
        }
        console.log('link')
        console.log(link)

        const createdLink = await Link.create(link);

        res.send(createdLink);



    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Server error"
        })
    }
}


export async function getBrainController(req: Request, res: Response) {
    const hash = req.body.hash;
    const user = await Link.findOne({
        hash: hash
    })

    const contents = await Content.find(
        {
            user: user?.user
        }
    )

    res.send(contents);
}


