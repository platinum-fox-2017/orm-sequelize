const Author = require('./controllers/cont_author.js')
const Tag = require('./controllers/cont_tag.js')
const Article = require('./controllers/cont_article.js')

const category = process.argv[2]
const task = process.argv[3]
const input = process.argv.splice(4)

if(category === 'author'){
  if(task === 'read_all'){
    Author.readAll()
  }
  else if(task === 'read_one'){
    Author.readOne(input)
  }
  else if(task === 'add'){
    Author.add(input)
  }
  else if(task === 'update'){
    Author.update(input)
  }
  else if(task === 'delete'){
    Author.delete(input)
  }
}
else if(category === 'tag'){
  if(task === 'read_all'){
    Tag.readAll()
  }
  else if(task === 'read_one'){
    Tag.readOne(input)
  }
  else if(task === 'add'){
    Tag.add(input)
  }
  else if(task === 'update'){
    Tag.update(input)
  }
  else if(task === 'delete'){
    Tag.delete(input)
  }
}
else if(category === 'article'){
  if(task === 'read_all'){
    Article.readAll()
  }
  else if(task === 'read_one'){
    Article.readOne(input)
  }
  else if(task === 'add'){
    Article.add(input)
  }
  else if(task === 'update'){
    Article.update(input)
  }
  else if(task === 'delete'){
    Article.delete(input)
  }
}
