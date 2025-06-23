import express, { Request, Response } from 'express';
import userRouter from './routes/user.routes';
import User from './models/user';
import { userAuth } from './middlewares/auth.middleware';

const app = express();

app.use(express.json());
app.use('/auth', userRouter);

app.post('/signup', (req: Request, res: Response) => {
    const user =  req.body;
    User.create(user);
    res.send('user created');``
});

app.post('/user',userAuth, (req: Request, res: Response) => {
    res.send('hi there');
});

app.listen(8085, () => {
    console.log("Server is listening on 8085");
});