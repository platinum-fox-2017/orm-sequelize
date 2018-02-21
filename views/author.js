"use strict"
const Table = require('cli-table');
const chalk = require('chalk');

class ViewAuthor {
    static view(data){
        var table = new Table({ head: ["id", "First Name", "Last Name", "Religion", "Gender", "Age"] });
        for(let i in data) {
            table.push([
                chalk.cyan(data[i].id),
                chalk.yellow(data[i].first_name),
                chalk.green(data[i].last_name),
                chalk.magenta(data[i].religion),
                chalk.blue(data[i].gender),
                chalk.cyanBright(data[i].age)
            ]);
        }
        console.log(table.toString());
    }
}

module.exports = ViewAuthor;