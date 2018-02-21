"use strict"

let controller = require('./controller')

let start = process.argv
controller.navigation(start[2], start[3], start.slice(4));
