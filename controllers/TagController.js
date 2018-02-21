const model = require('../models/index')
const viewTag = require('../views/tag');

class TagController {
    static menu(command, option) {
        switch (command) {
            case "add":
                model.tags.create({
                    name : option[0]
                })
                .then(tag => {
                    viewTag.addView(option[0]);
                })
                break;
            case "read_one":
                model.tags.findAll({
                    where: {
                        id: option[0]
                    },
                    raw: true
                })
                .then(tags => {
                    viewTag.read_oneView(tags)
                })
                break;
            case "read_all":
                model.tags.findAll({ raw: true })
                .then(tags => {
                    viewTag.read_allView(tags)
                })
                break;
            case "update":
                let updateField = option[0].split(',');
                let updateObj = {}
                for (let i = 0; i < updateField.length; i++) {
                    let splittedKey = updateField[i].split(':')
                    updateObj[splittedKey[0]] = splittedKey[1];
                }
        
                model.tags.update(
                    updateObj,
                    { where: { id: option[1] } }
                )
                .then(tags => {
                    viewTag.updateView(option[1]);
                })
                break;
            case "erase":
                model.tags.destroy({
                    where: { id: option[0] }
                })
                .then(tags => {
                    viewTag.destroyView(option[0]);
                })
                break;
        }
    }
}

module.exports = TagController;