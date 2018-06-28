const View = require('../view')
const Models = require('../models')

class Controller {
  static command(command, options) {
    if(!command || command === 'help') {
      View.help()
    } else if(command === 'author') {
      if(options[0] === 'read_all') {
        Models.author.findAll({raw: true}).then(data_author => {
          View.authorReadAll(data_author)
        })
      } else if(options[0] === 'read_one') {
        Models.author.findById(options[1], {raw: true}).then(data => {
          View.authorFindById(data)
        })
      } else if(options[0] === 'add') {
        let inserts = options[1].split(',')
        let obj = {}
        for(let i = 0; i < inserts.length; i++) {
          let insert = inserts[i].split(':')
          obj[`${insert[0]}`] = insert[1].replace(/-/g, ' ')
        }
        Models.author.findOrCreate({where: obj})
        .spread((user) => {
          View.authorAdd(user.get({
            plain: true
          }))
          View.authorAdd(`adding author succeeded`)
        })
      } else if(options[0] === 'update') {
        let id = options[1]
        let updates = options[2].split(',')
        for(let i = 0; i < updates.length; i++) {
          let update = updates[i].split(':')
          Models.author.update({[`${update[0]}`]: `${update[1]}`},
            {where: {id: id}}, {returning: true})
          .then(() => {
            View.articleUpdate()
          })
          .catch(err => console.log(err))
        }
      } else if(options[0] === 'delete') {
        Models.author.destroy({where: {id: options[1]}}).then(()=>{
          View.authorDelete(options[1])
        })
      }
    } else if(command === 'tag') {
      if(options[0] === 'read_all') {
        Models.tag.findAll({raw: true}).then(data_tag => {
          View.tagReadAll(data_tag)
        })
      } else if(options[0] === 'read_one') {
        Models.tag.findById(options[1], {raw: true}).then(data => {
          View.tagFindById(data)
        })
      } else if(options[0] === 'add') {
        let inserts = options[1].split(',')
        let obj = {}
        for(let i = 0; i < inserts.length; i++) {
          let insert = inserts[i].split(':')
          obj[`${insert[0]}`] = insert[1].replace(/-/g, ' ')
        }
        Models.tag.findOrCreate({where: obj})
        .spread((user) => {
          View.tagAdd(user.get({
            plain: true
          }))
          View.tagAdd(`adding tag succeeded`)
        })
      } else if(options[0] === 'update') {
        let id = options[1]
        let updates = options[2].split(',')
        let arr = []
        let obj = {}
        for(let i = 0; i < updates.length; i++) {
          let update = updates[i].split(':')
          obj[`${update[0]}`] = update[1].replace(/-/g, ' ')
        }

        Models.tag.update(obj,
            {where: {id: id}}, {returning: true})
          .then(() => {
            View.articleUpdate()
          })
          .catch(err => console.log(err))
      } else if(options[0] === 'delete') {
        Models.tag.destroy({where: {id: options[1]}}).then(()=>{
          View.tagDelete(options[1])
        })
      }
    } else if(command === 'article') {
      if(options[0] === 'read_all') {
        Models.article.findAll({raw: true}).then(data_article => {
          View.articleReadAll(data_article)
        })
      } else if(options[0] === 'read_one') {
        Models.article.findById(options[1], {raw: true}).then(data => {
          View.articleFindById(data)
        })
      } else if(options[0] === 'add') {
        let inserts = options[1].split(',')
        let obj = {}
        for(let i = 0; i < inserts.length; i++) {
          let insert = inserts[i].split(':')
          obj[`${insert[0]}`] = insert[1].replace(/-/g, ' ')
        }
        Models.article.findOrCreate({where: obj})
        .spread((user) => {
          View.articleAdd(user.get({
            plain: true
          }))
          View.articleAdd(`adding article succeeded`)
        })
      } else if(options[0] === 'update') {
        let id = options[1]
        let updates = options[2].split(',')
        let arr = []
        let obj = {}
        for(let i = 0; i < updates.length; i++) {
          let update = updates[i].split(':')
          obj[`${update[0]}`] = update[1].replace(/-/g, ' ')
        }

        Models.article.update(obj,
            {where: {id: id}}, {returning: true})
          .then(() => {
            View.articleUpdate()
          })
          .catch(err => console.log(err))
      } else if(options[0] === 'delete') {
        Models.article.destroy({where: {id: options[1]}}).then(()=>{
          View.articleDelete(options[1])
        })
      }    
    }
  }
}

module.exports = Controller