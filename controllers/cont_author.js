const sequelize = require('sequelize');
const {authors} = require('../models');
const View = require('../views/author.js');

class Author {
  constructor() {

  }
  static add(){

  }
  static readAll(){
    authors.findAll().then(data => {
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
    authors.findOne({where:{id : input}}).then(data => {
      View.showAll([data])
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static add(input){
    authors.create({
      first_name : input[0],
      last_name : input[1],
      religion : input[2],
      gender : input[3],
      age : input[4]
    }).then(data => {
      View.addData(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static update(input){
    authors.update({
      first_name : input[1],
      last_name : input[2],
      religion : input[3],
      gender : input[4],
      age : input[5]
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
    authors.destroy({where : {id : input}}).then(
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
