const Tags = require('./controllerTags')
const Authors = require('./controllerAuthors')
const Articles = require('./controllerArticles')
const Help = require('./controllerHelp')

let command = process.argv.slice(2)

if(command[0] === 'tag'){
    Tags.commandManage(command)
}else if (command[0] === 'author'){
    Authors.commandManage(command)
}else if(command[0] === 'article'){
    Articles.commandManage(command)
}else{
    Help.commandManage()
}