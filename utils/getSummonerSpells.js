const rp = require('request-promise');
const SummonerSpells = require('../models/summonerSpells');

const getSummonerSpells = async () => {
    const versions = await rp('https://ddragon.leagueoflegends.com/api/versions.json');
    const newestVersion = JSON.parse(versions)[0];
    
    const newestSummonerSpells = await rp(`http://ddragon.leagueoflegends.com/cdn/${newestVersion}/data/en_US/summoner.json`);

    const summonerSpells = JSON.parse(newestSummonerSpells).data;

    await SummonerSpells.remove({});

    const newSpells = [];

    for(let spell in summonerSpells){
        newSpells.push(summonerSpells[spell]);
    }

    const dbSpells = await SummonerSpells.insertMany(newSpells);

    return dbSpells;
};

module.exports = {
    getSummonerSpells
}