const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => res.send('OK'));

test('GET /health', async () => {
  const res = await request(app).get('/health');
  expect(res.text).toBe('OK');
});
