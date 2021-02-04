'use strict';

const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');
const Champ = require('../models/champions');
const StaticChamp = require('../models/staticChampionIdName');
const Items = require('../models/items')
const summonerSpellSchema = require('../models/summonerSpells');
const summonerSpells = require('../seedDb/SummonerSpells.json');
const itemsBulk = require('../seedDb/items.json')
// const champData = require('../test.json')
const StaticChampData = require('../seedDb/staticData.json');

mongoose.connect(DATABASE_URL)
    // .then(() => {
    //     return Champ.insertMany(champData)
    // })
    .then(() => {
        // uncomment when you want to update the the db
        // return StaticChamp.insertMany(StaticChampData);
        return Items.insertMany(itemsBulk);        
        // return summonerSpellSchema.insertMany(summonerSpells); 
    })
    .then(() => mongoose.disconnect())
    .catch(err => {
        console.error(`Error ${err.message}`);
        console.error(err);
    })

