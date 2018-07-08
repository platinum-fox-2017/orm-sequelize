const sequelize = require('sequelize');
const {articles} = require('../models');
const View = require('../views/article.js');

class Author {
  constructor() {

  }
  static add(){

  }
  static readAll(){
    articles.findAll().then(data => {
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
    articles.findOne({where:{id : input}}).then(data => {
      View.showAll([data])
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static add(input){
    articles.create({
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
    articles.update({
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
    articles.destroy({where : {id : input}}).then(
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
