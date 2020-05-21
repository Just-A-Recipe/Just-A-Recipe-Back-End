require('dotenv').config();

const request = require('supertest');
const app = require('../app');
const connect = require('../utils/connect');
const mongoose = require('mongoose');
const User = require('../models/User');

describe('auth routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('signs up a user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({ username: 'jim', password: 'jimwashere' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'jim',
          __v: 0
        });
      });
  });

  it('logs in a user', async() => {
    await User.create({
      username: 'jim',
      password: 'jimwashere'
    });

    return request(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'jim',
        password: 'jimwashere'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'jim',
          __v: 0
        });
      });
  });

  it('fails to login a user with a bad PW', async() => {
    await User.create({
      username: 'jim',
      password: 'jimwashere'
    });
    return request(app)
      .post('/ap1/v1/auth/login')
      .send({
        username: 'jim',
        password: 'badPW' 
      })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid username/password',
          status: 403
        });
      });
  });
});
