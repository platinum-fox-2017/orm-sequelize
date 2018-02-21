const { articles } = require('../models')
const ArticleView = require('../views/article')

class Article {
    static addArticle(title, body, id_author, id_tag) {
        articles.create({
            title: title,
            body: body,
            id_author: id_author,
            id_tag: id_tag
        }).then((data) => {
            ArticleView.showAddedArticle(data.dataValues)
        }).catch((err) => {
            console.log(err);
        })
    }

    static readOne(id) {
        articles.findById(id).then((data) => {
            ArticleView.printById(data.dataValues)
        }).catch((err) => {
            console.log(err);
        })
    }

    static readAll() {
        articles.findAll().then((datas) => {
            ArticleView.printAll(datas)
        }).catch((err) => {
            console.log(err);
        })
    }

    static updateArticle(datas, id) {
        articles.findById(id).then((data) => {
            articles.update({
                title: (datas[0] === '') ? data.dataValues.title : datas[0],
                body: (datas[1] === '') ? data.dataValues.body : datas[1],
                id_author: (datas[2] === '') ? data.dataValues.id_author : datas[2],
                id_tag: (datas[3] === '') ? data.dataValues.id_tag : datas[3]
            }, {
                    where: {
                        id: id
                    }
                }).then(() => {
                    process.exit()
                })
        })
    }

    static deleteArticle(id) {
        articles.destroy({
            where: {
                id: id
            }
        }).then(() => {
            process.exit()
        })
    }
}

module.exports = Article