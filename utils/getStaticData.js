const rp = require('request-promise');
const fs = require('fs');

const getStaticData = (id) => {
    rp('http://ddragon.leagueoflegends.com/cdn/9.9.1/data/en_US/champion.json')
    .then((response) => {
        let characters = JSON.parse(response);
        characters = characters.data;
        const result = [];

        for(prop in characters){
            characters[prop].queryName = characters[prop].name;
            result.push(characters[prop])
        }
        console.log(result);
        return result;
    })
    .then(result => {
        fs.writeFile("./seedDb/championsTest.json", JSON.stringify(result), function(err) {
            if(err) {
                return console.log(err);
            }
            
            console.log("The file was saved!");
        }); 
    })
    .catch(error => console.log(error));
}

getStaticData(321321321);

