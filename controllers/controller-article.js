'use strict'

const { articles } = require('../models/')
const { ViewArticle } = require('../views/view-article')

class ControllerArticle {
    constructor() { }
    static command(input, data) {
        if (input === 'read_all') {
            this.read_all()
        } else if (input === 'add') {
            this.add(data)
        } else if (input === 'read_one') {
            let id = data[0]
            this.read_one(id)
        } else if (input === 'update') {
            let id = data[0]
            this.update(id, data)
        } else if (input === 'delete') {
            this.delete(data)
        }
    }

    static add(data) {
        let obj = {
            title: data[0],
            body: data[1],
            id_author: data[2],
            id_tag: data[3]
        }
        articles.create(obj).then(data => {
            console.log(data.dataValues);
            process.exit()
        })
    }

    static read_one(id) {
        articles.findById(id).then(data => {
            console.log(data.dataValues)
            process.exit()
        })
    }

    static read_all() {
        articles.findAll({ raw: true }).then(articles => {//raw:true = menampilkan hasil read database dalam bentuk raw (lebih rapi)
            console.log(articles);
            process.exit()//menghentikan proses read database.
        })
    }

    static update(id, data) {
        articles.findById(id).then(oldData => {
            articles.update({
                title: data[1] === '.' ? oldData.title : data[1],
                body: data[2] === '.' ? oldData.body : data[2],
                id_author: data[3] === '.' ? oldData.id_author : data[3],
                id_tag: data[4] === '.' ? oldData.id_tag : data[4]
            }, { where: { id: id } }).then(updatedData => {
                console.log('Data updated');
                process.exit()
            })
        })
    }

    static delete(id) {
        articles.destroy({ where: { id: id } }).then(data => {
            console.log('Data deleted');
            process.exit()
        })
    }
}

module.exports = { ControllerArticle }