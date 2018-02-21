const { tags } = require('../models')
const TagView = require('../views/tag')

class Tag {
    static addTag(nametag) {
        tags.create({
            name: nametag
        }).then((data) => {
            TagView.showAddedData(data.dataValues)
        })
    }

    static readTag(id) {
        tags.findById(id).then((data) => {
            TagView.printById(data.dataValues)
        }).catch((err) => {
            console.log(err);
        })
    }

    static readAllTag() {
        tags.findAll().then((datas) => {
            TagView.printAllTag(datas)
        }).catch((err) => {
            console.log(err);
        })
    }

    static updateTag(data, id) {
        tags.update(
            {
                name: data[0]
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                process.exit()
            }).catch((err) => {
                console.log(err);
            })
    }

    static deleteTag(id) {
        tags.destroy({
            where: {
                id: id
            }
        }).then(() => {
            process.exit()
        })
    }
}

module.exports = Tag