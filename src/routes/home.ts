import { Router, Request, Response } from 'express';
import router from './imgAPI';

const home_router = Router();

home_router.get('/', (req: Request, res: Response) => {
    res.send('welcome to my image processing API');
});

home_router.use('/api', router);

export default home_router;
