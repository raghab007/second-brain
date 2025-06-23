import { Router } from "express";
import { createContent, getAllContent } from "../controllers/content.controller";

const contentRouter = Router();

//contentRouter.get('/content', getAllContent)

contentRouter.post('/',  createContent)

export default contentRouter;