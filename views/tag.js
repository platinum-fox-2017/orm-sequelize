const Table = require('cli-table')

class TagView {

    static addView(data) {
        console.log("Data berhasil dimasukkan ! " + data)
    }

    static read_allView(data) {
        var table = new Table({
            head: ['id', 'name']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].name);
            table.push(arrData)
        }
        console.log(table.toString());
    }

    static read_oneView(data) {
        var table = new Table({
            head: ['id', 'name']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].name);
            table.push(arrData)
        }
        console.log(table.toString());
    }

    static updateView(id) {
        console.log("Data pada id ke - " + id + " berhasil di update !");
    }

    static destroyView(id) {
        console.log("Data pada id ke - " + id + " berhasil di hapus !");

    }
}

module.exports = TagView;