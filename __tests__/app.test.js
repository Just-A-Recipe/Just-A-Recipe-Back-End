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
  
  it('gets all recipes', async() => {
    const recipes = await Recipe.create([
      { id: 123,
        title: 'BobsBurgers',
        image: 'www.image.com',
        summary: 'bobs fantasic super duper delicious mega ultimate burger',
        instructions: 'do this', 
        extendedIngredients: [] },
        
    ]);
    return request(app)
      .get('/api/v1/recipes')
      .then(res => {
        recipes.forEach(recipe => {
          expect(res.body).toContainEqual({
            _id: recipe._id.toString(),
            title: recipe.title
          });
        });
      });
  });
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
