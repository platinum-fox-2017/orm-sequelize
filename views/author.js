const Table = require('cli-table');

class AuthorView {
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
                colWidths: [5, 15, 15, 15, 10, 5, 30, 30],
            });
            let tempArr = new Array();
            for (let i in data) {
                if(data[i] ==null)
                    tempArr.push("null")
                else
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
                colWidths: [5, 15, 15, 15, 10, 5, 30, 30],
            });

            for (let j = 0; j < data.length; j++) {
                let tempArr = new Array();
                for (let i in data[j]) {
                    if(data[j][i] ==null)
                        tempArr.push("null")
                    else
                        tempArr.push(data[j][i]);
                }
                table.push(tempArr)
            }
        }

        console.log(table.toString());
    }
}


module.exports = AuthorView;
