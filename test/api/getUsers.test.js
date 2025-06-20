import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app.js'; 


describe('GET /api/users', () => {
  it('should return list of users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.status).to.equal(200);
    //console.log('Response body:', response.body);
    expect(response.body).to.be.an('array');

    if (response.body.length > 0) {
      expect(response.body[0]).to.have.property('id');
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('email');
      expect(response.body[0]).to.have.property('status');
    }
  });
});

