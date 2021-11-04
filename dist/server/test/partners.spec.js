"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiHttp = require("chai-http");
const mocha_1 = require("mocha");
process.env.NODE_ENV = 'test';
const app_1 = require("../app");
chai.use(chaiHttp).should();
mocha_1.describe('Partners', () => {
    mocha_1.describe('Backend tests for partners', () => {
        mocha_1.it('should get all the partners', done => {
            chai.request(app_1.app)
                .get('/api/partners/list/1/1/1')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
        mocha_1.it('should get error with an input not numeric', done => {
            chai.request(app_1.app)
                .get('/api/partners/list/test/1/1')
                .end((err, res) => {
                res.should.have.status(500);
                done();
            });
        });
    });
});
//# sourceMappingURL=partners.spec.js.map