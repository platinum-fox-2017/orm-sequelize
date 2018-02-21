"use strict"

class View {
    static help() {
        console.log(`
=== documentation ==========================
author add  ->  add<space> "data yang ingin dimasukan"
author read_one  ->  read_one<space> "masukkan id author"
author real_all ->  read_all
author update ->  update<space>id<space>column_name1:updateValue,column_name2:updateValue2,...
author delete  ->  delete<space> "masukan id author"
tag add  -> add<space> "data yang ingin dimasukan"
tag read_one  ->  read_one<space> "masukkan id tag"
tag real_all ->  read_all
tag update -> update<space>id<space>column_name1:updateValue,column_name2:updateValue2,...
tag delete  ->  delete<space> "masukan id tag"
article add  -> add<space> "data yang ingin dimasukan"
article read_one  ->  read_one<space> "masukkan id article"
article real_all ->  read_all
article update -> update<space>id<space>column_name1:updateValue,column_name2:updateValue2,...
article delete  ->  delete<space> "masukan id article"`)
    }
}

module.exports = View;