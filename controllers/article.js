const {article,author,tag} = require('../models');
const View = require('../views/article')

class Article {

  static getCommand(table,command,input) {
    if(command === 'add') {
      let objArticle = {}
      objArticle.title = input[0]
      objArticle.body = input[1]
      objArticle.id_author = input[2] || null
      objArticle.id_tag = inputp[3] || null
      article.create(objArticle)
      .then(data => {
        console.log(`Successfully add data into ${table}`);
        process.exit()
      })
    } else if(command === 'read_all') {
      article.findAll().then(articles => {
        let arr = []
        articles.forEach(data => {
          arr.push(data.dataValues)
        })
        View.showData(arr)
        process.exit()
      })
    } else if(command === 'read_one') {
      article.findById(+input).then(articles => {
        View.showData(articles.dataValues)
        process.exit()
      })
    } else if(command === 'update') {
      let idInput = +input[0]
      let params = input.slice(1,input.length)
      let objArticle = {}
      params.map((v,i,a) => {
        if(i % 2 === 0) {
          objArticle[v] = a[i+1]
        }
      })
      article.update(objArticle,{
        where : {id: idInput}
      }).then(data=> {
        console.log(`update data success`);
        process.exit()
      })
    } else if(command === 'erase') {
      let idInput = +input
      article.destroy({
        where: {id: idInput}
      })
    }
  }
}




module.exports = Article
