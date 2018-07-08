const Model = require('../models');

class ArticleController{

    static handle(command, options, callback){
        switch(command){
            case 'add':
                return ArticleController.add(options);
                break;
            case 'read_one':
                return ArticleController.read_one(options);
                break;
            case 'read_all':
                return ArticleController.read_all();
                break;
            case 'update':
                return ArticleController.update(options);
                break;
            case 'delete':
                return ArticleController.delete(options);
                break;
        }
    }

    static read_all(callback){
        var readPromise = new Promise((resolve,reject) => {
            Model.article.findAll({raw:true})
                .then(data_article => {
                    resolve(data_article);
                })
                .catch(err => {
                    reject(err);
                });
        });
        return readPromise;
    }

    static add(options,callback){
        var addPromise = new Promise((resolve, reject) =>{
            let tempArray = options.split(',');
            let tempObject = new Object();
            for(let i = 0; i < tempArray.length ; i++){
                tempObject[tempArray[i].split(':')[0]] = tempArray[i].split(':')[1]
            }
            Model.article.create({
                title: tempObject.title,
                body:tempObject.body,
                id_article: tempObject.id_article,
                id_tag: tempObject.id_tag
            })
                .then(task => {
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
            Model.article.findById(parseInt(id),{raw:true})
                .then(data_article => {
                    resolve(data_article);
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
            let updatesArr = options.split(',').slice(1);
            let tempObject = new Object();
            let fieldsArr = new Array();

            for(let i = 0; i < updatesArr.length; i++){
                let tempArr = updatesArr[i].split(':');
                tempObject[tempArr[0]] = tempArr[1];
                fieldsArr.push(tempArr[0]);
            }

            Model.article.update(tempObject, {fields:fieldsArr, where: {id : idUpdate}})
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
            Model.article.destroy({where: {id : idDelete}
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


module.exports = ArticleController;
