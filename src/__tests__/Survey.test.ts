import supertest from 'supertest';
import { app } from '../app';

const request = supertest(app);

import createConnection from '../database';

describe('Users', async () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new survey', async () => {
    const response = await request.post('/surveys').send({
      title: 'anyTitle',
      description: 'Any Description',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
