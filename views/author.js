const Table = require('cli-table');
const chalk = require('chalk');

class Controller {

    static read_one(data) {
        const table = new Table({
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            },
            head: ['id', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age']
            , colWidths: [5, 20, 20 ,10 ,20, 5]
        });

        table.push(
            [`${chalk.blue(data.dataValues.id)}`, `${chalk.cyan(data.dataValues.first_name)}`, `${chalk.blueBright(data.dataValues.last_name)}`, `${chalk.yellowBright(data.dataValues.religion)}`, `${chalk.magentaBright(data.dataValues.gender)}`, `${chalk.magenta(data.dataValues.age)}`]
        );
        console.log(table.toString());
    }

    static read_all(data) {

        let table = new Table({
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            },
            head: ['id', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age']
            , colWidths: [5, 20, 20, 10, 20, 5]
        });

    
        data.map ( (data) => {
            table.push([data.id, data.first_name, data.last_name, data.religion, data.gender, data.age])
        });
        
        console.log(table.toString());
    }
}

module.exports = Controller