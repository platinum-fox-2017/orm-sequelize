const Table = require('cli-table')
const chalk = require('chalk')

class View {
    constructor(){

    }
    static showTable(data, heading){
        let table = new Table ({
            head: ['ID','First Name','Last Name','Religion','Gender','Age'],
            colWidths: [5, 15, 15, 13, 10, 7]
        })
        for(let i=0; i<data.length; i++){
            let id = chalk.green(data[i].id)
            let fname = chalk.blue(data[i].first_name)
            let lname = chalk.red(data[i].last_name)
            let religion = chalk.yellow(data[i].religion)
            let gender = chalk.magenta(data[i].gender)
            let age = chalk.cyan(data[i].age)
            table.push([id, fname, lname, religion, gender, age])
        }
        console.log(heading)
        console.log(table.toString())
        // console.log(data)
    }
    static showOneRow(data){
        let tableOneRow = new Table({
            head: ['ID','First Name','Last Name','Religion','Gender','Age'],
            colWidths: [5, 15, 15, 13, 15, 7]
        })

        let id = chalk.green(data.id)
        let fname = chalk.blue(data.first_name)
        let lname = chalk.red(data.last_name)
        let religion = chalk.yellow(data.religion)
        let gender = chalk.magenta(data.gender)
        let age = chalk.cyan(data.age)
        tableOneRow.push([id, fname, lname, religion, gender, age])

        console.log(tableOneRow.toString())
        
    }   
    static notifUpdate(data){
        console.log('Update berhasil')
    }
    static notifAdd(data){
        console.log('Anda berhasil menambahkan data !')
    }
    static notifDelete(){
        console.log('Anda berhasil menghapus data')
    }
}

module.exports = View