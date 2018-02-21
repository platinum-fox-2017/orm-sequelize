const Table = require('cli-table')

class AuthorView {

    static addView(data) {
        console.log("Data berhasil dimasukkan ! " + data)
    }

    static read_allView(data) {
        var table = new Table({
            head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].first_name);
            arrData.push(data[i].last_name);
            arrData.push(data[i].religion);
            arrData.push(data[i].gender);
            arrData.push(data[i].age);
            table.push(arrData)
        }
        console.log(table.toString());
    }

    static read_oneView(data) {
        var table = new Table({
            head: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].first_name);
            arrData.push(data[i].last_name);
            arrData.push(data[i].religion);
            arrData.push(data[i].gender);
            arrData.push(data[i].age);
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

module.exports = AuthorView;