'use strict';

function convertToDbObj(obj){
    obj = {
        ...obj,
         summonerId: obj.id,
         queryName: obj.name.toLowerCase()
    }
    // console.log(obj);
    return obj;
}

module.exports = {convertToDbObj};