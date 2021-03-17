'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema  = mongoose.Schema({
    title: {type: String, required: true},
    text: {type: String, required: false},
    progress: {type: Number, required: true},
    image: {type: String, required: false},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

noteSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret.__v;
    }
});

module.exports = mongoose.model('Note', noteSchema);