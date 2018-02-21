const Table = require('cli-table')
const chalk = require('chalk')

class View {
    constructor(){

    }
    static showTable(data, heading){
        let table = new Table ({
            head: ['ID','Tag'],
            colWidths: [5, 30]
        })
        for(let i=0; i<data.length; i++){
            let id = chalk.green(data[i].id)
            let name = chalk.blue(data[i].name)
            table.push([id, name])
        }
        console.log(heading)
        console.log(table.toString())
    }
    static showOneRow(data){
        let tableOneRow = new Table({
            head: ['ID','Tag'],
            colWidths: [5, 30]
        })

        let id = chalk.green(data.id)
        let name = chalk.blue(data.name)
        tableOneRow.push([id, name])

        console.log(tableOneRow.toString())
        
    }   
    static notifUpdate(data){
        console.log('Update berhasil')
    }
    static notifAdd(data){
        console.log('Anda berhasil menambahkan data !')
    }
    static notifDelete(data){
        console.log('Anda berhasil menghapus data')
    }
}

module.exports = View