import { Request, Response } from "express";
import { signup,login } from "../services/user.service";
export const registerController =   async (req: Request, res: Response) => {
    try{
    const user = req.body;
    const response = await signup(user);
    res.send(response);
    }catch(error){
        console.log(error)
    }
}

export const loginController  =  async (req:Request, res:Response)=>{
    try {
        const user  = req.body;
        const response =  await login(user);
        res.status(200).send(response);
    }
    catch (error){
        console.log(error)
        res.status(500).send({
            message:"Server Error"
        })
    }
}