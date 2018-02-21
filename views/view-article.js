const Table = require('cli-table')
const chalk = require('chalk')

class View {
    constructor(){

    }
    static showTable(data, heading){
        let table = new Table ({
            head: ['ID','Title','Body','Author','Tag']
            // colWidths: [5, 20, 15, 13, 10]
        })
        for(let i=0; i<data.length; i++){
            let id = chalk.green(data[i].id)
            let title = chalk.blue(data[i].title)
            let body = chalk.red(data[i].body)
            let author = chalk.yellow(data[i].id_author)
            let tag = chalk.magenta(data[i].id_tag)
            table.push([id, title, body, author, tag])
        }
        console.log(heading)
        console.log(table.toString())
        // console.log(data)
    }
    static showOneRow(data){
        let tableOneRow = new Table({
            head: ['ID','Title','Body','Author','Tag']
            // colWidths: [5, 20, 15, 13, 10]
        })

        let id = chalk.green(data.id)
        let title = chalk.blue(data.title)
        let body = chalk.red(data.body)
        let author = chalk.yellow(data.id_author)
        let tag = chalk.magenta(data.id_tag)
        tableOneRow.push([id, title, body, author, tag])

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