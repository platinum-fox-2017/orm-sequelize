const View = require('../views/index');
const AuthorController = require('./author');
const TagController = require('./tag');
const ArticleController = require('./article');

class Controller {
  static manageCommand(command,options){
    if (command == 'help' || command == undefined) {
      View.showAllCommand();
    } else if (command == 'author') {
      AuthorController.commandManager(options);
    } else if (command == 'tag') {
      TagController.commandManager(options);
    } else if (command == 'article') {
      ArticleController.commandManager(options);
    }
  }
}
module.exports = Controller;
