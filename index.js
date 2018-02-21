const Controller = require('./controller/index.js')

//index parse argv
let argv = process.argv
Controller.processCommand(argv);


module.exports = argv

// sequelize model:generate --name Author --attributes first_name:string,last_name:string,religion:string,gender:string,age:integer

// sequelize model:generate --name Article --attributes title:string,body:string,id_author:integer,id_tag:integer

// sequelize model:generate --name Tag --attributes name:string

// add || author first_name last_name religion gender age
// add || article title body id_author id_tag
// add || tag name

// node index.js
// add author first_name last_name religion gender age
// read_one author id
// read_all
// update author id first_name last_name religion gender age
// delete author id

// node index.js add author Katoki Hajime shinto male 76
