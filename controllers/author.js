const Model = require('../models');

class AuthorController{
    static handle(command, options, callback){
        switch(command){
            case 'add': AuthorController.add(options, callback);
                break;
            case 'read_one': AuthorController.read_one(options, callback);
                break;
            case 'read_all': AuthorController.read_all(callback);
                break;
            case 'update': AuthorController.update(options, callback);
                break;
            case 'delete': AuthorController.delete(options, callback);
                break;
        }
    }

    static read_all(callback){
        Model.author.findAll({raw:true}).then(data_author => {
            callback(data_author);
        })
    }

    static add(options,callback){
        let tempArray = options.split(',');
        let tempObject = new Object();
        for(let i = 0; i < tempArray.length ; i++){
            tempObject[tempArray[i].split(':')[0]] = tempArray[i].split(':')[1]
        }
        Model.author.create({
            first_name: tempObject.first_name,
            last_name:tempObject.last_name,
            religion: tempObject.religion,
            gender: tempObject.gender,
            age: tempObject.age
        }).then(task => {
            callback(`Succeed to add ${JSON.stringify(tempObject)} to database!`);
        })
    }

    static read_one(id, callback){
        Model.author.findById(parseInt(id),{raw:true}).then(data_author => {
            callback(data_author);
        })
    }

    static update(options, callback){
        let idUpdate = options.split(',')[0];
        let updatesArr = options.split(',').slice(1);
        let tempObject = new Object();
        let fieldsArr = new Array();

        for(let i = 0; i < updatesArr.length; i++){
            let tempArr = updatesArr[i].split(':');
            tempObject[tempArr[0]] = tempArr[1];
            fieldsArr.push(tempArr[0]);
        }

        Model.author.update(tempObject, {fields:fieldsArr, where: {id : idUpdate}})
            .then(() => {
                callback(`Succeed to update ${JSON.stringify(tempObject)} to database`);
            })
    }

    static delete(idDelete, callback){
        Model.author.destroy({where: {id : idDelete}
        }).then(() => {
            callback(`Succeed to delete database id ${idDelete}`)
        })
    }
}



module.exports = AuthorController;
