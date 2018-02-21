const Controller_author = require ('./controllers/author')
const Controller_tag = require ('./controllers/tag')
const Controller_article = require ('./controllers/article')
const View_help = require('./views/index')

let tabel = process.argv[2]
let input = process.argv[3]
let data = process.argv.splice(4)
// console.log(data[0].split(':')[0])


if(tabel === 'help'){
  View_help.showHelp()
}
else if(tabel === 'author'){
  Controller_author.command(input,data)
}
else if(tabel === 'tag'){
  Controller_tag.command(input,data)
}
else if(tabel === 'article'){
  Controller_article.command(input,data)
}

