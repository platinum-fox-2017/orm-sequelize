'use strict'
// const article = require ('../controllers/article')
// const author = require ('../controllers/author')
// const tag = require ('../controllers/tag')
const chalk = require ('chalk')
var Table = require('cli-table');
var table = new Table({
    head: ['id','title','body','id_author','id_tag']
  , colWidths: [5,40,120, 15, 10]
});


class Article {
  static showData(data) {
    data.forEach(input => {
        table.push([chalk.blue(input.id),chalk.black(input.title),chalk.red(input.body),chalk.green(input.id_author),chalk.magenta(input.id_tag)])
    })
    console.log(chalk.bgWhite(table.toString()));
  }
}

module.exports = Article
