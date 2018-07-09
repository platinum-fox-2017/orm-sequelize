const authorController = require('./controller/authorController.js')
const tagController = require('./controller/tagController.js')
const articleController = require('./controller/articleController.js')
const def = require('./view/default.js')

const argv = process.argv

class Start {
    static run (){
        switch (argv[2]){
            case 'author': authorController.run(argv.splice(3)) ; break;
            case 'tag': tagController.run(argv.splice(3)); break;
            case 'article': articleController.run(argv.splice(3)) ; break;
            default: def.default(); break;
        }
    }
}

Start.run()
