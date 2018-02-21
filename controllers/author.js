const model = require('../models/index');
const View = require('../views/index');

class AuthorController {
  static commandManager(options){
      if(options[0] == 'add'){
        if(options[1] != undefined){
          let data = options[1];
          let objData = AuthorController.changeToObject(data);
          model.authors.build(objData).save().then(() => {
            View.successToSave('Author');
          }).catch(() => {
            View.failToSave('Author');
          });
        }
      } else if (options[0] == 'read_one') {
        let id = options[1];
        model.authors.findById(id).then((author) => {
          View.printResult(author.dataValues);
        })
      } else if (options[0] == 'read_all') {
        model.authors.all({raw: true}).then((author) => {
          View.printResult(author);
        })
      } else if (options[0] == 'read_all') {
        model.authors.all({raw: true}).then((author) => {
          View.printResult(author);
        })
      } else if (options[0] == 'update') {
        if(options[1] != undefined){
          let data = options[1];
          let objData = AuthorController.changeToObject(data);
          let id = options[2];
          model.authors.findById(id).then((author) => {
            author.update(objData).then(() => {
              View.successToUpdate('Author');
            }).catch(() => {
              View.failToUpdate('Author');
            });
          });
        }
      } else if (options[0] == 'delete') {
        let id = options[1];

          model.authors.findById(id).then((author) => {
            return author.destroy()
          })
          .then(() => {
              View.successToDelete('Author');
          }).catch(() => {
              View.failToDelete('Author');
          });
      }
  }
  static changeToObject(data){
    let objData = {};
    let splitData = data.split(',');
    for (let i = 0; i < splitData.length; i++) {
      let splitPerColon = splitData[i].split(':');
      objData[splitPerColon[0]]  = splitPerColon[1];
    }
    return objData;
  }
}
module.exports = AuthorController;
