const Table = require('cli-table');
const chalk = require('chalk');

class View{
    static showHelp(){
        console.log(`==== documentation ===================================================
author add -> add<space> "data yang ingin dimasukkan"
author read_one -> read_one<space> "masukkan id author"
author read_all -> read_all
author update -> update<space> "masukkan data yang ingin diupdate dan idnya"
author delete -> delete<space> "masukkan id author"
tag add -> add<space> "data yang ingin dimasukkan"
tag read_one -> read_one<space> "masukkan id tag"
tag read_all -> read_all
tag update -> update<space> "masukkan data yang ingin diupdate dan idnya"
tag delete -> delete<space> "masukkan id author"
article add -> add<space> "data yang ingin dimasukkan"
article read_one -> read_one<space> "masukkan id article"
article read_all -> read_all
article update -> update<space> "masukkan data yang ingin diupdate dan idnya"
article delete -> delete<space> "masukkan id author"
=======================================================================`)
    // let table = new Table({
    //     head: ['NO', 'Command']
    // , colWidths: [5, 80]
    // });
    // table.push(
    //     ['1', 'author add -> add<space> "data yang ingin dimasukkan"'],
    //     ['2', 'author read_one -> read_one<space> "masukkan id author"'],
    //     ['3','author read_all -> read_all'],
    //     ['4','author update -> update<space> "masukkan data yang ingin diupdate dan idnya"'],
    //     ['5','author delete -> delete<space> "masukkan id author"'],
    //     ['6','tag add -> add<space> "data yang ingin dimasukkan"'],
    //     ['7','tag read_one -> read_one<space> "masukkan id tag"'],
    //     ['8','tag read_all -> read_all'],
    //     ['9','tag update -> update<space> "masukkan data yang ingin diupdate dan idnya"'],
    //     ['10','tag delete -> delete<space> "masukkan id author"'],
    //     ['11','article add -> add<space> "data yang ingin dimasukkan"'],
    //     ['12','article read_one -> read_one<space> "masukkan id article"'],
    //     ['13','article read_all -> read_all'],
    //     ['14','article update -> update<space> "masukkan data yang ingin diupdate dan idnya"'],
    //     ['15','article delete -> delete<space> "masukkan id author"']
    // );
    
    // console.log(table.toString());
    }
}

module.exports = View