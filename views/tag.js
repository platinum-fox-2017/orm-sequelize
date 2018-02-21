const Table = require('cli-table');

class TagView {
    static print_notification(data){
        console.log(data);
    }

    static print_table(data) {
        let header = new Array();

        if(data.length == undefined){
            for (let i in data) {
                header.push(i)
            }
            var table = new Table({
                head: header,
                colWidths: [5, 30, 30, 30],
            });
            let tempArr = new Array();
            for (let i in data) {
                tempArr.push(data[i]);
            }
            table.push(tempArr)
        }
        else{
            for (let i in data[0]) {
                header.push(i)
            }
            var table = new Table({
                head: header,
                colWidths: [5, 30, 30, 30],
            });

            for (let j = 0; j < data.length; j++) {
                let tempArr = new Array();
                for (let i in data[j]) {
                    tempArr.push(data[j][i]);
                }
                table.push(tempArr)
            }
        }

        console.log(table.toString());
    }
}

module.exports = TagView;
