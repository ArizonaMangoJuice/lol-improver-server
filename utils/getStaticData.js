const rp = require('request-promise');
const fs = require('fs');
const Champions = require('../models/champions');

const getStaticData = async () => {
    const versions = await rp('https://ddragon.leagueoflegends.com/api/versions.json');
    const newestVersion = JSON.parse(versions)[0];

    const newestChamps = await rp(`http://ddragon.leagueoflegends.com/cdn/${newestVersion}/data/en_US/champion.json`)

    const champs = JSON.parse(newestChamps).data;

    await Champions.remove({});

    const newChamps = [];

    for(let champ in champs){
        newChamps.push(champs[champ]);
    }

    const newChampions = await Champions.insertMany(newChamps);

    return newChampions;
}

// const getStaticData = (id) => {
//     rp('https://ddragon.leagueoflegends.com/api/versions.json')
//         .then(response => JSON.parse(response))
        // .then(response => {
        //     console.log(response)
        // })
    // .then((response) => {
    //     let characters = JSON.parse(response);
    //     characters = characters.data;
    //     const result = [];

    //     for(prop in characters){
    //         characters[prop].queryName = characters[prop].name;
    //         result.push(characters[prop])
    //     }
    //     console.log(result);
    //     return result;
    // })
    // .then(result => {
    //     console.log('hello')
    //     result = JSON.parse(result);
    //     fs.writeFile("../seedDb/championsTest.json", JSON.stringify(result), function(err) {
    //         if(err) {
    //             return console.log(err);
    //         }
            
    //         console.log("The file was saved!");
    //     }); 
    // })
//     .catch(error => console.log(error));
// };

module.exports = {
    getStaticData
};
