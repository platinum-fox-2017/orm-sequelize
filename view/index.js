"use strict"

const Table = require('cli-table');
const chalk = require('chalk');

class View{
  static help() {
    console.log(`                            DOCUMENTATION`);
    console.log(`=============================================================================`);
    console.log(`author add -> add<space> "data yang ingin dimasukan"`);
    console.log(`author read_one -> read_one<space> "masukkan id author"`);
    console.log(`author read_all -> read all`);
    console.log(`author update -> update<space> "masukkan data yang ingin di update dan idnya"`);
    console.log(`author delete -> delete<space> "masukkan id author"`);
    console.log(`tag add -> add<space> "data yang ingin dimasukan"`);
    console.log(`tag read_one -> read_one<space> "masukkan id tag"`);
    console.log(`tag read_all -> read all`);
    console.log(`tag update -> update<space> "masukkan data yang ingin di update dan idnya"`);
    console.log(`tag delete -> delete<space> "masukkan id tag"`);
    console.log(`article add -> add<space> "data yang ingin dimasukan"`);
    console.log(`article read_one -> read_one<space> "masukkan id article"`);
    console.log(`article read_all -> read all`);
    console.log(`article update -> update<space> "masukkan data yang ingin di update dan idnya"`);
    console.log(`article delete -> delete<space> "masukkan id article"`);
    console.log(`==============================================================================`);
  }

  static printData(data) {

    // instantiate
    var table = new Table({
        head: ['ID', 'First Name','Last Name','Religion','Gender','Age']
      // , colWidths: [100, 100]
    });

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    for(let i=0; i<data.length; i++) {
      let arr = []
      arr.push(chalk.green(data[i].id))
      arr.push(chalk.blue(data[i].first_name))
      arr.push(chalk.red(data[i].last_name))
      arr.push(chalk.yellow(data[i].religion))
      arr.push(chalk.magenta(data[i].gender))
      arr.push(chalk.cyan(data[i].age))
      table.push(arr)
    }
    console.log(table.toString());
  }

  static update(table, option, data) {
    if(data == 1){
      console.log(`Data id: ${chalk.red(option[2])} pada table ${chalk.red(table)} telah berhasil di update! (${chalk.red(option[0])} menjadi ${chalk.red(option[1])})`);
    } else {
      console.log('update gagal');
    }
  }

  static destroyData(table, option, data) {
    if(data == 1){
      console.log(`Data id: ${chalk.red(option[0])} pada table ${chalk.red(table)} telah berhasil di hapus`);
    } else {
      console.log('delete data gagal, data tidak ada');
    }
  }

  static addFile() {
    console.log(`database berhasil ditambah!`);
  }

}

module.exports = View;
