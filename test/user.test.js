'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');
const {TEST_DATABASE_URL} = require('../config');
const mongoose = require('mongoose');
const User = require('../models/user');


process.env.NODE_ENV = 'test';

process.stdout.write('\x1Bc\n');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Champion Api', () => {
     
    let username = 'pooo';
    let password = 'morethan10characterslong';

    before(function() {
        return mongoose
          .connect(TEST_DATABASE_URL)
          .then(() => mongoose.connection.db.dropDatabase())
    })

    afterEach(() => {
        return mongoose.connection.db.dropDatabase();
    });

    after(() => {
        return mongoose.disconnect();
    });


    describe('POST /api/users', () => {
        it('should create user if passed username and password', () => {
            return chai
                .request(app)
                .post(`/api/users`)
                .send({username, password})
            .then(res => {
                expect(res).to.have.status(201);
                expect(res).to.be.json;
                expect(res).to.be.an('object');
            })
        })

        it('should fail if user password is less than 10 characters', () => {
            return chai
                .request(app)
                .post(`/api/users`)
                .send({username, password: '32'})
            .catch(err => {
                expect(err).to.have.status(401);
                expect(err.response.res.body.message).to.equal('password is too short');
            })
        })

        it('should fail if username is empty', () => {
            return chai
                .request(app)
                .post(`/api/users`)
                .send({username : '', password})
            .catch(err => {
                expect(err.response.res.body.message).to.equal('username is too short');
                expect(err).to.have.status(401);
            })
        })

        it('should fail if password is empty', () => {
            return chai
                .request(app)
                .post(`/api/users`)
                .send({username, password: ''})
            .catch(err => {
                expect(err.response.res.body.message).to.equal('password is too short');
                expect(err).to.have.status(401);
            })
        })

        // it('should fail if player already exists', () => {
        //     return chai
        //         .request(app)
        //         .post('/api/users')
        //         .send({username, password})
        //     .then(res => {
        //         console.log(res);
        //         return chai
        //             .request(app)
        //             .post('/api/users')
        //             .send({username, password})
        //         })
        //     .then(res => {
        //             console.log(res.status);
        //     });
        // })
    });

    
});