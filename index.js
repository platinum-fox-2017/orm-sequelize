const AuthorController = require('./controllers/author');
const ArticleController = require('./controllers/article');
const TagController = require('./controllers/tag');
const Default = require('./controllers/default');

const argv = process.argv;

switch(argv[2]){
    case 'author': AuthorController.run(argv.splice(3)); break;
    case 'article': ArticleController.run(argv.splice(3)); break;
    case 'tag': TagController.run(argv.splice(3)); break;
    default: Default.run();
}
