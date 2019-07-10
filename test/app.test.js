const request = require('supertest');
const app = require('../lib/app');

describe('list of dogs page', () => {
  it('returns an html page', () => {
    return request(app)
      .get('/');
  });
});
