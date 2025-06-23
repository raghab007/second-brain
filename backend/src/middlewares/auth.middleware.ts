import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import User from "../models/user";

export async function userAuth(request: Request, response: Response, next: NextFunction) {
      const token = request.headers.authorization;
      if (!token) {
            response.status(401).send({
                  message: "Invalid token"
            })
      } ``
      console.log(token)
      const bearerToken = token?.split(' ')[1];
      //@ts-ignore
      const out = jwt.verify(bearerToken, 'ragagahsgashagsha')
      const user = await User.findOne({
            username: out.username
      })
      const user1 = {
            username: user?.username,
            password: user?.password
      }
      request.body.username = user?.username;
      next();
}

