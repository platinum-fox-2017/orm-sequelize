'use strict';
const chalk = require('chalk');
var clitable = require('cli-table');

class View{
  constructor(){

  }

  static printView(data){
    var newTable = new clitable({
    head: ['ID', 'First Name', 'Last Name', 'Religion','Gender','Age']
      , colWidths: [5,20,10,10,10,10]
    });
    for(let i=0;i<data.length;i++){
      newTable.push([data[i].id,data[i].first_name,data[i].last_name,data[i].religion,data[i].gender,data[i].age])
    }
    console.log(chalk.red.bgBlackBright(newTable.toString()));

  }
}

module.exports = View
