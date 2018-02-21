const { author } = require('../models')
const AuthorView = require('../views/author')

class Author {
    static addAuthor(first_name, last_name, religion, gender, age) {
        author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        }).then((data) => {
            AuthorView.showAddedData(data.dataValues)
        })
    }

    static readAuthor(id) {
        author.findById(id).then((data) => {
            AuthorView.printById(data.dataValues)
        }).catch((err) => {
            console.log(err);
        })
    }

    static readAllAuthor() {
        author.findAll().then((datas) => {
            AuthorView.printAllAuthor(datas)
        }).catch((err) => {
            console.log(err);
        })
    }

    static updateAuthor(datas, id) {
        author.findById(id).then((data) => {
            author.update({
                first_name: (datas[0] === '') ? data.dataValues.first_name : datas[0],
                last_name: (datas[1] === '') ? data.dataValues.last_name : datas[1],
                religion: (datas[2] === '') ? data.dataValues.religion : datas[2],
                gender: (datas[3] === '') ? data.dataValues.gender : datas[3],
                age: (datas[4] === '') ? data.dataValues.age : parseInt(datas[4])
            }, {
                    where: {
                        id: id
                    }
                }).then(() => {
                    process.exit()
                })
        }).catch((err) => {
            console.log(err);
        })
    }

    static deleteAuthor(id) {
        author.destroy({
            where: {
                id: id
            }
        }).then(() => {
            process.exit()
        })
    }
}

module.exports = Author;