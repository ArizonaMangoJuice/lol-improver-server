'use strict';

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRY } = require('../config');

const router = express.Router();

const localAuth = passport.authenticate('local', { session: false, failWithError: true });

function createAuthToken(user) {
    return jwt.sign(
        { 
            username: user.username,
            _id: user._id,
            gameName: user.gameName,
         },
        JWT_SECRET,
        {
            subject: user.username,
            expiresIn: JWT_EXPIRY
        })
}

router.post('/login', localAuth, (req, res) => {
    const authToken = createAuthToken(req.user);
    res.json({ authToken });
});

module.exports = router;