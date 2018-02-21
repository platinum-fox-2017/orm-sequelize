const models = require('../models');
const Views = require('../view/view.js');

class ArticleController {
  static add(input3){
    models.article.create({title:input3[0],body:input3[1],id_author:input3[2],id_tag:input3[3]})
    .then((dataArticle) => {
      models.article.findAll({raw:true}).then((dataArticle) => {
        Views.view(dataArticle[dataArticle.length-1]);
      });
    })
  }
  static readOne(input3){
    models.article.findAll({raw:true}).then((dataArticle) => {
      Views.view(dataArticle[input3-1]);
    });
  }
  static readAll(){
    models.article.findAll({raw:true}).then((dataArticle) => {
      Views.view(dataArticle);
    });
  }
  static update(input3){
    models.article.update({
      title:input3[0],body:input3[1],id_author:input3[2],id_tag:input3[3]},
      {where:{id:
        input3[0]}})
  }
  static delete(input3){
    models.article.destroy({
      where:{id:input3}
    });
  }
}

module.exports = ArticleController;
