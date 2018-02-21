"use strict"
const Controller = require('./controllers');
var argv = process.argv

let command = argv[2];
let option = argv.slice(3);
console.log(command, option)
Controller.manageCommand(command, option)