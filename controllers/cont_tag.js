const sequelize = require('sequelize');
const {tags} = require('../models');
const View = require('../views/tag.js');

class Author {
  constructor() {

  }
  static add(){

  }
  static readAll(){
    tags.findAll().then(data => {
      let result = []
      for(let i=0; i<data.length; i++){
        result.push(data[i].dataValues)
      }
      View.showAll(result)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static readOne(input){
    tags.findOne({where:{id : input}}).then(data => {
      View.showAll([data])
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static add(input){
    tags.create({
      name : input[0]
    }).then(data => {
      View.addData(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static update(input){
    tags.update({
      name : input[1]
    }, {
      where : {
      id : input[0]
    }}).then(data => {
      View.updateData(input)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static delete(input){
    tags.destroy({where : {id : input}}).then(
      data => {
        View.deleteData(input)
        process.exit()
      }
    ).catch(error => {
      console.log(error)
      process.exit()
    })
  }
}

module.exports = Author;
