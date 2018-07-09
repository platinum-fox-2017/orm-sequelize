const model = require('../models')
const view = require('../view/tag.js')

class Tag {
    static run (input){
        switch (input[0]){
            case 'read_one': 
                model.tag.findById(input[1], {raw: true})
                    .then(data => {view.read_one(data)})
                break
            case 'read_all': 
                model.tag.findAll({raw: true})
                    .then(data => {view.read_all(data)})
                break
            case 'add': 
                model.tag.create({name:input[1]})
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
                model.tag.update(
                    obj,
                    {where: {id: identity}}
                )
                .then(() => model.tag.findAll({raw: true})
                .then(data => {view.read_all(data)}))
                .catch(err => console.log(err))
                break
            case 'delete':
                model.tag.destroy({where: {id: input[1]}})
                .then(()=> {
                    model.tag.findAll({raw: true})
                    .then(data => {view.read_all(data)})
                })
                break
        }
    }
}

module.exports = Tag