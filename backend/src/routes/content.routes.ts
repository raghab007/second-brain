import { Router } from "express";
import { createContent, deleteContentController, getAllContentController } from "../controllers/content.controller";

const contentRouter = Router();

contentRouter.get('/', getAllContentController)

contentRouter.post('/', createContent)

contentRouter.delete('/:id', deleteContentController)

export default contentRouter; 