const Table = require('cli-table')
var table = new Table({
    chars: {
        'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
        , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
        , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
        , 'right': '║', 'right-mid': '╢', 'middle': '│'
    }
})

table.push(
    ['ID', 'first name', 'last name', 'religion', 'gender', 'age']
)

class Author {
    static showAddedData(data) {
        console.log(data)
        process.exit()
    }

    static printById(data) {
        console.log(`=== your result ===========`)
        table.push([data.id, data.first_name, data.last_name, data.religion, data.gender, data.age])
        console.log(table.toString());
        process.exit();
    }

    static printAllAuthor(datas) {

        for (let index = 0; index < datas.length; index++) {
            table.push([datas[index].dataValues.id, datas[index].dataValues.first_name, datas[index].dataValues.last_name, datas[index].dataValues.religion, datas[index].dataValues.gender, datas[index].dataValues.age])
        }
        console.log(table.toString());
        process.exit();
    }
}

module.exports = Author;