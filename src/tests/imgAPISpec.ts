import app from '..';
import supertest from 'supertest';

const request = supertest(app);

describe('testing image processing api endpoint ', (): void => {
    it('testing the endpoint without query params returns 400', async (): Promise<void> => {
        await request.get('/api').expect(400);
    });

    it('testing the endpoint without hight query param returns 400', async (): Promise<void> => {
        await request.get('/api?name=fjord&width=1000').expect(400);
    });

    it('testing the endpoint without width query param returns 400', async (): Promise<void> => {
        await request.get('/api?name=fjord&hight=1000').expect(400);
    });

    it('testing the endpoint without name query param returns 400', async (): Promise<void> => {
        await request.get('/api?hight=1000&width=1000').expect(400);
    });

    it('testing the endpoint using unfound name returns 200', async (): Promise<void> => {
        await request.get('/api?name=sage&hight=500&width=1000').expect(404);
    });

    it('testing the endpoint using -ve hight query param returns 406', async (): Promise<void> => {
        await request.get('/api?name=fjord&hight=-700&width=1000').expect(406);
    });

    it('testing the endpoint without using non posative int hight query param returns 406', async (): Promise<void> => {
        await request.get('/api?name=fjord&hight=ten&width=').expect(406);
    });

    it('testing the endpoint using -ve width query param returns 406', async (): Promise<void> => {
        await request.get('/api?name=fjord&hight=700&width=-1000').expect(406);
    });

    it('testing the endpoint without using non posative int width query param returns 400', async (): Promise<void> => {
        await request.get('/api?name=fjord&hight=700&width=ten').expect(406);
    });

    it('testing the endpoint without using valid query params returns 200', async (): Promise<void> => {
        await request.get('/api?name=fjord&hight=500&width=1000').expect(200);
    });
});
