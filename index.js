const Controller = require('./controllers');
const View = require('./views');
const argv = process.argv;
Controller.manageCommand(argv[2],argv.slice(3));
