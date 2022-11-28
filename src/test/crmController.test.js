import request from 'supertest';
import app from '../../index.js'
import {expect} from 'chai';

describe('GET for /api/shoes', () => {

  it('Test for GET all Shoes' , async () => {
    const response = await request(app)
      .get('/api/shoes');
      // testing if response has a StatusCode = '200', which is correct
      expect(response.statusCode).to.equal(200);
    });
});

describe('GET for /api/shoes/:idSoulier', () => {

    it('Test for GET Shoe by ID' , async () => {
      const idForTest = "618ab06cc11e54d0319dde6f"; // hardcoded ID taken from DataBase
      const response = await request(app)
        .get('/api/shoes/'+idForTest);
        expect(response.statusCode).to.equal(200);
        expect(response.body._id).to.equal(idForTest);
      });
  });

  describe('GET for /api/search/:nomSoulier', () => {

    it('Test for SEARCH Shoe by name' , async () => {
        const nameForTest = "Nike Air Huarache"; // hardcoded shoe name
      const response = await request(app)
        .get('/api/search/'+nameForTest);
        expect(response.statusCode).to.equal(200);
        // checking first of array element to match
        expect(response.body[0].title).to.have.string(nameForTest);
      });
  });

  describe('GET for /api/reviews/:idSoulier', () => {
    it('Test for GET Shoe reviews' , async () => {
        const idForTest = "618ab06cc11e54d0319dde6f"; // hardcoded ID taken from DataBase
      const response = await request(app)
        .get('/api/reviews/'+idForTest);
        expect(response.statusCode).to.equal(200);
      });
  });
