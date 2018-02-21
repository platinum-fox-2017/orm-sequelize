const Table = require('cli-table')
const chalk = require('chalk')

class AuthorView {
    static read_one(data){
        let table = new Table ({
            head: Object.keys(data),
            colWidths: [5, 10, 10, 10, 15, 15, 45, 45]
        })
        table.push(Object.values(data))
        console.log(chalk.bgWhite(chalk.black(table.toString())))
    }
    static read_all(data){
        
        let table = new Table ({
            head: Object.keys(data[0]),
            colWidths: [5, 10, 10, 10, 15, 15, 45, 45]
        })
        for (let i = 0; i < data.length; i++){
            table.push(Object.values(data[i]))
        }
        console.log(chalk.bgWhite(chalk.blue(table.toString())))
    }
}

module.exports = AuthorView