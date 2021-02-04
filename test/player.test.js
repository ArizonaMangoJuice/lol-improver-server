'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');
const {TEST_DATABASE_URL } = require('../config');
const mongoose = require('mongoose');
const Player = require('../models/playerSchema');

process.env.NODE_ENV = 'test';

process.stdout.write('\x1Bc\n');

const expect = chai.expect;
chai.use(chaiHttp);


describe('StaticDataChamp Api', () => {
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


    describe('GET /:name', () => {
        it('should add the player to the db if its not there',() => {
            let name = 'darthkahlua';
            let dbResult;
            return Player.find({queryName: name})
                .then(res => {
                    dbResult = res;
                    return chai.request(app)
                        .get(`/api/players/${name}`)
                })
                .then(res => {
                    return Player.find({queryName: name})
                })
                .then(res => {
                    expect(res).to.have.length(1);
                })
        });

        it('should get the player match info if he exists',() => {
            let name = 'darthkahlua';
                return chai.request(app)
                        .get(`/api/players/${name}`)
                .then(res => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res).to.be.an('object');
                    expect(res.body.matchDetails.length).to.equal(3);
                })
        });

        it('should give an error if the player doesnt exist', () => {
            let name = 'dsajdsadjkasdhjkas';
            return chai.request(app)
                        .get(`/api/players/${name}`)
                .catch(err => {
                    expect(err.response.statusCode).to.equal(404);
                    expect(err.response.res.statusMessage).to.equal('Not Found')
                })
        })
    });
    
});