"use strict"
const Table = require('cli-table');
const chalk = require('chalk');

class ViewArticle {
    static view(data){
        var table = new Table({ head: ["ID", "Title", "Body", "ID Author", "ID Tag"] });
        for(let i in data) {
            table.push([
                chalk.red(data[i].id),
                chalk.blue(data[i].title),
                chalk.yellow(data[i].body),
                chalk.green(data[i].id_author),
                chalk.cyan(data[i].id_tag)
            ]);
        }
        console.log(table.toString());
    }
}

module.exports = ViewArticle;