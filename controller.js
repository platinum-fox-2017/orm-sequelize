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
                Author.handle(command, options)
                    .then((showValue) => {
                        View.author(showValue);
                    })
                    .catch(err => {
                        View.error(err)
                    });
                break;
            case 'tag':
                Tag.handle(command, options)
                    .then((showValue) => {
                        View.tag(showValue);
                    })
                    .catch(err => {
                        View.error(err)
                    });
                break;
            case 'article':
                Article.handle(command, options)
                    .then((showValue) => {
                        View.article(showValue);
                    })
                    .catch(err => {
                        View.error(err)
                    });
                break;
            default:
                View.help();
                break;
        }
    }

}

module.exports = Controller;
