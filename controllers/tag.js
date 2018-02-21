const Model = require('../models');

class TagController{
    static handle(command, options, callback){
        switch(command){
            case 'add':
                return TagController.add(options);
                break;
            case 'read_one':
                return TagController.read_one(options);
                break;
            case 'read_all':
                return TagController.read_all();
                break;
            case 'update':
                return TagController.update(options);
                break;
            case 'delete':
                return TagController.delete(options);
                break;
        }
    }

    static read_all(callback){
        var readPromise = new Promise((resolve,reject) => {
            Model.tag.findAll({raw:true})
                .then(data_tag => {
                    resolve(data_tag);
                })
                .catch(err => {
                    reject(err);
                });
        });
        return readPromise;
    }

    static add(options,callback){
        var addPromise = new Promise((resolve,reject) => {
            let tempObject = new Object();
            tempObject[options.split(':')[0]] = options.split(':')[1]
            Model.tag.create({
                name: tempObject.name,
            }).then(task => {
                resolve(`Succeed to add ${JSON.stringify(tempObject)} to database!`);
            })
            .catch(err => {
                reject(err);
            });
        });
        return addPromise;
    }

    static read_one(id, callback){
        var onePromise = new Promise((resolve,reject) => {
            Model.tag.findById(parseInt(id),{raw:true})
                .then(data_tag => {
                    resolve(data_tag);
                })
                .catch(err => {
                    reject(err);
                });
        });
        return onePromise;
    }


    static update(options, callback){
        var updatePromise = new Promise((resolve,reject) => {
            let idUpdate = options.split(',')[0];
            let updatesVal = options.split(',')[1];
            let tempObject = new Object();

            let tempArr = updatesVal.split(':');
            tempObject[tempArr[0]] = tempArr[1];


            Model.tag.update(tempObject, {fields:[tempArr[0]], where: {id : idUpdate}})
                .then(() => {
                    resolve(`Succeed to update ${JSON.stringify(tempObject)} to database`);
                })
                .catch(err => {
                    reject(err);
                });
        });
        return updatePromise;
    }

    static delete(idDelete, callback){
        var deletePromise = new Promise((resolve,reject) =>{
            Model.tag.destroy({where: {id : idDelete}
            }).then(() => {
                resolve(`Succeed to delete database id ${idDelete}`)
            })
            .catch(err => {
                reject(err);
            });
        });
        return deletePromise;
    }
}



module.exports = TagController;
