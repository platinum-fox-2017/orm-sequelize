let authorController = require('./controller/author')
let articleController = require('./controller/article')
let tagController = require('./controller/tag')
let helpController = require('./controller/help')

let command = process.argv
let category = process.argv[2];
let task = process.argv[3];
let data = command.slice(4, command.length);

if (category === 'author') {
    authorController.parsingData(task, data)
} else if (category === 'article') {
    articleController.parsingData(task, data)
} else if (category === 'tag') {
    tagController.parsingData(task, data)
} else if (category === 'help') {
    helpController.showHelp()
}