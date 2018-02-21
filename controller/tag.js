const {author,tag} = require('../models')
class Tag {
  static doSomething(command, user) {
    if (command === 'read_all') {
      tag.findAll().then(tags => {
        tags.forEach(data => {
          console.log(data.dataValues);
        })
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
      console.log(obj);
      tag.create(obj).then(function () {
        console.log('data masuk');
        process.exit()
      })
    }

    else if (command === 'read_one') {
      let num = user.join('')
      console.log(num)
      tag.findById(num).then(tags => {
        console.log(tags.dataValues);
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
      tag.findById(id_user).then(tags => {
        tag.update({
          name: obj.name || tags.dataValues.name
        },{
          where: {
            id: id_user
          }
        }).then(tags => {
          tag.findById(id_user).then(tags =>{
            console.log(tags.dataValues);
            process.exit()

          })

        })
      })
    }

    else if (command === 'erase') {
      let id_user = +user[0]
      tag.destroy({
        where: {
          id: id_user
        }
      })
    }
  }
}

module.exports = Tag
