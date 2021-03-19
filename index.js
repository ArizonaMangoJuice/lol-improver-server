'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const { PORT, CLIENT_ORIGIN } = require('./config');
console.log('THIS IS THE PORT', PORT);
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');
const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');

const app = express();
const championsRoute = require('./routes/champions');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const playerRoute = require('./routes/player');
const staticRoute = require('./routes/staticData');
const notesRoute = require('./routes/notes');

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

passport.use(localStrategy);
passport.use(jwtStrategy);
//now you have to protect the endpoints
app.use(express.json());

app.use('/api/champions', championsRoute);

app.use('/api/users', userRoute);

app.use('/api', authRoute);

app.use('/api/notes', notesRoute);

app.use('/api/players', playerRoute);

app.use('/api/static', staticRoute);

app.use((err,req,res,next) => {
  res.status(err.status || 500);

  res.json({
    message: err.message,
    error: err
  });
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
