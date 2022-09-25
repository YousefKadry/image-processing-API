import app from '..';
import supertest from 'supertest';

const request = supertest(app);

describe('testing home endpoint', (): void => {
    it('checking end point if it returns 200', async (): Promise<void> => {
        await request.get('/').expect(200);
    });
});
