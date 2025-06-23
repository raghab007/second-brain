import { NextFunction, Request, Response } from "express";

 export function userAuth(request:Request,response:Response,next:NextFunction) {
       const token =  request.headers.authorization;
       console.log(token);
       response.send(token);
}

