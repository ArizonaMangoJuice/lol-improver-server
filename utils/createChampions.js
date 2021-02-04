const mongoose = require('mongoose');
const {DATABASE_URL,API_KEY} = require('../config');
// const rp = require('request-promise');
// const fs = require('fs');
const champions = require('../seedDb/championsTest.json');
const db = require('../models/champions');
console.log('THIS IS THE DB => ', DATABASE_URL, API_KEY)
// const createChamps = () => {
    let championList = [];

    for(let key in champions.data){
        championList.push(champions.data[key]);
    }

    mongoose.connect(DATABASE_URL)
        .then(() => {
          return db
            .insertMany(championList)
            .then(result => {
                console.log('success!')
            })
            .catch(e => console.log(e));
        })
        .then(() => mongoose.disconnect())
        .catch(e => console.log(e))
// }

// createChamps();