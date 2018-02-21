'use strict'

const {authors} = require('../models/')
const {ViewAuthor} = require('../views/view-author')

class ControllerAuthor{
    constructor(){}
    static command(input, data){
        if (input === 'read_all') {
            this.read_all()
        }else if (input === 'add') {
            this.add(data)
        }else if (input === 'read_one') {
            let id = data[0]
            this.read_one(id)
        }else if (input === 'update') {
            let id = data[0]
            this.update(id, data)
        }else if (input === 'delete') {
            this.delete(data)
        }
    }

    static add(data){
        let obj = {
            first_name: data[0],
            last_name: data[1],
            religion: data[2],
            gender: data[3],
            age: data[4]
        }
        authors.create(obj).then(data => {
            console.log(data.dataValues);
            process.exit()
        })
    }

    static read_one(id){
        authors.findById(id).then(data => {
            ViewAuthor.showOneAuthors(data)
            process.exit()
        })
    }
    
    static read_all(){
        authors.findAll({raw:true}).then(authors => {//raw:true = menampilkan hasil read database dalam bentuk raw (lebih rapi)
            ViewAuthor.showAuthors(authors)
            process.exit()//menghentikan proses read database.
        })
    }

    static update(id, data){
        authors.findById(id).then(oldData => {
            authors.update({
                first_name: data[1] === '.' ? oldData.first_name : data[1],
                last_name: data[2] === '.' ? oldData.last_name : data[2],
                religion: data[3] === '.' ? oldData.religion : data[3],
                gender: data[4] === '.' ? oldData.gender : data[4],
                age: data[5] === '.' ? oldData.age : data[5]
            }, {where: {id:id}}).then(updatedData => {
                console.log('Data updated');
                process.exit()
            })
        })
    }

    static delete(id){
        authors.destroy({where: {id:id}}).then(data => {
            console.log('Data deleted');
            process.exit()
        })
    }
}

module.exports = {ControllerAuthor}