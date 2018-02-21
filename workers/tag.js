const model = require('../models/index')

class TagWorker {
    static add(arrData,callback) {
        model.tags.create({
            name : arrData[0]
        })
        .then(tag => {
            callback(arrData);
        })
    }

    static read_all(callback) {
        model.tags.findAll({raw:true})
        .then(tags => {
            callback(tags)
        })
    }

    static read_one(id,callback) {
        model.tags.findAll({
            where : {
                id : id
            },
            raw :true
        })
        .then(tags => {
            callback(tags);
        })
    }

    static update(arrData,callback) {
        let updateField = arrData[0].split(',');
        let updateObj   = {}
        for(let i = 0; i < updateField.length; i++) {
            let splittedKey = updateField[i].split(':')
            updateObj[splittedKey[0]] = splittedKey[1];
        }
        
        model.tags.update(
            updateObj,
            {where :{id : arrData[1]}}
        )
        .then(tags => {
            callback(arrData[1]);
        })
    }

    static destroy(id,callback) {
        model.tags.destroy({
            where : { id : id}
        })
        .then(tags => {
            callback(id);
        })
    }
}

module.exports = TagWorker;