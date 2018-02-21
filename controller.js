const Author = require('./controllers/author');
const Article = require('./controllers/article');
const Tag = require('./controllers/tag');
const View = require('./view');

const target = process.argv[2];
const command = process.argv[3];
const options = process.argv[4];

class Controller{
    static run(){
        switch(target){
            case 'help':
                View.help();
                break;
            case 'author':
                Author.handle(command, options,View.author);
                break;
            case 'tag':
                Tag.handle(command, options,View.tag);
                break;
            case 'article':
                Article.handle(command, options,View.article);
                break;
        }
    }

}

module.exports = Controller;
