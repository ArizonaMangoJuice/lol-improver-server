const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Champ = require('../models/champions');
const defaultChamps = require('../seedDb/champions');
const addUserId = require('../addingUserId');

const router = express.Router();

router.use('/', passport.authenticate('jwt', {session: false, failWithError: true}));

router.get('/', (req,res) => {
    const userId = req.user._id;
    Champ.find({userId})
        .then(result => res.json(result))
        .catch(err => next(err))
  });

router.put('/:id', (req,res,next) => {
    let {id, userId, note} = req.body;
    console.log(req.body)
    
    //if for some reason something goes wrong... it shouldn't
    if(!id || !userId || !note){
        const err = new Error('Something Went wrong')
        err.status = 400;
        return next(err);
    }

    Champ.findOneAndUpdate({userId: userId, id: id}, {content: note}, {new:true})
        .then(result => res.json(result))
        .catch(err => next(err));
})

module.exports = router;