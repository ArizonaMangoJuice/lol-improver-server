'use strict';

const mongoose = require('mongoose');

const matchListSchema = new mongoose.Schema({
    lane: {type: String, required: true},
    gameId: {type: String, required: true},
    champion: {type: String, required: true},
    platformId: {type: String, required: true},
    timestamp: {type: String, required: true},
    queue: {type: String, required: true},
    role: {type: String, required: true},
    season: {type: String, required: true},
    accountId: {type: String, required: true}
})

matchListSchema.set('toObject', {
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

module.exports = mongoose.model('MatchList', matchListSchema);
//now you have to save the matchlist to the db and checking if
//matchlists already exist and not save those