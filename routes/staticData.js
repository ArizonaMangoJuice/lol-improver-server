const express = require('express');
const router = express.Router();
const rp = require('request-promise');
// const StaticChamp = require('../models/staticChampionIdName');
const Champions = require('../models/champions');
const summonerSpellSchema = require('../models/summonerSpells');
const { getStaticData } = require('../utils/getStaticData');
// const Items = require('../models/items');

// this will be used when there are updates
// this endpoint needs to be protected
router.get('/newChamps', async (req, res) => {
    let test = await getStaticData();
    res.json(test);
})

router.get('/:champId', (req, res) => {
    let { champId } = req.params;

    Champions.find({ key: champId.toString() })
        .then(result => {
            // console.log(result);
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })

    // res.json(test);

})

router.get('/summonerspell/:key', (req, res) => {
    let { key } = req.params;

    summonerSpellSchema.find({ key: key })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })

})

router.get('/item/:id', (req, res) => {
    let { id } = req.params;

    Items.find({ idName: id })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })

})


module.exports = router;