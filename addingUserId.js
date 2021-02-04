const champions = require('./seedDb/champions.json');

const addUserId = (id) => {
    return champions.map(champ => {
        let searchname = champ['name'].replace(/[\s, ', .]/g, '');
        // let defaultString = `take notes of ${champ['name']} here`;
        champ['userId'] = id
        champ['queryName'] = searchname.toLowerCase();
        champ['content'] = '';
        return champ;
    });
}

module.exports =  addUserId;