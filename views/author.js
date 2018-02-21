const Table = require('cli-table')
const chalk = require('chalk');
var table = new Table({
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
})

table.push(
    ['ID', 'first name', 'last name', 'religion', 'gender', 'age']
)

class Author {
    static showAddedData(data) {
        console.log(data)
        process.exit()
    }

    static printById(data) {
        console.log(`=== your result ===========`)
        table.push([
            chalk.green(data.id),
            chalk.blue(data.first_name),
            chalk.green(data.last_name),
            chalk.yellow(data.religion),
            chalk.redBright(data.gender),
            chalk.cyan(data.age)])
        console.log(table.toString());
        process.exit();
    }

    static printAllAuthor(datas) {

        for (let index = 0; index < datas.length; index++) {
            table.push([
                chalk.green(datas[index].dataValues.id),
                chalk.blue(datas[index].dataValues.first_name),
                chalk.green(datas[index].dataValues.last_name),
                chalk.yellow(datas[index].dataValues.religion),
                chalk.redBright(datas[index].dataValues.gender),
                chalk.cyan(datas[index].dataValues.age)])
        }
        console.log(table.toString());
        process.exit();
    }
}

module.exports = Author;