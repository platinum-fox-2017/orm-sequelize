const Controllers =  require('./controllers')

const argv = process.argv
const command = argv[2]
const options = argv.slice(3)

Controllers.command(command, options)