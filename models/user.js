'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: false},
    notes: [{type: Schema.Types.ObjectId, ref: 'Note'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}],
    gameName: {type: String, required: false}
},{timestamps: true});

userSchema.set('toObject', {
    transform: function (doc, ret) {
        // ret.id = ret._id;
        // delete ret._id;
        delete ret.__v;
        delete ret.password
    }
});

userSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = function(password){
    return bcrypt.hash(password,10);
}

module.exports = mongoose.model('User', userSchema);