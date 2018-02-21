const controller = require('./controllers/controller');

let myArgv = process.argv;

controller.menu(myArgv[2],myArgv[3],myArgv.slice(4))
// console.log(myArgv[2],myArgv.slice(3));
