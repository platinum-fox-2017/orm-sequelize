const Controller = require('./controllers');

const input = process.argv;
Controller.menu(input[2], input.splice(3));