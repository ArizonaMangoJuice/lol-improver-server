'use strict';

const {Strategy: LocalStrategy} = require('passport-local');

const User = require('../models/user');

const localStrategy = new LocalStrategy((username, password, done) => {
    let user;
    User.findOne({ username })
      .then(results => {
        user = results;

        if (!user) {
          return Promise.reject({
            reason: 'LoginError',
            message: 'Incorrect username',
            location: 'username'
          });
        }
        return user.validatePassword(password);
      })
      .then(isValid => {
        if (!isValid) {
          return Promise.reject({
            reason: 'LoginError',
            message: 'Incorrect password',
            location: 'password'
          });
        }
        

        // console.log('this is the user inside the local login in passport', user)
       
        return done(null, user);
      })
      .catch(err => {
        if (err.reason === 'LoginError') {
          err.status = 401;
          return done(null, false, err);
        }
        return done(err, false);
      });
  });

module.exports = localStrategy;