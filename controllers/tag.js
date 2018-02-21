const model = require('../models/index');
const View = require('../views/index');

class TagController {
  static commandManager(options){
      if(options[0] == 'add'){
        if(options[1] != undefined){
          let data = options[1];
          let objData = TagController.changeToObject(data);
          model.tags.build(objData).save().then(() => {
            View.successToSave('Tag');
          }).catch(() => {
            View.failToSave('Tag');
          });
        }
      } else if (options[0] == 'read_one') {
        let id = options[1];
        model.tags.findById(id).then((tag) => {
          View.printResult(tag.dataValues);
        })
      } else if (options[0] == 'read_all') {
        model.tags.all({raw: true}).then((tag) => {
          View.printResult(tag);
        })
      } else if (options[0] == 'read_all') {
        model.tags.all({raw: true}).then((tag) => {
          View.printResult(tag);
        })
      } else if (options[0] == 'update') {
        if(options[1] != undefined){
          let data = options[1];
          let objData = TagController.changeToObject(data);
          let id = options[2];
          model.tags.findById(id).then((tag) => {
            tag.update(objData).then(() => {
              View.successToUpdate('Tag');
            }).catch(() => {
              View.failToUpdate('Tag');
            });
          });
        }
      } else if (options[0] == 'delete') {
        let id = options[1];

          model.tags.findById(id).then((tag) => {
            return tag.destroy()
          })
          .then(() => {
              View.successToDelete('Tag');
          }).catch(() => {
              View.failToDelete('Tag');
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
module.exports = TagController;
