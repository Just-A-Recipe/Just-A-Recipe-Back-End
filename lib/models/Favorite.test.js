require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const Favorite = require('./Favorite');

// it('creates a favorite with a POST request', () => {
//   return request(app)
//     .post('/api/v1/favorites')
//     .send({ username: 'jim' })
//     .then(res => {
//       expect(res.body).toEqual({
//         _id: expect.any(String),
//         name: 'jim',
//         __v: 0
//       });
//     });
// });
