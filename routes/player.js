// require('dotenv').config();
const express = require('express');
const router = express.Router();
const Player = require('../models/playerSchema');
const MatchList = require('../models/matchList');
const { getPlayerInfo, getMatchDetails, getMatchInfo, getSummonerByName, getMatchesList, getMatchById } = require('../helpers/getLolInfo');
const { convertToDbObj } = require('../helpers/conversion');

router.get('/:summonerName', async (req, res, next) => {
    const userName = req.params.summonerName.replace(/\s+/g, '');
    let user = await Player.find({ queryName: decodeURI(userName).toLowerCase() });
    
    if (user.length < 1) {
        const summoner = await getSummonerByName(userName);
        if (summoner && summoner.status && summoner.status.status_code === 404) return next({ ...summoner.status, status: summoner.status.status_code });
        user = await Player.create({ queryName: summoner.name.replace(/\s+/g, '').toLowerCase(), ...summoner });
        delete user.__v;
        res.json(user);
    }

    delete user.__v;
    // console.log('SENDING THIS BACK TO THE CLIENT',  user)
    if (user.length >= 1) res.json(user[0]);
});

router.get('/', async (req, res, next) => {
    let summoners = await Player.find({})
    res.json(summoners);
});

router.get('/matches/:accountId', async (req, res, next) => {
    const accountId = req.params.accountId;
    let possibleId = [
        { playerOne: accountId }, { playerTwo: accountId }, { playerThree: accountId },
        { playerFour: accountId }, { playerFive: accountId }, { playerSix: accountId },
        { playerSeven: accountId }, { playerEight: accountId }, { playerNine: accountId },
        { playerTen: accountId }];

    let userMatches = await MatchList.find().or(possibleId);

    if (userMatches.length < 1) {
        console.log('this is the account id', accountId);
        const firstGrabMatches = await getMatchesList(accountId);
        console.log('this is the matches', firstGrabMatches)
        const matches = firstGrabMatches.matches;

        let accountIdMatches = matches.map(match => ({ playerOne: accountId, ...match }));

        const userCreatedMatches = await MatchList.create(accountIdMatches);

        res.json(userCreatedMatches);
    }

    console.log('found the matches');
    res.json(userMatches);
});

router.get('/match/:matchId', async (req, res, next) => {
    // needs to save the match for future grabs, but for now its good. 
    const matchId = req.params.matchId;

    const match = await getMatchById(matchId);

    res.json(match);
});

router.get('/:name/dsa', (req, res, next) => {
    let { name } = req.params;
    name = name.toLowerCase();
    let returnObj = {};

    Player.find({ queryName: name }) //search the name of the player in the collection
        .then(result => {
            if (!result.length) { //if it isnt in the collection throw an error to catch
                let err = new Error('Not in the db');
                throw err;
            }
            // console.log(result)
            returnObj.playerInfo = result[0]; //add the playerinfo to the returnObj
            return getMatchInfo(result[0].accountId); //return and the results of getMatchInfo with the users id
        })
        .then(result => {
            console.log(result)
            result = JSON.parse(result); // convert the result to json
            result = result.matches.map(matchList => matchList.gameId); //create an array with just the game id
            return getMatchDetails(result);//return the result of getMatchDetails with the array of gameIds passed

        })
        .then(result => {
            // console.log(`-------------------${}`)
            console.log(`-------------------${result}`)

            returnObj.matchDetails = result;//add the matchDetails to the returnObj
            res.json(returnObj);//respond with json and send the object 

        })
        .catch(err => {
            if (err.message === 'Not in the db') { // if the error message is Not in the db
                console.log('insided first catch')
                return getPlayerInfo(name); //return the result of getPlayer info with the name passed
            }
        })
        .then(result => {
            if (result.statusCode === 404) { // if the result has a status of 404 
                let err = new Error('player does not exist');//create an error saying the player doesnt exist
                err.status = 404;
                throw err;
            }

            result = JSON.parse(result) //convert the result to obj
            let obj = convertToDbObj(result);// assign obj the reuslt of convertToDbObj function
            return Player.create(obj); //return the result of creating the player
        })
        .then(result => {
            returnObj.playerInfo = result; // assign the playerInfo with the result to the return Obj
            return getMatchInfo(result.accountId);// return the result of getMatchInfo with the results accountId
        })
        .then(result => {
            result = JSON.parse(result);// convert the result to Json
            result = result.matches.map(matchList => matchList.gameId); //create an array of gameId's
            return getMatchDetails(result);// return the result of getMatchdetails
        })
        .then(result => {
            returnObj.matchDetails = result;//add the result to matchDetails prop of return obj
            res.json(returnObj);//send the returnObj
        })
        .catch(err => {
            next(err);//this will catch the error of 404 if the player doesn't exist
        })

})

module.exports = router;