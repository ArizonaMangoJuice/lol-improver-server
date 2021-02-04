const rp = require('request-promise');
const fs = require('fs');

const getStaticData = (id) => {
    rp('http://ddragon.leagueoflegends.com/cdn/9.12.1/data/en_US/item.json')
    .then((response) => {
        let items = JSON.parse(response);
        items = items.data;
        const result = [];

        for(prop in items){
            console.log(prop)
            items[prop].idName = prop;
            result.push(items[prop])
        }
        // console.log(result);
        return result;
    })
    .then(result => {
        fs.writeFile("./seedDb/items.json", JSON.stringify(result), function(err) {
            if(err) {
                return console.log(err);
            }
            
            console.log("The file was saved!");
        }); 
    })
    .catch(error => console.log(error));
}

getStaticData(321321321);

