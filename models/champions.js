'use strict';

const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
    version: {type: String, require: true},
    id: {type: String, required:true},
    key: {type: String, required:true},
    name: {type: String, required:true},
    title: {type: String, required:true},
    blurb: {type: String, required:true},
    info: {type: Object, required:true},
    image: {type: Object, required:true},
    tags: {type: Array, required:true},
    partype: {type: String, required:true},
    stats: {type: Object, required:true},
    // userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    // queryName: {type: String, required: true},
    // content: String
},{timestamps: true});
//reference notes
championSchema.set('toObject', {
    transform: function (doc, ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

module.exports = mongoose.model('Champ', championSchema);