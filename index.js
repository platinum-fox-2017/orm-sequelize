const Controller = require('./controller/index.js')

//index parse argv
let argv = process.argv
Controller.processCommand(argv);


module.exports = argv
