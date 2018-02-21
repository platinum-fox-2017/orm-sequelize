const controller = require('./controllers/controller');
const ArticleController = require('./controllers/ArticleController');
const TagController = require('./controllers/TagController');
const AuthorController = require('./controllers/AuthorController');
// const controller = require('./controllers/controller');
let myArgv = process.argv;


switch(myArgv[2]) {
    case "author":
                    AuthorController.menu(myArgv[3],myArgv.slice(4))
                    break;
    case "tag":
                    TagController.menu(myArgv[3],myArgv.slice(4))
                    break;
    case "article":
                    ArticleController.menu(myArgv[3],myArgv.slice(4))
                    break;
}
