const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const Recipe = require('../lib/models/Recipe');

const request = require('supertest');
const app = require('../lib/app');

describe('be-cookbook routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
  

// const recipe = {
//   id: 1234,
//   title: 'BobsBurgers',
//   image: 'www.image.com',
//   glutenFree: false,
//   dairyFree: false,
//   vegan: false,
//   summary: 'bobs fantasic super duper delicious mega ultimate burger'

//   it('creates a recipe', () => {
//     return request(app)
//       .post('/api/v1/recipes')
//       .send({
//         id: 1234,
//         title: 'BobsBurgers',
//         image: 'www.image.com',
//         glutenFree: false,
//         dairyFree: false,
//         vegan: false,
//         summary: 'bobs fantasic super duper delicious mega ultimate burger'
//       })
//       .then(res => {
//         expect(res.body).toEqual({
//           _id: expect.any(String),
//           title: 'BobsBurgers',
//           image: 'www.image.com',
//           glutenFree: false,
//           dairyFree: false,
//           vegan: false,
//           summary: 'bobs fantasic super duper delicious mega ultimate burger'
//         });
//       });
//   });
// });
