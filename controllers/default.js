
const view = require('../views/index');
class Default {
    static run(){
        let data = 
`=================Documentation==================
author add -> add<space> "data yang ingin dimasukan"
author readOne -> readOne<space> "masukkan id author"
author readAll -> readAll
author update -> update<space> "masukkan data yang ingin di update dan idnya"
author delete -> delete<space> "masukkan id author"
tag add -> add<space> "data yang ingin dimasukan"
tag readOne -> readOne<space> "masukkan id tag"
tag readAll -> readAll
tag update -> update<space> "masukkan data yang ingin di update dan idnya"
tag delete -> delete<space> "masukkan id tag"
article add -> add<space> "data yang ingin dimasukan"
article readOne -> readOne<space> "masukkan id article"
article readAll -> readAll
article update -> update<space> "masukkan data yang ingin di update dan idnya"
article delete -> delete<space> "masukkan id article"
================================================`;
        view.dislayStatus(data);
    }
}
module.exports = Default;