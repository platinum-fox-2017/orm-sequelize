const chalk = require('chalk');
var Table = require('cli-table');
var table = new Table({
  head: ['Id', 'first_name', 'last_name', 'religion', 'gender', 'age'],
  colWidths: [10,25,25,10,10,10]
})



class Author {
  constructor() {

  }
  static addData(data) {
    table.push([data.id, data.first_name, data.last_name, data.religion, data.gender, data.age])

    console.log(table.toString());
    process.exit()
  }

  static read1Data(data) {
    table.push([data.id, data.first_name, data.last_name, data.religion, data.gender, data.age])

    console.log(table.toString())
    process.exit()
  }

  static readData(data) {
    for (var i = 0; i < data.length; i++) {
      table.push([data[i].id, data[i].first_name, data[i].last_name, data[i].religion, data[i].gender, data[i].age])
    }
    console.log(chalk.bgGreen(table.toString()));
  }

  static updateData(data) {
    table.push([data.id, data.first_name, data.last_name, data.religion, data.gender, data.age])

    console.log(table.toString())
    process.exit()
  }

  // static eraseData(data) {
  //   console.log(data);
  //   table.push([data.id, data.first_name, data.last_name, data.religion, data.gender, data.age])
  //
  //   // console.log(table.toString())
  //   process.exit()
  // }
}


module.exports = Author
