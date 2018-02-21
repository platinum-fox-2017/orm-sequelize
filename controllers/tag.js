const {article,author,tag} = require('../models');
const View = require('../views/tag')

class Tag {

  static getCommand(table,command,input) {
    if(command === 'add') {
      let objTag = {}
      objTag.name = input[0]
      tag.create(objTag)
      .then(data=> {
        console.log(`Successfully add data into ${table}`);
        process.exit()
      })
    } else if(command === 'read_all') {
      tag.findAll().then(tags => {
        let arr = []
        tags.forEach(data => {
          arr.push(data.dataValues)
        })
        View.showData(arr)
        process.exit()
      })
    } else if(command === 'read_one') {
      tag.findById(+input).then(tags => {
        View.showData(tags.dataValues)
        process.exit()
      })
    } else if(command === 'update') {
      let idInput = +input[0]
      let params = input.slice(1,input.length)
      let objTag = {}
      params.map((v,i,a) => {
        if(i % 2 === 0) {
          objTag[v] = a[i+1]
        }
      })
      tag.update(objTag,{
        where : {id: idInput}
      }).then(
        process.exit()
      )
    } else if(command === 'erase') {
      let idInput = +input
      tag.destroy({
        where: {id: idInput}
      })
    }
  }
}


module.exports = Tag
