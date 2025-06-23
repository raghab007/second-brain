import { Router } from "express";
import { createContent, getAllContentController } from "../controllers/content.controller";

const contentRouter = Router();

contentRouter.get('/', getAllContentController)

contentRouter.post('/', createContent)

export default contentRouter; 