// const sequelize = require('./sequelize')
const {author, tag, article} = require('../models')
class Article {
  static doSomething(command, user) {
    if (command === 'read_all') {
      article.findAll().then(articles => {
        articles.forEach(data => {
          console.log(data.dataValues);
        })
        process.exit()
      })
    }
    else if (command === 'add') {
      for (var i = 0; i < user.length; i++) {
        var obj = {
          title: user[0],
          body: user[1],
          id_author: user[2],
          id_tag: user[3]
         }
      }
      console.log(obj);
      article.create(obj).then(function () {
        console.log('data masuk');
        process.exit()
      })
    }

    else if (command === 'read_one') {
      let num = user.join('')
      console.log(num)
      article.findById(num).then(articles => {
        console.log(articles.dataValues);
        process.exit()
      })
    }

    else if (command === 'update') {
      // console.log(user);
      let id_user = +user[0]
      let slice = user.slice(1)
      let obj = {}
      for (var i = 0; i < slice.length; i++) {
        let split = slice[i].split(' ')
        obj[split[0]] = split[1]
      }
      // console.log(id_user);
      article.findById(id_user).then(articles => {
        article.update({
          title: obj.title || articles.dataValues.title,
          body: obj.body || articles.dataValues.body,
          id_author: obj.id_author || articles.dataValues.id_author,
          id_tag: obj.id_tag || articles.dataValues.id_tag
        },{
          where: {
            id: id_user
          }
        }).then(articles => {
          article.findById(id_user).then(articles =>{
            console.log(articles.dataValues);
            process.exit()

          })

        })
      })
    }

    else if (command === 'erase') {
      let id_user = +user[0]
      article.destroy({
        where: {
          id: id_user
        }
      }).then(articles => {
        console.log('data berhasil dihapus');
        process.exit()
      })
    }
  }
}

module.exports = Article
