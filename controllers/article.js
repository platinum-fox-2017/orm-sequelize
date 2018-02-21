const Model = require('../models');

class ArticleController{
    static handle(command, options, callback){
        switch(command){
            case 'add': ArticleController.add(options, callback);
                break;
            case 'read_one': ArticleController.read_one(options, callback);
                break;
            case 'read_all': ArticleController.read_all(callback);
                break;
            case 'update': ArticleController.update(options, callback);
                break;
            case 'delete': ArticleController.delete(options, callback);
                break;
        }
    }

    static read_all(callback){
        Model.article.findAll({raw:true}).then(data_article => {
            callback(data_article);
        })
    }

    static add(options,callback){
        let tempArray = options.split(',');
        let tempObject = new Object();
        for(let i = 0; i < tempArray.length ; i++){
            tempObject[tempArray[i].split(':')[0]] = tempArray[i].split(':')[1]
        }
        Model.article.create({
            title: tempObject.title,
            body:tempObject.body,
            id_author: tempObject.id_author,
            id_tag: tempObject.id_tag
        }).then(task => {
            callback(`Succeed to add ${JSON.stringify(tempObject)} to database!`);
        })
    }

    static read_one(id, callback){
        Model.article.findById(parseInt(id),{raw:true}).then(data_article => {
            callback(data_article);
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

        Model.article.update(tempObject, {fields:fieldsArr, where: {id : idUpdate}})
            .then(() => {
                callback(`Succeed to update ${JSON.stringify(tempObject)} to database`);
            })
    }

    static delete(idDelete, callback){
        Model.article.destroy({where: {id : idDelete}
        }).then(() => {
            callback(`Succeed to delete database id ${idDelete}`)
        })
    }
}



module.exports = ArticleController;
