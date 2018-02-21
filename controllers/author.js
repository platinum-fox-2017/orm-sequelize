const {author} = require('./models')

author.findAll().then(function(data){
  console.log(data)
})