import { Router } from 'express';
import { loginController, registerController } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/signup', registerController);
userRouter.post('/login', loginController)

export default userRouter;
