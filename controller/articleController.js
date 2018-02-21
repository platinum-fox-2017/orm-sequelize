const model = require('../models')
const view = require('../view/article.js')

class Article {
    static run (input){
        switch (input[0]){
            case 'read_one': 
                model.article.findById(input[1], {raw: true})
                    .then(data => {view.read_one(data)});
                break
            case 'read_all': 
                model.article.findAll({raw: true})
                    .then(data => {view.read_all(data)})
                break
            case 'add': 
                model.article.create({title:input[1],body:input[2],id_author:input[3],id_tag:input[4]})
                    .then(data => {view.read_one(data.dataValues)})
                break
            case 'update':
                let identity = input[1]
                let change = input.splice(2)
                let obj = {}
                for (let i = 0; i < change.length; i++){
                    var attribute = change[i].split(':')[0]
                    var value = change[i].split(':')[1]
                    obj[attribute] = value
                }
                model.article.update(
                    obj,
                    {where: {id: identity}}
                )
                .then(() => model.article.findAll({raw: true})
                .then(data => {view.read_all(data)}))
                .catch(err => console.log(err))
                break
            case 'delete':
                model.article.destroy({where: {id: input[1]}})
                .then(()=> {
                    model.article.findAll({raw: true})
                    .then(data => {view.read_all(data)})
                })
                break
        }
    }
}

module.exports = Article