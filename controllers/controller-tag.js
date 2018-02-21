'use strict'

const { tags } = require('../models/')
const { ViewTag } = require('../views/view-tag')

class ControllerTag {
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
            name: data[0]
        }
        tags.create(obj).then(data => {
            console.log(data.dataValues);
            process.exit()
        })
    }

    static read_one(id) {
        tags.findById(id).then(data => {
            ViewTag.showOneTags(data)
            process.exit()
        })
    }

    static read_all() {
        tags.findAll({ raw: true }).then(tags => {//raw:true = menampilkan hasil read database dalam bentuk raw (lebih rapi)
            ViewTag.showTags(tags)
            process.exit()//menghentikan proses read database.
        })
    }

    static update(id, data) {
        tags.findById(id).then(oldData => {
            tags.update({
                name: data[1] === '.' ? oldData.name : data[1]
            }, { where: { id: id } }).then(updatedData => {
                console.log('Data updated');
                process.exit()
            })
        })
    }

    static delete(id) {
        tags.destroy({ where: { id: id } }).then(data => {
            console.log('Data deleted');
            process.exit()
        })
    }
}

module.exports = { ControllerTag }