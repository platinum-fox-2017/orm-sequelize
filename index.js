const article = require ('./controllers/article')
const author = require ('./controllers/author')
const tag = require ('./controllers/tag')

let table = process.argv[2]
let command = process.argv[3]
let input = process.argv.splice(4)

if(table === 'article') {
  article.getCommand(table,command,input)
} else if(table === 'author') {
  author.getCommand(table,command,input)
} else if(table === 'tag') {
  tag.getCommand(table,command,input)
} else {
  let helpList = [`Here's your command list:`,`<table> `]
  console.log(helpList.join('\n'));
}
