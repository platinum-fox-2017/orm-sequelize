const Author = require('./controller/author')
const Tag = require('./controller/tag')


let argv = process.argv
let table = process.argv[2]
let command = process.argv[3]
let user = process.argv.splice(4)

if (table === 'author') {
  Author.doSomething(command, user)
}
else if (table === 'tag') {
  Tag.doSomething(command, user)
}
else if (table === 'article') {
  Article.doSomething(command, user)
}



// console.log(argv);
