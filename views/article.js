const Table = require('cli-table');
class ViewArticle {
  constructor() {

  }
  static showAll(data){
    const table = new Table({
    head: ['ID', 'Title', 'Body', 'ID Author', 'ID Tag'],
    colWidths: [5, 30, 50, 10, 10]
    })
    for(let i=0; i<data.length; i++){
      table.push([data[i].id, data[i].title, data[i].body, data[i].id_author, data[i].id_tag])
    }
    console.log(table.toString());
  }
  static addData(data){
    console.log('Data berikut berhasil ditambahkan')
    ViewArticle.showAll([data])
  }
  static updateData(data){
    const table = new Table({
    head: ['ID', 'Title', 'Body', 'ID Author', 'ID Tag'],
    colWidths: [5, 30, 50, 10, 10]
    })
    console.log('Data berikut berhasil diubah')
    table.push(data)
    console.log(table.toString());
  }
  static deleteData(data){
    console.log(`Data ID: ${data[0]} berikut berhasil dihapus`)
  }
}

module.exports = ViewArticle;
