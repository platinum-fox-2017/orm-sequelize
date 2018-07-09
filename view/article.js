const Table = require('cli-table')
const chalk = require('chalk')

class ArticleView {
    static read_one(data){
        let table = new Table ({
            head: Object.keys(data),
            colWidths: [5, 30, 35, 10, 10, 45, 45]
        })
        table.push(Object.values(data))
        console.log(chalk.bgWhite(chalk.black(table.toString())))
    }
    static read_all(data){
        let table = new Table ({
            head: Object.keys(data[0]),
            colWidths: [5, 30, 35, 10, 10, 45, 45]
        })
        for (let i = 0; i < data.length; i++){
            table.push(Object.values(data[i]))
        }
        console.log(chalk.bgWhite(chalk.red(table.toString())))
    }
}

module.exports = ArticleView