const Author = require('./controllers/cont_author.js');

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
