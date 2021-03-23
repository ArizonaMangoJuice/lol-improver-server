const express = require('express');
const passport = require('passport');

const Note = require('../models/note');
const user = require('../models/user');
const User = require('../models/user');

const router = express.Router();

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true }));

router.get('/', (req, res) => {
    const userId = req.user._id;
    Note
        .find({ user: userId })
        .then(result => {
            res.json({ result })
        });
});

// .router('')

router.post('/', (req, res) => {
    const userId = req.user._id;
    const { title, text, progress } = req.body;
    let note;
    Note
        .create({ title, text, progress, user: userId })
        .then(response => {
            note = response;
            return User.findByIdAndUpdate({ _id: userId },
                {
                    $push: {
                        notes: response._id
                    }
                })
        })
        .then(() => {
            console.log('inside the second then', note);
            res.json(note);
        })
        .catch(error => next(error));
    // .then(() => {
    //    return User.update({})
    // });
});

router.put('/', (req, res) => {
    // const userId = req.user._id;
    const body = req.body;
    // console.log('this is the body', body)
    Note
        .findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(response => {
            console.log('this is the response', response);
            res.json(response);
        })
        .catch(error => next(error));
});

module.exports = router;