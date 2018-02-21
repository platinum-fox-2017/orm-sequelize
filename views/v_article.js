const Table = require('cli-table');
const chalk = require('chalk');

let table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
    head: ['ID', 'title', 'body','id author', 'id tag']
, colWidths: [4, 30, 80, 12, 8]
});

class View {
    static readAll(dataArticle){
        for(let i = 0; i<dataArticle.length; i++){
            table.push(
                [chalk.green.bold(dataArticle[i].dataValues.id), dataArticle[i].dataValues.title, dataArticle[i].dataValues.body, dataArticle[i].dataValues.id_author, dataArticle[i].dataValues.id_tag]
            );
        }
        console.log(chalk.yellow(table.toString()));
    }
    static commentAdded(){
        console.log('data article baru berhasil ditambahkan')
    }
    static findById(dataArticle){
        table.push(
            [chalk.green.bold(dataArticle.id), dataArticle.title, dataArticle.body, dataArticle.id_author, dataArticle.id_tag]
        );
        console.log(chalk.yellow(table.toString()));
    }
    static commentUpdated(id){
        console.log(`data article dengan id ${id} telah diupdate`)
    }
    static commentDeleted(id){
        console.log(`data article dengan id ${id} telah dihapus`)
    }
}
module.exports = View