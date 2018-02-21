const model = require('../models/index')

class ArticleWorker {
    static add(arrData, callback) {
        model.articles.create({
            title: arrData[0],
            body: arrData[1],
            id_author: arrData[2],
            id_tag: arrData[3],
        })
            .then(articles => {
                callback(arrData);
            })
    }

    static read_all(callback) {
        model.articles.findAll({ raw: true })
            .then(articles => {
                callback(articles)
            })
    }

    static read_one(id, callback) {
        model.articles.findAll({
            where: {
                id: id
            },
            raw: true
        })
            .then(articles => {
                callback(articles);
            })
    }

    static update(arrData, callback) {
        let updateField = arrData[0].split(',');
        let updateObj = {}
        for (let i = 0; i < updateField.length; i++) {
            let splittedKey = updateField[i].split(':')
            updateObj[splittedKey[0]] = splittedKey[1];
        }

        model.articles.update(
            updateObj,
            { where: { id: arrData[1] } }
        )
            .then(articles => {
                callback(arrData[1]);
            })
    }

    static destroy(id, callback) {
        model.articles.destroy({
            where: { id: id }
        })
            .then(articles => {
                callback(id);
            })
    }
}

module.exports = ArticleWorker;