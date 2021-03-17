'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = mongoose.Schema({
    name: {type: String, required: true},
    alt: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    src: {type: String, required: true}
}, {timestamps: true});

imageSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret.__v;
    }
});

module.exports = mongoose.model('Image', imageSchema);