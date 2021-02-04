'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {app} = require('../index');
const {TEST_DATABASE_URL } = require('../config');
const mongoose = require('mongoose');
const StaticData = require('../seedDb/staticData.json');
const StaticChamp = require('../models/staticChampionIdName');

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

    beforeEach(function () {
        return StaticChamp.insertMany(StaticData);
  });

    afterEach(() => {
        return mongoose.connection.db.dropDatabase();
    });

    after(() => {
        return mongoose.disconnect();
    });


    describe('GET /:champId', () => {
        it('should get the champion with the corresponding id',() => {
            let dbChampInfo;
            return StaticChamp.find({champId: '164'})
                .then(res => {
                    dbChampInfo = res;
                    return chai.request(app)
                        .get(`/api/static/${res[0].champId}`);
                })
                .then(res => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body[0].champId).to.equal(dbChampInfo[0].champId);
                })
        });
    })
    
});