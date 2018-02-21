const {article,author,tag} = require('../models');
const View = require('../views/author.js');

class Author {

  static getCommand(table,command,input) {
    if(command === 'add') {
      let objAuthor = {}
      objAuthor.first_name = input[0]
      objAuthor.last_name = input[1]
      objAuthor.religion = input[2]
      objAuthor.gender = input[3]
      objAuthor.age = input[4]
      author.create(objAuthor)
      .then(data=> {
        console.log('Insert data success');
        process.exit()
      })
    } else if(command === 'read_all') {
      author.findAll().then(authors => {
        let arr  = []
        authors.forEach(data => {
          arr.push(data.dataValues)
        })
        View.showData(arr)
        process.exit()
      })
    } else if(command === 'read_one') {
      author.findById(+input).then(authors => {
        View.showData(authors.dataValues)
        process.exit()
      })
    } else if(command === 'update') {
      let idInput = +input[0]
      let params = input.slice(1,input.length)
      let objAuthor = {}
      params.map((v,i,a) => {
        if(i % 2 === 0) {
          objAuthor[v] = a[i+1]
        }
      })
      author.update(objAuthor,{
        where : {id: idInput}
      }).then(data=> {
        console.log('update data success');
        process.exit()
      })
    } else if(command === 'erase') {
      let idInput = +input
      author.destroy({
        where: {id: idInput}
      })
      .then(data=> {
        console.log(`delete data success`);
        process.exit()
      })
    }
  }
}

module.exports = Author
