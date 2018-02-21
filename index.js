const controller = require('./contollers');

var argv_data = process.argv;

controller.manageCommand(argv_data[2],argv_data.slice(3)) // array of strings