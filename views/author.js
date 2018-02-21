const Controller_author = require ('../controllers/author')
const Table = require('cli-table');
const chalk = require('chalk');

class View_author{
  constructor(){

  }
  static showAll(dataAll){
    // console.log(dataAll.length)
    var table = new Table({
      head: ['ID', 'First Name','Last Name','Religion','Gender','Age']
    , colWidths: [10, 20, 20, 10, 10, 10]
  });
  for(let i=0;i<dataAll.length;i++){
    // console.log(dataAll[i].id)
    table.push(
      [dataAll[i].id, chalk.green(dataAll[i].first_name),chalk.yellow(dataAll[i].last_name),chalk.magenta(dataAll[i].religion),chalk.hex('#DEADED')(dataAll[i].gender),dataAll[i].age]
  );
  }
  console.log(table.toString());
  }
  static showAdd(objInput){
    console.log(chalk.green('Success added new data with detail:'))
    // console.log(objInput)
    var table = new Table({
      head: ['ID', 'First Name','Last Name','Religion','Gender','Age']
    , colWidths: [10, 20, 20, 10, 10, 10]
  });
    table.push(
      [chalk.black(objInput.id), chalk.green(objInput.first_name),chalk.yellow(objInput.last_name),chalk.magenta(objInput.religion),chalk.green(objInput.gender),chalk.cyan(objInput.age)]
  );
  
  console.log(table.toString());
  
  }
  static showOne(dataAuthor){
    // console.log(dataAuthor)
    var table = new Table({
      head: ['ID', 'First Name','Last Name','Religion','Gender','Age']
    , colWidths: [10, 20, 20, 10, 10, 10]
  });
    table.push(
      [chalk.black(dataAuthor.id),chalk.green(dataAuthor.first_name),chalk.yellow(dataAuthor.last_name),chalk.magenta(dataAuthor.religion),chalk.hex('#DEADED')(dataAuthor.gender),chalk.hex('#5cdb95')(dataAuthor.age)]
  );
  
  console.log(chalk.bgHex('#66fcef1')(table.toString()));
  }
  static showUpdate(idUpdate){
    console.log(chalk.green(`Data with id : ${idUpdate} is successfully updated`))
  }
  static showDelete(idDelete){
    console.log(chalk.redBright(`Data with id : ${idDelete} successfully removed from database`))

  }
}

module.exports = View_author