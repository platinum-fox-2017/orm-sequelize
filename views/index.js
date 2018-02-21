const Table = require('cli-table');

class ViewHelp {
  constructor() {

  }
  static showHelp(){
    const table = new Table({
    head: ['No', 'Command', 'Task'],
    colWidths: [5, 30, 80]
    })
    table.push([`1`, `author add`, `add<space"data yang ingin dimasukkan`],
               [`2`, `author read_one`, `read_one<space>"masukkan id author"`],
               [`3`, `author rad_all`, `read_all`],
               [`4`, `author update`, `update<space>"masukkan id yang ingin di-update dan datanya"`],
               [`5`, `author delete`, `delete<space>"masukkan id author"`],
               [`6`, `tag add`, `add<space"data yang ingin dimasukkan`],
               [`7`, `tag read_one`, `read_one<space>"masukkan id tag"`],
               [`8`, `tag rad_all`, `read_all`],
               [`9`, `tag update`, `update<space>"masukkan id yang ingin di-update dan datanya"`],
               [`10`, `tag delete`, `delete<space>"masukkan id tag"`],
               [`11`, `article add`, `add<space"data yang ingin dimasukkan`],
               [`12`, `article read_one`, `read_one<space>"masukkan id article"`],
               [`13`, `article rad_all`, `read_all`],
               [`14`, `article update`, `update<space>"masukkan id yang ingin di-update dan datanya"`],
               [`15`, `article delete`, `delete<space>"masukkan id article"`])
    console.log(table.toString())
  }
}

module.exports = ViewHelp;
