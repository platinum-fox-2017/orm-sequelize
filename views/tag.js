const Table = require('cli-table');
class ViewTag {
  constructor() {

  }
  static showAll(data){
    const table = new Table({
    head: ['ID', 'Name'],
    colWidths: [5, 30]
    })
    for(let i=0; i<data.length; i++){
      table.push([data[i].id, data[i].name])
    }
    console.log(table.toString());
  }
  static addData(data){
    console.log('Data berikut berhasil ditambahkan')
    ViewTag.showAll([data])
  }
  static updateData(data){
    const table = new Table({
    head: ['ID', 'Name'],
    colWidths: [5, 30]
    })
    console.log('Data berikut berhasil diubah')
    table.push(data)
    console.log(table.toString());
  }
  static deleteData(data){
    console.log(`Data ID: ${data[0]} berikut berhasil dihapus`)
  }
}

module.exports = ViewTag;
