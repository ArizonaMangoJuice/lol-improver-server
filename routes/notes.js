const express = require('express');
const passport = require('passport');

const Note = require('../models/note');
const user = require('../models/user');
const User = require('../models/user');

const router = express.Router();

router.use('/', passport.authenticate('jwt', {session: false, failWithError: true}));

router.get('/', (req, res) => {
    const userId = req.user._id;

    Note
        .find({user: userId})
        .then(result => {
            res.json({result})
        });
});

router.post('/', (req, res) => {
    const userId = req.user._id;
    const {title, text, progress} = req.body;

    Note
        .create({title, text, progress, user: userId})
        .then(response => {
            res.json(response); 
        });
});

module.exports = router;