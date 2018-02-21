const Table = require('cli-table');
const chalk = require('chalk');

let table = new Table({
    head: ['ID', 'name']
, colWidths: [5, 30]
});
class View {
    static readAll(dataTag){
        for(let i = 0; i<dataTag.length; i++){
            table.push(
            [chalk.green.bold(dataTag[i].dataValues.id), dataTag[i].dataValues.name]
        );
        }
        console.log(chalk.blue(table.toString()));
    }
    static commentAdded(){
        console.log('data tag baru berhasil ditambahkan')
    }
    static findById(dataTag){
        table.push(
            [chalk.green.bold(dataTag.id), dataTag.name]
        );
        console.log(chalk.blue(table.toString()));
    }
    static commentUpdated(id){
        console.log(`data tag dengan id ${id} telah diupdate`)
    }
    static commentDeleted(id){
        console.log(`data tag dengan id ${id} telah dihapus`)
    }
}
module.exports = View