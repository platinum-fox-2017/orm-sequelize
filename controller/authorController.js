const models = require('../models');
const Views = require('../view/view.js');

class AuthorController {
  static add(input3){
    models.author.create({first_name:input3[0],last_name:input3[1],religion:input3[2],gender:input3[3],age:input3[4]})
    .then((dataAuthor) => {
      models.author.findAll({raw:true}).then((dataAuthor) => {
        Views.viewAuthor(dataAuthor[dataAuthor.length-1]);
      });
    })
  }
  static readOne(input3){
    models.author.findAll({raw:true}).then((dataAuthor) => {
      Views.viewAuthor(dataAuthor[input3-1]);
    });
  }
  static readAll(){
    models.author.findAll({raw:true}).then((dataAuthor) => {
      Views.viewAuthor(dataAuthor);
    });
  }
  static update(input3){
    models.author.update({
      first_name:input3[1],last_name:input3[2],religion:input3[3],gender:input3[4],age:input3[5]},
      {where:{id:
        input3[0]}});
  }
  static delete(input3){
    models.author.destroy({
      where:{id:input3}
    });
  }
}
module.exports = AuthorController;
