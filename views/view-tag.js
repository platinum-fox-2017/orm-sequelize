'use strict'

const Table = require('cli-table2');
const chalk = require('chalk');

let table = new Table({
    head: [chalk.cyanBright.bold('Id'), chalk.cyanBright.bold('Name'), chalk.cyanBright.underline('Created At'), chalk.cyanBright.bold('Updated At')],
    colWidths: ['10%', '10%', '25%', '25%'],
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
});

class ViewTag {
    static showTags(tags) {
        tags.map(element => {
            let arr = [chalk.yellowBright(element.id), chalk.blueBright(element.name), chalk.greenBright(element.createdAt), chalk.redBright(element.updatedAt)]
            table.push(arr)
        })
        console.log(table.toString());
    }
    static showOneTags(data) {
        let arr = [data.dataValues]
        arr.map(element => {
            let arr = [chalk.yellowBright(element.id), chalk.blueBright(element.name), chalk.greenBright(element.createdAt), chalk.redBright(element.updatedAt)]
            table.push(arr)
        })
        console.log(table.toString())
    }
}

module.exports = { ViewTag }