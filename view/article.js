const chalk = require('chalk');
var Table = require('cli-table');


class Article {
  constructor() {

  }
  static addData(data) {
    console.log(data);
    process.exit()
  }

  static read1Data(data) {
    console.log(data)
    process.exit()
  }

  static readData(data) {
    console.log(data);
  }

  static updateData(data) {
    console.log(data);
    process.exit()
  }

  static eraseData(data) {
    console.log(data);
    process.exit()
  }
}


module.exports = Article
