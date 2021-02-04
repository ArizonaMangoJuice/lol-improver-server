const rp = require('request-promise');
const fs = require('fs');
const champions = require('../seedDb/championsTest.json');
//this will be moved to an action and modified to just update the champion list
const getNewChamps = (version) => {
    
    rp('https://ddragon.leagueoflegends.com/api/versions.json')
        .then(response => {
            response = JSON.parse(response);
            response = response[0];
            if(response.version !== champions.version){
                rp(`http://ddragon.leagueoflegends.com/cdn/${response}/data/en_US/champion.json`)
                    .then(response => {
                        response = JSON.parse(response);
                        fs.writeFile('../seedDb/championsTest.json', JSON.stringify(response), err => {
                            if(err) console.log(err);
        
                            console.log('The file was saved!');
                        })
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(e => console.log(e))
}

getNewChamps('11.3.1')