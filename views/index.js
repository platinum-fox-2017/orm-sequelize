const Table = require('cli-table');

class View {
  constructor() {

  }
  static showAll(data){
    const table = new Table({
    head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
    colWidths: [5, 20, 20, 15, 10, 10]
    })
    for(let i=0; i<data.length; i++){
      table.push([data[i].id, data[i].first_name, data[i].last_name, data[i].religion, data[i].gender, data[i].age])
    }
    console.log(table.toString());
  }
  static addData(data){
    console.log('Data berikut berhasil ditambahkan')
    View.showAll([data])
  }
  static updateData(data){
    const table = new Table({
    head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
    colWidths: [5, 20, 20, 15, 10, 10]
    })
    console.log('Data berikut berhasil diubah')
    table.push(data)
    console.log(table.toString());
  }
  static deleteData(data){
    console.log(`Data ID: ${data[0]} berikut berhasil dihapus`)
  }
}

module.exports = View;
