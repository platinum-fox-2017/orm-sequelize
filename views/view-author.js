'use strict'

const Table = require('cli-table2');
const chalk = require('chalk');

let table = new Table({
    head: [chalk.cyanBright.bold('Id'), chalk.cyanBright.bold('First Name'), chalk.cyanBright.underline('Last Name'), chalk.cyanBright.bold('Religion'), chalk.cyanBright.dim
        ('Gender'), chalk.cyanBright.bold('Age')],
    colWidths: ['10%', '10%', '25%', '25%'],
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
});

class ViewAuthor{
    static showHelp(){
        console.log('======================== documentation ========================');
        console.log('author add -> add<space> "data yang ingin dimasukkan"');
        console.log('author read_one -> read_one<space> "masukkan id author"');
        console.log('author read_all -> read_all');
        console.log('author update -> update<space> "masukkan data yang ingin di update dan idnya"');
        console.log('author delete -> delete<space> "masukkan id author"');
        console.log('tag add -> add<space> "data yang ingin dimasukkan"');
        console.log('tag read_one -> read_one<space> "masukkan id tag"');
        console.log('tag read_all -> read_all');
        console.log('tag update -> update<space> "masukkan data yang ingin di update dan idnya"');
        console.log('tag delete -> delete<space> "masukkan id tag"');
        console.log('article add -> add<space> "data yang ingin dimasukkan"');
        console.log('article read_one -> read_one<space> "masukkan id article"');
        console.log('article read_all -> read_all');
        console.log('article update -> update<space> "masukkan data yang ingin di update dan idnya"');
        console.log('article delete -> delete<space> "masukkan id article"');
        console.log('======================== documentation ========================');
    }
    static showAuthors(authors) {
        authors.map(element => {
            let arr = [chalk.yellowBright(element.id), chalk.blueBright(element.first_name), chalk.greenBright(element.last_name), chalk.redBright(element.religion), chalk.yellow.bold(element.gender), chalk.blue.bold(element.age)]
            table.push(arr)
        })
        console.log(table.toString());
    }
    static showOneAuthors(data) {
        let arr = [data.dataValues]
        arr.map(element => {
            let arr = [chalk.yellowBright(element.id), chalk.blueBright(element.first_name), chalk.greenBright(element.last_name), chalk.redBright(element.religion), chalk.yellow.bold(element.gender), chalk.blue.bold(element.age)]
            table.push(arr)
        })
        console.log(table.toString())
    }
}

module.exports = {ViewAuthor}