// const author = require('../models')
const Model = require('../models')
const View = require('../views/author')
const Author = Model.author

class Controller {
   
    static parsingData(task, data) {
        // console.log(task, data)
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
        Author.create({
            first_name: data[0],
            last_name: data[1],
            religion: data[2],
            gender: data[3],
            age: data[4]
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
        Author.findById(data[0]).then(data => {
             //DATA HERE! - MOVE TO VIEW
             View.read_one(data)
            // console.log(data.dataValues.first_name)
            process.exit()
        }).catch(err => {
            console.log('Error')
            process.exit()
        })
    }

    static read_all(data) {
        Author.findAll({raw:true}).then(data => {
             //DATA HERE! - MOVE TO VIEW
            View.read_all(data)
            // console.log(data)
            process.exit()
        }).catch(err => {
            console.log('Error')
            process.exit()
        })
    }

    static updateData(data) {
        Author.update({
            first_name: data[0],
            last_name: data[1],
            religion: data[2],
            gender: data[3],
            age: data[4]
        }, {
            where: {id: data[5]}
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
        Author.destroy({
            where: {id: data[0]}
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