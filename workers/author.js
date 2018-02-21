const model = require('../models/index')

class AuthorWorker {
    static add(arrData,callback) {
        model.authors.create({
            first_name : arrData[0],
            last_name : arrData[1],
            religion : arrData[2],
            gender: arrData[3],
            age: arrData[4]
        })
        .then(authors => {
            callback(arrData);
        })
    }

    static read_all(callback) {
        model.authors.findAll({raw:true})
        .then(authors => {
            callback(authors)
        })
    }

    static read_one(id,callback) {
        model.authors.findAll({
            where : {
                id : id
            },
            raw :true
        })
        .then(authors => {
            callback(authors);
        })
    }

    static update(arrData,callback) {
        let updateField = arrData[0].split(',');
        let updateObj   = {}
        for(let i = 0; i < updateField.length; i++) {
            let splittedKey = updateField[i].split(':')
            updateObj[splittedKey[0]] = splittedKey[1];
        }
        
        model.authors.update(
            updateObj,
            {where :{id : arrData[1]}}
        )
        .then(authors => {
            callback(arrData[1]);
        })
    }

    static destroy(id,callback) {
        model.authors.destroy({
            where : { id : id}
        })
        .then(authors => {
            callback(id);
        })
    }
}

module.exports = AuthorWorker;