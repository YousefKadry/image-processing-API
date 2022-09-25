import express from 'express';
import home_router from './routes/home';

const app = express();
const port = 3000;

app.use(home_router);

app.listen(port, (): void => {
    console.log('http://localhost:3000');
});

export default app;
