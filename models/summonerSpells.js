'use strict';

const mongoose = require('mongoose');

const summonerSpellsSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    tooltip: {type: String, required: true},
    maxrank: {type: Number, required: true},
    cooldown: {type: Array, required: true},
    cooldownBurn: {type: String, required: true},
    cost: {type: Array, required: true},
    costBurn: {type: String, required: true},
    datavalues: {type: Object, required: true},
    effect: {type: Array, required: true},
    effectBurn: {type: Array, required: true},
    vars: {type: Array, required: true},
    key: {type: String, required: true},
    summonerLevel: {type: Number, required: true},
    modes: {type: Array, required: true},
    costType: {type: String, required: true},
    maxammo: {type: String, required: true},
    range: {type: Array, required: true},
    rangeBurn: {type: String, required: true},
    image: {type: Object, required: true},
    resource: {type: String, required: true}
}, {timestamps: true});

summonerSpellsSchema.set('toObject', {
    transform: function (doc, ret){
        ret.id = ret._id
        delete ret._id;
        delete ret.__v;
    }
})

module.exports = mongoose.model('SummonerSpells', summonerSpellsSchema);