'use strict';

const mongoose = require('mongoose');

const matchListSchema = new mongoose.Schema({
    lane: { type: String, required: true },
    gameId: { type: String, required: true },
    champion: { type: String, required: true },
    platformId: { type: String, required: true },
    timestamp: { type: String, required: true },
    queue: { type: String, required: true },
    role: { type: String, required: true },
    season: { type: String, required: true },
    // accountId: { type: String, required: true },
    playerOne: { type: String, required: false },
    playerTwo: { type: String, required: false },
    playerThree: { type: String, required: false },
    playerFour: { type: String, required: false },
    playerFive: { type: String, required: false },
    playerSix: { type: String, required: false },
    playerSeven: { type: String, required: false },
    playerEight: { type: String, required: false },
    playerNine: { type: String, required: false },
    playerTen: { type: String, required: false },

})

matchListSchema.set('toObject', {
    transform: function (doc, ret) {
        // ret.id = ret._id;
        // delete ret._id;
        delete ret.__v;
    }
});

module.exports = mongoose.model('MatchList', matchListSchema);
//now you have to save the matchlist to the db and checking if
//matchlists already exist and not save those