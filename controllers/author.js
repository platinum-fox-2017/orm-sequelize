const model = require('../models/index');
const view = require('../views/index');

class AuthorController{
    static run(option){
        switch(option[0]){
            case 'add' :
                model.authors.create({
                    first_name: option[1], 
                    last_name: option[2], 
                    religion: option[3],
                    gender: option[4],
                    age: option[5]
                    })
                    .then(author => {view.dislayTableAuthor([author.dataValues]);})
                    .catch(err => {view.dislayStatus(err);}); break;
            case 'readOne' :
                model.authors.findOne({raw:true, where: {id: option[1]} })
                    .then(author => {view.dislayTableAuthor([author]);})
                    .catch(err => {view.dislayStatus(err);}); break;
            case 'readAll' : 
                model.authors.findAll({raw:true})
                    .then(authors => {view.dislayTableAuthor(authors);})
                    .catch(err => {view.dislayStatus(err);}); break;
            case 'update' : 
                let objToWrite = {};
                let valueArr = option[2].split(',');
                for (let i=0; i<valueArr.length; i++){
                    let row = valueArr[i].split(':');
                    switch(row[0]){
                        case 'first_name': objToWrite.first_name = row[1]; break;
                        case 'last_name': objToWrite.last_name = row[1]; break;
                        case 'religion': objToWrite.religion = row[1]; break;
                        case 'gender': objToWrite.gender = row[1]; break;
                        case 'age': objToWrite.age = row[1]; break;
                    }
                }
                model.authors.update(objToWrite,{where: {id:option[1]}})
                    .then(authors => {view.dislayTableAuthor('Data updated');})
                    .catch(err => {view.dislayStatus(err);}); break;
            case 'delete' : 
                model.authors.destroy({where: {id: option[1]}})
                    .then(authors => {view.dislayTableAuthor('Author deleted');})
                    .catch(err => {view.dislayStatus(err);}); break;
        }
    }
}

module.exports = AuthorController;