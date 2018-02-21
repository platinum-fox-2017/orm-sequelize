const model = require('../models/index');
const view = require('../views/index');

class TagController{
    static run(option){
        switch(option[0]){
            case 'add' :
                model.tags.create({
                    name: option[1]
                    })
                    .then(tag => {view.dislay(tag.dataValues);})
                    .catch(err => {view.dislay(err);}); break;
            case 'readOne' :
                model.tags.findOne({raw:true, where: {id: option[1]} })
                    .then(tag => {view.dislay(tag);})
                    .catch(err => {view.dislay(err);}); break;
            case 'readAll' : 
                model.tags.findAll({raw:true})
                    .then(tag => {view.dislay(tag);})
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
                model.tags.update(objToWrite,{where: {id:option[1]}})
                    .then(tag => {view.dislay('Data updated');})
                    .catch(err => {view.dislay(err);}); break;
            case 'delete' : 
                model.tags.destroy({where: {id: option[1]}})
                    .then(tag => {view.dislay(`Tag ${option[1]} deleted`);})
                    .catch(err => {view.dislay(err);}); break;
        }
    }
}

module.exports = TagController;