const Models = require('../models');
const Views = require('../views')

class Controller {
    constructor() {
    }

    static manageCommand(command,options) {
        switch(true) {
            case (command == 'help') : this.help(); break;
            case (options[0] == 'read_all') : this.read_all(command); break;
            case (options[0] == 'read_one') : this.read_one(command,options[1]); break;
            case (command == 'author' && options[0] == 'add') : this.add_Author(options); break;
            case (command == 'article' && options[0] == 'add') : this.add_Article(options); break;
            case (command == 'tag' && options[0] == 'add') : this.add_Tag(options); break;
            case (command == 'author' && options[0] == 'update') : this.update_Author(options); break;
            case (command == 'article' && options[0] == 'update') : this.update_Article(options); break;
            case (command == 'tag' && options[0] == 'update') : this.update_Tag(options); break;
            
            case (command == 'author' && options[0] == 'delete') : this.delete_Author(options); break;
            case (command == 'article' && options[0] == 'delete') : this.delete_Article(options); break;
            case (command == 'tag' && options[0] == 'delete') : this.delete_Tag(options); break;
            
            
            
            default: this.help();
        }
    }

    static help() {
        Views.showHelp();
    }

    static read_all(tableName) {
        Views.readAll(tableName);
    }

    static read_one(tableName,id) {
        Views.readOne(tableName,id);
    }

    static add_Author(arrOptions) {
        Views.addAuthor(arrOptions);
    }

    static add_Article(arrOptions) {
        Views.addArticle(arrOptions);
    }

    static add_Tag(arrOptions) {
        Views.addTag(arrOptions);
    }

    static update_Author(arrOptions) {
        Views.updateAuthor(arrOptions);
    }
    
    static update_Article(arrOptions) {
        Views.updateArticle(arrOptions);
    }
    
    static update_Tag(arrOptions) {
        Views.updateTag(arrOptions);
    }

    static delete_Author(arrOptions) {
        Views.deleteAuthor(arrOptions);
    }

    static delete_Article(arrOptions) {
        Views.deleteArticle(arrOptions);
    }

    static delete_Tag(arrOptions) {
        Views.deleteTag(arrOptions);
    }

}


module.exports = Controller;