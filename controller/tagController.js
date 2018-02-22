const models = require('../models');
const Views = require('../view/view.js');

class TagController {
  static add(input3){
    models.tag.create({name:input3[0]})
    .then((dataTag) => {
      models.tag.findAll({raw:true}).then((dataTag) => {
        Views.viewTag(dataTag[dataTag.length-1],input3);
      });
    })
  }
  static readOne(input3){
    models.tag.findAll({raw:true}).then((dataTag) => {
      Views.viewTag(dataTag[input3-1],input3);
    });
  }
  static readAll(){
    models.tag.findAll({raw:true}).then((dataTag) => {
      Views.viewTag(dataTag);
    });
  }
  static update(input3){
    models.tag.update({
      name:input3[1]},
      {where:{id:
        input3[0]}})
    Views.viewTag('update',input3[0]);
  }
  static delete(input3){
    models.tag.destroy({
      where:{id:input3}
    });
    Views.viewTag('delete',input3[0]);
  }
}

module.exports = TagController;
