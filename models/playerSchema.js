'use strict';

const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    id: {type: String, required: true},
    accountId: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    profileIconId: {type: String, required: true},
    revisionDate: {type: String, required: true},
    summonerLevel: {type: String, required: true},
    queryName: {type: String, required: true},
    puuid: {type: String, required: true}
});

PlayerSchema.set('toObject', {
    transform: function(doc, ret){
        // ret.id = ret._id;
        // delete ret._id;
        delete ret.__v;
    }
});

module.exports = mongoose.model('Player', PlayerSchema);

