const request = require('supertest');
const app = require('../src/server'); // Adjust if server exports the Express app

describe('Todo API', () => {
  it('should return 200 for GET /todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
  });
});
