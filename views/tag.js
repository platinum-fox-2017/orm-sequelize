const Controller_tag = require ('../controllers/tag')
const Table = require('cli-table');
const chalk = require('chalk');

class View_tag{
  constructor(){

  }
  static showAll(dataAll){
    let table = new Table({
      head: ['ID', 'Name']
    , colWidths: [10, 30]
    });
    for(let i=0;i<dataAll.length;i++){
      table.push(
        [chalk.blue(dataAll[i].id), chalk.green(dataAll[i].name)]
      );
    }
    console.log(chalk.bgHex('#eae7dc')(table.toString()));
  }
  static showAdd(objInput){
    console.log(chalk.greenBright('Success added new data with detail:'))
    let table = new Table({
      head: ['ID', 'Name']
    , colWidths: [10, 30]
    });
    table.push(
      [chalk.blue(objInput.id), chalk.green(objInput.name)]
    );
    console.log(table.toString())
  }
  static showOne(dataTag){
    let table = new Table({
      head: ['ID', 'Name']
    , colWidths: [10, 30]
  });
    table.push(
      [chalk.blue(dataTag.id), chalk.green(dataTag.name)]
    );
  console.log(chalk.bgHex('#ffccbc')(table.toString()));
  }
  static showUpdate(idUpdate){
    console.log(chalk.yellowBright(`Data with id : ${idUpdate} is successfully updated`))
  }
  static showDelete(idDelete){
    console.log(chalk.redBright(`Data with id : ${idDelete} successfully removed from database`))

  }
}

module.exports = View_tag