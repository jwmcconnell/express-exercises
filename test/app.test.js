const request = require('supertest');
const app = require('../lib/app');

describe('static express server', () => {
  it('has a home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Hi'));
      });
  });
});
