'use strict';
 
const mongoose = require('mongoose');

const championNoteSchema = new mongoose.Schema({
    content: String,
    name: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true}

},{timestamps: true});

championNoteSchema.set('toObject', {
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
})

module.exports = mongoose.model('Note', championNoteSchema);