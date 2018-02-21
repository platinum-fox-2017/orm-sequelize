const model = require('../models/index')
const viewAuthor = require('../views/author');

class AuthorController {
    static menu(command, option) {
        switch (command) {
            case "add":
                model.authors.create({
                    first_name : option[0],
                    last_name : option[1],
                    religion : option[2],
                    gender: option[3],
                    age: option[4]
                })
                .then(authors => {
                    viewAuthor.addView(option);
                })
                break;
            case "read_one":
                model.authors.findAll({
                    where: {
                        id: option[0]
                    },
                    raw: true
                })
                .then(authors => {
                    viewAuthor.read_oneView(authors)
                })
                break;
            case "read_all":
                model.authors.findAll({ raw: true })
                .then(authors => {
                    viewAuthor.read_allView(authors)
                })
                break;
            case "update":
                let updateField = option[0].split(',');
                let updateObj = {}
                for (let i = 0; i < updateField.length; i++) {
                    let splittedKey = updateField[i].split(':')
                    updateObj[splittedKey[0]] = splittedKey[1];
                }
        
                model.authors.update(
                    updateObj,
                    { where: { id: option[1] } }
                )
                .then(authors => {
                    viewAuthor.updateView(option[1]);
                })
                break;
            case "erase":
                model.authors.destroy({
                    where: { id: option[0] }
                })
                .then(authors => {
                    viewAuthor.destroyView(option[0]);
                })
                break;
        }
    }
}

module.exports = AuthorController;