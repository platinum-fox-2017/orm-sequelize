const model = require('../models/index');
const View = require('../views/index');

class ArticleController {
  static commandManager(options){
      if(options[0] == 'add'){
        if(options[1] != undefined){
          let data = options[1];
          let objData = ArticleController.changeToObject(data);
          model.articles.build(objData).save().then(() => {
            View.successToSave('Article');
          }).catch(() => {
            View.failToSave('Article');
          });
        }
      } else if (options[0] == 'read_one') {
        let id = options[1];
        model.articles.findById(id).then((article) => {
          View.printResult(article.dataValues);
        })
      } else if (options[0] == 'read_all') {
        model.articles.all({raw: true}).then((article) => {
          View.printResult(article);
        })
      } else if (options[0] == 'read_all') {
        model.articles.all({raw: true}).then((article) => {
          View.printResult(article);
        })
      } else if (options[0] == 'update') {
        if(options[1] != undefined){
          let data = options[1];
          let objData = ArticleController.changeToObject(data);
          let id = options[2];
          model.articles.findById(id).then((article) => {
            article.update(objData).then(() => {
              View.successToUpdate('Article');
            }).catch(() => {
              View.failToUpdate('Article');
            });
          });
        }
      } else if (options[0] == 'delete') {
        let id = options[1];

          model.articles.findById(id).then((article) => {
            return article.destroy()
          })
          .then(() => {
              View.successToDelete('Article');
          }).catch(() => {
              View.failToDelete('Article');
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
module.exports = ArticleController;
