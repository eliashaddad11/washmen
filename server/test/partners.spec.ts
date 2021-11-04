import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';

process.env.NODE_ENV = 'test';
import { app } from '../app';

chai.use(chaiHttp).should();

describe('Partners', () => {

  
  describe('Backend tests for partners', () => {

    it('should get all the partners', done => {
      chai.request(app)
        .get('/api/partners/list/1/1/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get error with an input not numeric', done => {
      chai.request(app)
        .get('/api/partners/list/test/1/1')
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
    
  });

});


