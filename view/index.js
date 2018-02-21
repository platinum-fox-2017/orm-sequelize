const Table = require('cli-table')
const chalk = require('chalk')

class View {
  static help() {
    console.log('==== documentation =======================');
    console.log('author add -> add<space> first_name:<first-name>,last_name:<last-name>,religion:<religion>,gender:<gender>,age:<age>');
    console.log('author read_all -> read_one<space> "masukan id author"');
    console.log('author read_all -> read_all');
    console.log('author update -> update<space> id<space> <key_yg_diupdate:update-details,key_yg_diupdate2:update-details>');
    console.log('athor delete -> delete<space> "masukan id author"');
    console.log('tag add -> add<space> name:<tag-name>');
    console.log('tag read_one -> read_one<space> "masukkan id tag"');
    console.log('tag readl_all -> read_all');
    console.log('tag update -> update<space> id<space> <key_yg_diupdate:update-details,key_yg_diupdate2:update-details>');
    console.log('tag delete -> delete<space> "masukkan id author"');
    console.log('article add -> add<space> title:<title-name>,body:<body-description>,id_author:<id_author>,id_tag:<id_tag>,age:<age>');
    console.log('article read_one -> read_one<space> "masukan id article"');
    console.log('article read_all -> read_all');
    console.log('article update -> update<space> id<space> <key_yg_diupdate:update-details,key_yg_diupdate2:update-details>');
    console.log('article delete -> delete<space> "masukkan id author"');
  }

  static authorAdd(data) {
    console.log(data)
  }

  static authorReadAll(dataAuthor) {
    // console.log(Object.values(dataAuthor[0]))
    let table = new Table({
      head: Object.keys(dataAuthor[0]),
      colWidths: [5, 15, 15, 15, 15, 5, 20, 20]
    });
    for(let i = 0; i < dataAuthor.length; i++) {
      table.push(Object.values(dataAuthor[i]))
    }
    console.log(chalk.blue.bgWhite(table.toString()))
  }

  static authorFindById(data) {
    let table = new Table({
      head: Object.keys(data),
      colWidths: [5, 15, 15, 15, 15, 5, 20, 20]
    });
    table.push(
      Object.values(data)
    )
    console.log(chalk.blue.bgWhite(table.toString()))
  }

  static authorUpdate() {
    console.log(`update succeeded`)
  }

  static authorDelete(id) {
    console.log(`Delete id ${id} succeeded`)
  }

  static tagAdd(data) {
    console.log(data)
  }

  static tagReadAll(dataTag) {
    let table = new Table({
      head: Object.keys(dataTag[0]),
      colWidths: [5, 30, 33, 33]
    });
    for(let i = 0; i < dataTag.length; i++) {
      table.push(Object.values(dataTag[i]))
    }
    console.log(chalk.magenta.bgWhite(table.toString()))
  }

  static tagFindById(data) {
    // console.log(data)
    let table = new Table({
      head: Object.keys(data),
      colWidths: [5, 30, 33, 33]
    });
    table.push(
      Object.values(data)
    )
    console.log(chalk.magenta.bgWhite(table.toString()))
  }

  static tagUpdate() {
    console.log(`update succeeded`)
  }

  static tagDelete(id) {
    console.log(`Delete id ${id} succeeded`)
  }

  static articleAdd(data) {
    console.log(data)
  }

  static articleReadAll(dataArticles) {
    let table = new Table({
      head: Object.keys(dataArticles[0]),
      colWidths: [5, 30, 20, 13, 10, 20, 20]
    });
    for(let i = 0; i < dataArticles.length; i++) {
      table.push(Object.values(dataArticles[i]))
    }
    console.log(chalk.blue.bgWhite(table.toString()))
  }

  static articleFindById(data) {
    let table = new Table({
      head: Object.keys(data),
      colWidths: [5, 30, 20, 13, 10, 20, 20]
    });
    table.push(
      Object.values(data)
    )
    console.log(chalk.blue.bgWhite(table.toString()))
  }

  static articleUpdate() {
    console.log(`update succeeded`)
  }

  static articleDelete(id) {
    console.log(`Delete id ${id} succeeded`)
  }
}

module.exports = View