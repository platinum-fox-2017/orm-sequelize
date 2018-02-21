'use strict'
// const article = require ('../controllers/article')
// const author = require ('../controllers/author')
// const tag = require ('../controllers/tag')
const chalk = require ('chalk')
var Table = require('cli-table');
var table = new Table({
    head: ['id','name']
  , colWidths: [10,30]
});


class Tag {
  static showData(data) {
    data.forEach(input => {
        table.push([chalk.blue(input.id),chalk.black(input.name)])
    })
    console.log(chalk.bgWhite(table.toString()));
  }
}

module.exports = Tag
