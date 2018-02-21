const chalk = require('chalk');
var Table = require('cli-table');

class View {
  constructor() {

  }

  static print(data){
    console.log(data);
  }

  static keren(data){
    var table = new Table({
    head: ['ID', 'First Name', 'Last Name', 'Religion','Gender','Age']
      , colWidths: [5,20,10,10,10,10]
    });
    for(let i=0;i<data.length;i++){
      table.push([data[i].id,data[i].first_name,data[i].last_name,data[i].religion,data[i].gender,data[i].age])
    }
    console.log(chalk.yellow.bgBlackBright(table.toString()));
  }
}

module.exports=View
