const express = require('express');
const passport = require('passport');

const Note = require('../models/note');


const router = express.Router();

router.use('/', passport.authenticate('jwt', {session: false, failWithError: true}));

router.get('/', (req, res) => {
    console.log(req)
    const id = req.user._id;
    console.log('id');
    res.json(id);
});

module.exports = router;