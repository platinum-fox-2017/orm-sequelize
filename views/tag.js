"use strict"
const Table = require('cli-table');
const chalk = require('chalk');

class ViewTag {
    static view(data){
        var table = new Table({ head: ["ID", "Name"] });
        for(let i in data) {
            table.push([chalk.cyan(data[i].id),chalk.green(data[i].name)]);
        }
        console.log(table.toString());
    }
}

module.exports = ViewTag;