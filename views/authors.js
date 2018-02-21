const chalk = require('chalk');
const Table = require('cli-table');

class View_authors {
    static show(data){
        let table = new Table({
            head:[],
            colWidths: [5,20,20,20,20,20,31,31]
        });
        let header =[];
        let values =[];
        for(const k in data){
            header.push(k);
            values.push(data[k]);
        }
        table.options.head = header;
        table.push(values);
        let variable = 84
        console.log(chalk.cyan(`=`).repeat(variable)+chalk.yellow(`Your Result`)+chalk.cyan(`=`).repeat(variable));
        console.log(table.toString());
        console.log(chalk.cyan(`=`).repeat(variable*2.15-1));
    }  
    static show_multiple(data){
        let table = new Table({
            head:[],
            colWidths: [5,20,20,20,20,20,31,31]
        });
        let header =[];
        let values =[];
        let array_of_array =[];
        data.forEach((v,i,a)=>{
            if(i===0){
                for(const k in v){
                    header.push(k);
                    values.push(v[k]);
                }
                array_of_array.push(values);
                values =[];
            } else {
                for(const k in v){
                    values.push(v[k]);
                }
                array_of_array.push(values);
                values =[];
            }
        });
        table.options.head = header;
        array_of_array.forEach((v,i,a)=>{
            table.push(v);
        });
        let variable = 84
        console.log(chalk.cyan(`=`).repeat(variable)+chalk.yellow(`Your Result`)+chalk.cyan(`=`).repeat(variable));
        console.log(table.toString());
        console.log(chalk.cyan(`=`).repeat(variable*2.15-1));
    }
}

module.exports = View_authors;