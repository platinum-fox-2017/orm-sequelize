'use strict'
// const article = require ('../controllers/article')
// const author = require ('../controllers/author')
// const tag = require ('../controllers/tag')
const chalk = require ('chalk')
var Table = require('cli-table');
var table = new Table({
    head: ['id','first_name','last_name','religion','gender','age']
  , colWidths: [10,20, 20, 10, 10, 10]
});


class Author {
  static showData(data) {
    data.forEach(input => {
        table.push([chalk.blue(input.id),chalk.black(input.first_name),chalk.red(input.last_name),chalk.green(input.religion),chalk.magenta(input.gender),chalk.cyan(input.age)])
    })
    console.log(chalk.bgWhite(table.toString()));
  }
}

module.exports = Author
