const model = require('../models/index');
const view = require('../views/index');

class ArticleController{
    static run(option){
        switch(option[0]){
            case 'add' :
                model.articles.create({
                    title: option[1], 
                    body: option[2], 
                    id_author: option[3],
                    id_tag: option[4]
                    })
                    .then(article => {view.dislay(article.dataValues);})
                    .catch(err => {view.dislay(err);}); break;
            case 'readOne' :
                model.articles.findOne({raw:true, where: {id: option[1]} })
                    .then(article => {view.dislay(article);})
                    .catch(err => {view.dislay(err);}); break;
            case 'readAll' : 
                model.articles.findAll({raw:true})
                    .then(article => {view.dislay(article);})
                    .catch(err => {view.dislay(err);}); break;
            case 'update' : 
                let objToWrite = {};
                let valueArr = option[2].split(',');
                for (let i=0; i<valueArr.length; i++){
                    let row = valueArr[i].split(':');
                    switch(row[0]){
                        case 'title': objToWrite.title = row[1]; break;
                        case 'body': objToWrite.body = row[1]; break;
                        case 'id_author': objToWrite.id_author = row[1]; break;
                        case 'id_tag': objToWrite.id_tag = row[1]; break;
                    }
                }
                model.articles.update(objToWrite,{where: {id:option[1]}})
                    .then(article => {view.dislay('Data updated');})
                    .catch(err => {view.dislay(err);}); break;
            case 'delete' : 
                model.articles.destroy({where: {id: option[1]}})
                    .then(article => {view.dislay('Article deleted');})
                    .catch(err => {view.dislay(err);}); break;
        }
    }
}

module.exports = ArticleController;