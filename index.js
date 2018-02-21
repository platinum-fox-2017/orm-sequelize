var Controller = require('./controller/index.js')

var argv = process.argv

var run = new Controller(argv[2],argv[3],argv[4])
