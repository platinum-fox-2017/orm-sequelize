const model = require('../models')
const view = require('../view/author.js')

class Author {
    static run (input){
        switch (input[0]){
            case 'read_one': 
                model.author.findById(input[1], {raw: true})
                    .then(data => {view.read_one(data)}) 
                break
            case 'read_all': 
                model.author.findAll({raw: true})
                    .then(data => {view.read_all(data)}) 
                break
            case 'add':
                model.author.create({first_name:input[1],last_name:input[2],religion:input[3],gender:input[4],age:input[5]})
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
                model.author.update(
                    obj,
                    {where: {id: identity}}
                )
                .then(() => model.author.findAll({raw: true})
                .then(data => {view.read_all(data)}))
                .catch(err => console.log(err))
                break
            case 'delete':
                model.author.destroy({where: {id: input[1]}})
                .then(()=> {
                    model.author.findAll({raw: true})
                    .then(data => {view.read_all(data)})
                })
                break
        }
    }
}

module.exports = Author