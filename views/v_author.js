const Table = require('cli-table');
const chalk = require('chalk');

let table = new Table({
    head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender','Age']
, colWidths: [5, 15, 15, 10, 10, 7]
});

class View {

    static readAll(dataAuthor){
        for(let i = 0; i<dataAuthor.length; i++){
            table.push(
            [chalk.green.bold(dataAuthor[i].dataValues.id), dataAuthor[i].dataValues.first_name, dataAuthor[i].dataValues.last_name, dataAuthor[i].dataValues.religion, dataAuthor[i].dataValues.gender, dataAuthor[i].dataValues.age]
        );
        }
        console.log(chalk.yellow(table.toString()));
    }
    static commentAdded(){
        console.log('data author baru berhasil ditambahkan')
    }
    static findById(dataAuthor){
        table.push(
            [chalk.green.bold(dataAuthor.id), chalk.blue(dataAuthor.first_name), chalk.blue(dataAuthor.last_name), dataAuthor.religion, dataAuthor.gender, dataAuthor.age]
        );
       console.log(chalk.yellow(table.toString()));      
    }
    static commentUpdated(id){
        console.log(`data author dengan id ${id} telah diupdate`)
    }
    static commentDeleted(id){
        console.log(`data author dengan id ${id} telah dihapus`)
    }
}
module.exports = View