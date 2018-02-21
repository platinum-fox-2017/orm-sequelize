const Model = require('../models')
const Article = Model.articles

class Controller {

    static parsingData(task, data) {
        console.log(task, data)
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
        // console.log(data)
        Article.create({
            title: data[0],
            body: data[1],
            id_author: data[2],
            id_tag: data[3],
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
        Article.findById(data[0]).then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log(data)
            process.exit()
        }).catch(err => {
            console.log('Error')
            process.exit()
        })
    }

    static read_all(data) {
        Article.findAll().then(data => {
            //DATA HERE! - MOVE TO VIEW
            console.log(data)
            process.exit()
        }).catch(err => {
            console.log('Error')
            process.exit()
        })
    }

    static updateData(data) {
        Article.update({
            title: data[0],
            body: data[1],
            id_author: data[2],
            id_tag: data[3],
        }, {
            where: { id: data[4] }
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
        Article.destroy({
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