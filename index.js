
const Controller = require('./controller.js')

const argv = process.argv
const syntax = argv[2]
const option = argv[3]
const option2 = argv.slice(4)



Controller.command(syntax, option, option2)