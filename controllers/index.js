"use strict"
const model = require('../models');
const View = require('../views');
const ViewAuthor = require('../views/author.js');
const ViewArticle = require('../views/article.js');
const ViewTag = require('../views/tag.js');

class Controller {
    static manageCommand(command, option) {
        if(command == 'author') {
            if(option[0] == 'add') {
                model.author.create({first_name:option[1],last_name:option[2],religion:option[3],gender:option[4],age:option[5]})
                .then(task => {
                    View.addSuccess();
                })
            }
            else if(option[0] == 'read_all') {
                model.author.findAll({raw:true})
                .then(data => {
                    ViewAuthor.view(data);            
                })
            }
            else if(option[0] == 'read_one') {
                model.author.findOne({ raw:true, where: {id: option[1]} })
                .then(data => {
                    ViewAuthor.view([data]);         
                })
            }
            else if(option[0] == 'update') {
                let updateValues = Controller.updateSplitterFormat(option[2])
                model.author.findOne({ raw:true, where: {id: option[1]} })
                .then(data => {
                    for(let i in updateValues) {
                        if(updateValues[i][0] == 'first_name') data.first_name = updateValues[i][1];
                        else if(updateValues[i][0] == 'last_name') data.last_name = updateValues[i][1];
                        else if(updateValues[i][0] == 'religion') data.religion = updateValues[i][1];
                        else if(updateValues[i][0] == 'gender') data.gender = updateValues[i][1];
                        else if(updateValues[i][0] == 'age') data.age = updateValues[i][1];
                    }
                    return(data)
                })
                .then(function(data){
                    model.author.update(data, { where: { id: option[1] } }).then((result) => {
                        View.view(data);
                    });
                })
            }
            else if(option[0] == 'delete') {
                model.author.destroy({where: {id: option[1]} }).then(()=>{View.deleteSuccess();})
            }
            else View.help();
        }
        else if(command == 'tag') {
            if(option[0] == 'add') {
                model.tag.create({name:option[1]})
                .then(data => {
                    View.addSuccess();
                })
            }
            else if(option[0] == 'read_all') {
                model.tag.findAll({raw:true})
                .then(data => {
                    ViewTag.view(data);               
                })
            }
            else if(option[0] == 'read_one') {
                model.tag.findOne({ raw:true, where: {id: option[1]} })
                .then(data => {
                    ViewTag.view([data]);              
                })
            }
            else if(option[0] == 'update') {
                let updateValues = Controller.updateSplitterFormat(option[2])
                model.tag.findOne({ raw:true, where: {id: option[1]} })
                .then(data => {
                    for(let i in updateValues) {
                        if(updateValues[i][0] == 'name') data.name = updateValues[i][1];
                    }
                    return(data)
                })
                .then(function(data){
                    model.tag.update(data, { where: { id: option[1] } }).then((result) => {
                        View.updateSuccess();
                    });
                })
            }
            else if(option[0] == 'delete') {
                model.tag.destroy({where: {id: option[1]} }).then(()=>{View.deleteSuccess();})
            }
            else View.help();
        }
        else if(command == 'article') {
            if(option[0] == 'add') {
                model.article.create({title:option[1],body:option[2],id_author:option[3],id_tag:option[4]})
                .then(data => {
                    View.addSuccess();
                })
            }
            else if(option[0] == 'read_all') {
                model.article.findAll({raw:true})
                .then(data => {
                    ViewArticle.view(data);      
                })
            }
            else if(option[0] == 'read_one') {
                model.article.findOne({ raw:true, where: {id: option[1]} })
                .then(data => {
                    ViewArticle.view([data]);          
                })
            }
            else if(option[0] == 'update') {
                let updateValues = Controller.updateSplitterFormat(option[2])
                model.article.findOne({ raw:true, where: {id: option[1]} })
                .then(data => {
                    for(let i in updateValues) {
                        if(updateValues[i][0] == 'title') data.title = updateValues[i][1];
                        else if(updateValues[i][0] == 'body') data.body = updateValues[i][1];
                        else if(updateValues[i][0] == 'id_author') data.id_author = updateValues[i][1];
                        else if(updateValues[i][0] == 'id_tag') data.id_tag = updateValues[i][1];
                    }
                    return(data)
                })
                .then(function(data){
                    model.article.update(data, { where: { id: option[1] } }).then((result) => {
                        View.updateSuccess();
                    });
                })
            }
            else if(option[0] == 'delete') {
                model.article.destroy({where: {id: option[1]} }).then(()=>{View.deleteSuccess();})
            }
            else View.help();
        }
        else {
            View.help()
        }
        console.log(`==========================================================`)
    }

    static updateSplitterFormat(option) {
        console.log(option)
        option = option.split(',').map(a => a.split(':'));
        return option
        // optionArr.map(a => a.split(':'))
    }
}

module.exports = Controller;