'use strict';
const rp = require('request-promise');
const { API_KEY } = require('../config');


async function getSummonerByName(name) {
    const string = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`;
    try {
        const response = await rp(string);
        const jsonResponse = await JSON.parse(response);
        return jsonResponse;
    } catch (error) {
        return error.message;
    }
}

async function getMatchesList(accountId) {
    const string = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=5&api_key=${API_KEY}`;

    try {
        const response = await rp(string);
        const jsonResponse = await JSON.parse(response);
        return jsonResponse;
    } catch (error) {
        return error.message;
    }
}

//gets the player accountInfo
function getPlayerInfo(name) {
    const string = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`;
    return rp(string)
        .then(res => {
            console.log(`____________________________________________________________________________________${res}`);
            return res
        })
        .catch(err => console.log(err))
}
//gets the matchlist testing2
function getMatchInfo(accountId) {
    const string = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=3&api_key=${API_KEY}`;
    return rp(string)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => err);
}
//gets the matchDetails l
function getMatchDetails(array) {
    const funcArr = [];

    for (let i = 0; i < array.length; i++) {
        const string = `https://na1.api.riotgames.com/lol/match/v4/matches/${array[i]}?api_key=${API_KEY}`;
        funcArr.push(rp(string));
    }

    return Promise.all(funcArr);
}

module.exports = {
    getPlayerInfo,
    getMatchDetails,
    getMatchInfo,
    getSummonerByName,
    getMatchesList
};