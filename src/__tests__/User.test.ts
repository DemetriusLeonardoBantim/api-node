import supertest from 'supertest';
import { app } from '../app';

const request = supertest(app);

import createConnection from '../database';

describe('Users', async () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new user', async () => {
    const response = await request.post('/users').send({
      email: 'demetriusleonardo@gmail.com',
      name: 'Demetrius Leonardo',
    });
    expect(response.status).toBe(201);
  });
  it('Should not be able to create a user with exists email', async () => {
    const response = await request.post('/users').send({
      email: 'demetriusleonardo@gmail.com',
      name: 'Demetrius Leonardo',
    });
    expect(response.status).toBe(400);
  });
});
