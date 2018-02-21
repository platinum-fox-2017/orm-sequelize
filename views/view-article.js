'use strict'

const Table = require('cli-table2');
const chalk = require('chalk');

let table = new Table({
    head: [chalk.cyanBright.bold('Id'), chalk.cyanBright.bold('Title'), chalk.cyanBright.underline('Body'), chalk.cyanBright.bold('Id Author'), chalk.cyanBright.dim
        ('Id Tag')],
    colWidths: ['10%', '10%', '25%', '25%'],
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
});

class ViewArticle {
    static showArticles(articles){
        articles.map(element => {
            let arr = [chalk.yellowBright(element.id), chalk.blueBright(element.title), chalk.greenBright(element.body), chalk.redBright(element.id_author), chalk.yellow.bold(element.id_tag)]
            table.push(arr)
        })
        console.log(table.toString());
    }
    static showOneArticles(data){
        // console.log(data.dataValues)
        let arr = [data.dataValues]
        arr.map(element => {
            let arr = [chalk.yellowBright(element.id), chalk.blueBright(element.title), chalk.greenBright(element.body), chalk.redBright(element.id_author), chalk.yellow.bold(element.id_tag)]
            table.push(arr)
        })
        console.log(table.toString());
    }
}

module.exports = { ViewArticle }