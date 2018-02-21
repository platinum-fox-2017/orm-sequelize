const model = require('../models/index')
const viewArticle = require('../views/article');

class ArticleController {
    static menu(command, option) {
        switch (command) {
            case "add":
                model.articles.create({
                    title: option[0],
                    body: option[1],
                    id_author: option[2],
                    id_tag: option[3]
                })
                .then(articles => {
                    viewArticle.addView(option);
                })
                break;
            case "read_one":
                model.articles.findAll({
                    where: {
                        id: option[0]
                    },
                    raw: true
                })
                .then(articles => {
                    viewArticle.read_oneView(articles)
                })
                break;
            case "read_all":
                model.articles.findAll({ raw: true })
                .then(articles => {
                    viewArticle.read_allView(articles)
                })
                break;
            case "update":
                let updateField = option[0].split(',');
                let updateObj = {}
                for (let i = 0; i < updateField.length; i++) {
                    let splittedKey = updateField[i].split(':')
                    updateObj[splittedKey[0]] = splittedKey[1];
                }
        
                model.articles.update(
                    updateObj,
                    { where: { id: option[1] } }
                )
                .then(articles => {
                    viewArticle.updateView(option[1]);
                })
                break;
            case "erase":
                model.articles.destroy({
                    where: { id: option[0] }
                })
                .then(articles => {
                    viewArticle.destroyView(option[0]);
                })
                break;
        }
    }
}

module.exports = ArticleController;