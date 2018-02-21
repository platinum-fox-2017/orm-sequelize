'use strict'
const {ControllerAuthor} = require('./controllers/controller-author')
const { ControllerTag } = require('./controllers/controller-tag')
const { ControllerArticle } = require('./controllers/controller-article')
const {ViewAuthor} = require('./views/view-author')

let argv = process.argv.slice(2)

if (argv[0] === undefined) {
    console.log('"help" for more commands menu!');
}else if (argv[0] === 'help') {
    ViewAuthor.showHelp()
}else if (argv[0] === 'author') {
    ControllerAuthor.command(argv[1],argv.slice(2))
}else if (argv[0] === 'tag') {
    ControllerTag.command(argv[1],argv.slice(2))
}else if (argv[0] === 'article') {
    ControllerArticle.command(argv[1], argv.slice(2))
}