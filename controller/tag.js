const Model = require('../models')
const Tag = Model.tags

class Controller {

    static parsingData(task, data) {
        if (task === 'add') {
            Controller.addData(data)
        } else if (task === 'read_one') {
            Controller.read_one(data)
        } else if (task === 'read_all') {
            Controller.read_all(data)
        } else if (task === 'update') {
            Controller.updateData(data);
        } else if (task === 'delete') {
            Controller.deleteData(data)
        }
    }

    static addData(data) {
        Tag.create({
            name: data[0]
        }).then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log('Success Insert Data')
            process.exit()
        }).catch(err => {
            console.log('Error Insert Data')
            process.exit()
        })
    }

    static read_one(data) {
        console.log(data)
        Tag.findById(data[0]).then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log(data)
            process.exit()
        }).catch(err => {
            console.log('Error')
            process.exit()
        })
    }

    static read_all(data) {
        Tag.findAll().then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log(data)
            process.exit()
        }).catch(err => {
            console.log('Error')
            process.exit()
        })
    }

    static updateData(data) {
        console.log(data)
        Tag.update({
            name: data[0]
        }, {
            where: { id: data[1] }
        }).then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log('Success Update Data')
            process.exit()
        }).catch(err => {
            console.log('Error Update Data')
            process.exit()
        });
    }

    static deleteData(data) {
        Tag.destroy({
            where: { id: data[0] }
        }).then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log('Success Delete Data')
            process.exit()
        }).catch(err => {
            console.log('Error Delete Data')
            process.exit()
        });
    }

}

module.exports = Controller