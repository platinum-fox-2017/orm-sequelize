const Table = require('cli-table')
const chalk = require('chalk')
var table = new Table({
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
})

table.push(
    ['id', 'title', 'body']
)

class Article {

    static showAddedArticle(data) {
        console.log(data)
        process.exit()
    }

    static printById(data) {
        table.push([chalk.green(data.id), chalk.blue(data.title), chalk.red(data.body)])
        console.log(table.toString());
        process.exit()
    }

    static printAll(datas) {
        for (let index = 0; index < datas.length; index++) {
            table.push([chalk.green(datas[index].dataValues.id), chalk.blue(datas[index].dataValues.title), chalk.red(datas[index].dataValues.body)])
        }
        console.log(table.toString())
        process.exit()
    }
}
module.exports = Article