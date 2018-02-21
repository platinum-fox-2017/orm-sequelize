const workerAuthor = require('../workers/author');
const workerTag = require('../workers/tag');
const workerArticle = require('../workers/article');
const viewAuthor = require('../views/author');
const viewTag = require('../views/tag');
const viewArticle = require('../views/article');

class Controller {

    static menu(tableName, command, option) {
        switch (tableName) {
            case "author":
                switch (command) {
                    case "add":
                        workerAuthor.add(option, viewAuthor.addView);
                        break;
                    case "read_one":
                        workerAuthor.read_one(option[0], viewAuthor.read_oneView);
                        break;
                    case "read_all":
                        workerAuthor.read_all(viewAuthor.read_allView);
                        break;
                    case "update":
                        workerAuthor.update(option, viewAuthor.updateView);
                        break;
                    case "erase":
                        workerAuthor.destroy(option, viewAuthor.destroyView);
                        break;
                }
                break;

            case "tag":
                switch (command) {
                    case "add":
                        workerTag.add(option, viewTag.addView);
                        break;
                    case "read_one":
                        workerTag.read_one(option[0], viewTag.read_oneView);
                        break;
                    case "read_all":
                        workerTag.read_all(viewTag.read_allView);
                        break;
                    case "update":
                        workerTag.update(option, viewTag.updateView);
                        break;
                    case "erase":
                        workerTag.destroy(option, viewTag.destroyView);
                        break;
                }
                break;

            case "article":
                switch (command) {
                    case "add":
                        workerArticle.add(option, viewArticle.addView);
                        break;
                    case "read_one":
                        workerArticle.read_one(option[0], viewArticle.read_oneView);
                        break;
                    case "read_all":
                        workerArticle.read_all(viewArticle.read_allView);
                        break;
                    case "update":
                        workerArticle.update(option, viewArticle.updateView);
                        break;
                    case "erase":
                        workerArticle.destroy(option, viewArticle.destroyView);
                        break;
                }
                break;
        }
    }
}

module.exports = Controller;