"use strict"

let View = require("../view")
let Model = require("../models")

class Controller{
  static navigation(table, command, option) {
    switch(command){

      case "add":
      if(table == 'author') {
        Model[table].create({
          first_name: option[0],
          last_name: option[1],
          religion: option[2],
          gender: option[3],
          age: option[4]
        }).then(projects => {
          View.addFile()
        }); break;
      } else if(table == 'tag') {
        Model[table].create({
          name: option[0]
        }).then(projects => {
          View.addFile()
        }); break;
      } else if(table == 'article') {
        Model[table].create({
          title: option[0],
          body: option[1],
          id_author: option[2],
          id_tad: option[3]
        }).then(projects => {
          View.addFile()
        }); break;
      }

      case "read_one":
      Model[table].findById(option[0],{raw:true}).then(project => {
        View.printData(project)
      }); break;

      case "read_all":
      Model[table].findAll({raw:true}).then(projects => {
        View.printData(projects)
      }); break;

      case "update":
      let obj = {}
      obj[option[0]] = option[1]
      Model[table].update(obj, {where:{id: option[2]}}).then(projects => {
        View.update(table, option, projects)
      }); break;

      case "delete":
      Model[table].destroy({where:{id: option[0]}}).then(projects => {
        View.destroyData(table, option, projects)
      }); break;

      case "help":
      View.help(); break;

      default: View.help()
    }
  }

}

module.exports = Controller;
