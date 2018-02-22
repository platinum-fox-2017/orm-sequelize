// const sequelize = require('./sequelize')
const {author,tag, article} = require('../models')
const View = require('../view/author')

class Author {
  static doSomething(command, user) {
    if (command === 'read_all') {
      author.findAll().then(authors => {
        let arr = []
        authors.forEach(data => {
          arr.push(data.dataValues)
          // console.log(data.dataValues);
        })
        View.readData(arr)
        process.exit()
      })
    }
    else if (command === 'add') {
      for (var i = 0; i < user.length; i++) {
        var obj = {
          first_name: user[0],
          last_name: user[1],
          religion: user[2],
          gender: user[3],
          age: user[4]
         }
      }
      // console.log(obj);
      author.create(obj).then(function (authors) {
        // console.log(authors.dataValues);
        View.addData(authors.dataValues)
        // console.log('data masuk');
        // process.exit()
      })
    }

    else if (command === 'read_one') {
      let num = user.join('')
      author.findById(num).then(authors => {
        View.read1Data(authors.dataValues)
        // console.log(authors.dataValues);
        // process.exit()
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
      author.findById(id_user).then(authors => {
        author.update({
          first_name: obj.first_name || authors.dataValues.first_name,
          last_name: obj.last_name || authors.dataValues.last_name,
          religion: obj.religion || authors.dataValues.religion,
          gender: obj.gender || authors.dataValues.gender,
          age: obj.age || authors.dataValues.age
        },{
          where: {
            id: id_user
          }
        }).then(authors => {
          author.findById(id_user).then(authors =>{
            View.updateData(authors.dataValues)
            // console.log(authors.dataValues);
            // process.exit()

          })

        })
      })
    }

    else if (command === 'erase') {
      let id_user = +user[0]
      author.destroy({
        where: {
          id: id_user
        }
      }).then(authors => {
        // View.eraseData(authors.dataValues)
        // console.log('data berhasil dihapus');
        // process.exit()
      })
    }
  }
}

module.exports = Author
