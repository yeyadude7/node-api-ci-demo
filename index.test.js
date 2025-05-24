const request = require('supertest');
const app = require('./app');

test('GET /health', async () => {
  const res = await request(app).get('/health');
  expect(res.text).toBe('OK');
});

test('GET /fib?id=2 should return 1', async () => {
    const res = await request(app).get('/fib?id=2');
    expect(res.text).toBe('1');
});

test('GET /fib?id=24 should return 46368', async () => {
    const res = await request(app).get('/fib?id=2');
    expect(res.text).toBe('1');
});