const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const StaticChamp = require('../models/staticChampionIdName');
const summonerSpellSchema = require('../models/summonerSpells');
const Items = require('../models/items');

router.get('/:champId', (req, res) => {
    let {champId} = req.params;
    
    StaticChamp.find({champId: champId.toString()})
        .then(result => {
            // console.log(result);
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
    
    // res.json(test);

})

router.get('/summonerspell/:key', (req,res) => {
    let {key} = req.params;

    summonerSpellSchema.find({key: key})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
    
})

router.get('/item/:id', (req,res) => {
    let {id} = req.params;

    Items.find({idName: id})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
    
})


module.exports = router;