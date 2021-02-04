'use strict';

const mongoose = require('mongoose');

const staticChampionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    champId: {type: String, required: true},
    key: {type: String, required: true},
    name: {type: String, required: true}
}, {timestamps: true});

staticChampionSchema.set('toObject', {
    transform: function (doc, ret){
        ret.id = ret._id
        delete ret._id;
        delete ret.__v;
    }
})

module.exports = mongoose.model('StaticChamp', staticChampionSchema);