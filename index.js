const control = require('./controller.js')

let argv = process.argv;
control.manageCommand(argv[2], argv[3], argv.slice(4))