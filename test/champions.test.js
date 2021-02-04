'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');
const {TEST_DATABASE_URL, JWT_SECRET } = require('../config');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Champ = require('../models/champions')
const User = require('../models/user');
const seedChampions = require('../seedDb/champions');
const seedUsers = require('../seedDb/user');


process.env.NODE_ENV = 'test';

process.stdout.write('\x1Bc\n');

const expect = chai.expect;
chai.use(chaiHttp);

// console.log(seedUsers.map(user => console.log(user)));

describe('Champion Api', () => {
     
    let username = 'pooo';
    let password = 'maniakakaisa13';
    let id;
    let token;

    before(function() {
        return mongoose
          .connect(TEST_DATABASE_URL)
          .then(() => mongoose.connection.db.dropDatabase())
    })

    beforeEach(function () {
        return chai
            .request(app)
            .post(`/api/users`)
            .send({username, password})
        .then(() => {
            return chai
                .request(app)
                .post(`/api/login`)
                .send({username, password})
        })
        .then(res => {
            token = res.body.authToken;
            // console.log(token);
        })
  });

    afterEach(() => {
        // console.log()
        return mongoose.connection.db.dropDatabase();
    });

    after(() => {
        return mongoose.disconnect();
    });

    describe('GET /api/champions', () => {
        it('return all champs for the user', function (){
            return chai
                .request(app)
                .get(`/api/champions`)
                .set(`authorization`, `Bearer ${token}`)
                .then(res => {
                    expect(res).to.be.json;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an('object');
                    expect(res.body.length).to.equal(seedChampions.length);
                })
        });
    });

    describe('PUT /api/champions/:id', () => {
        it('should update the champion note', () => {
            let id;
            let userId;
            return chai
                .request(app)
                .get(`/api/champions`)
                .set(`authorization`, `Bearer ${token}`)
                .then(res => {
                    id = res.body[0].id;
                    userId = res.body[0].userId;
                })
                .then(() => {
                    return chai.request(app)
                        .put(`/api/champions/${id}`)
                        .set(`authorization`, `Bearer ${token}`)
                        .send({
                            id,
                            userId,
                            note: "hello"
                        })
                        .then(res => {
                            expect(res).to.be.json;
                            expect(res).to.have.status(200);
                            expect(res).to.be.an('object');
                            expect(res.body.content).to.equal('hello');
                        })
                })
        })

        it('fail if champion id doesnt exist', () => {
            let userId;
            return chai
                .request(app)
                .get(`/api/champions`)
                .set(`authorization`, `Bearer ${token}`)
                .then(res => {
                    userId = res.body[0].userId;
                })
                .then(() => {
                    return chai.request(app)
                        .put(`/api/champions/`)
                        .set(`authorization`, `Bearer ${token}`)
                        .send({
                            id: '3232323232',
                            userId,
                            note: "hello"
                        })
                        .catch(error => {
                            expect(error).to.have.status(404);
                        })
                })
        })
    });

});