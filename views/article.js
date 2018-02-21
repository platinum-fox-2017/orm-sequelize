const Controller_article = require ('../controllers/tag')
const Table = require('cli-table');
const chalk = require('chalk');

class View_article{
  constructor(){

  }
  static showAll(dataAll){
    // console.log(dataAll)
    let table = new Table({
      head: ['ID','Title', 'Body', 'Id Author', 'Id Tag']
    , colWidths: [5, 30, 90, 8, 8]
    });
    for(let i=0;i<dataAll.length;i++){
      table.push(
        [chalk.blue(dataAll[i].id), chalk.green(dataAll[i].title),chalk.yellow(dataAll[i].body),
        chalk.magenta(dataAll[i].id_author),chalk.black(dataAll[i].id_tag)]
      );
    }
    console.log(chalk.bgHex('#eae7dc')(table.toString()));
  }
  static showAdd(objInput){
    console.log(chalk.yellow('Success added new data with detail:'))
    // console.log(objInput)
    let table = new Table({
      head: ['ID','Title', 'Body', 'Id Author', 'Id Tag']
    , colWidths: [5, 30, 90, 8, 8]
    });
      table.push(
        [chalk.blue(objInput.id), chalk.green(objInput.title),chalk.yellow(objInput.body),
        chalk.magenta(objInput.id_author),chalk.black(objInput.id_tag)]
      );
    
    console.log(chalk.bgHex('#eae7dc')(table.toString()));
  }
  static showOne(dataArticle){
    let table = new Table({
      head: ['ID','Title', 'Body', 'Id Author', 'Id Tag']
    , colWidths: [5, 30, 90, 8, 8]
    });
      table.push(
        [chalk.blue(dataArticle.id), chalk.green(dataArticle.title),chalk.yellow(dataArticle.body),
        chalk.magenta(dataArticle.id_author),chalk.black(dataArticle.id_tag)]
      );
    
    console.log(chalk.bgHex('#eae7dc')(table.toString()));
  }
  static showUpdate(idUpdate){
    console.log(chalk.green(`Data with id : ${idUpdate} is successfully updated`))
  }
  static showDelete(idDelete){
    console.log(chalk.red(`Data with id : ${idDelete} successfully removed from database`))

  }
}

module.exports = View_article