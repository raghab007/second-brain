import { Router } from "express";
import { createContent, createShareableLinkController, deleteContentController, getAllContentController, getBrainController } from "../controllers/content.controller";

const contentRouter = Router();

contentRouter.get('/', getAllContentController);

contentRouter.post('/', createContent);

contentRouter.delete('/:id', deleteContentController);

contentRouter.post('/link', createShareableLinkController);

contentRouter.get('/getlink', getBrainController)


export default contentRouter; 