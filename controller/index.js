const View = require('../view/index.js');
const argv = require('../index.js');

// require model here
const db = require('../models/index.js')

class Controller {
  constructor() {

  }

  static processCommand(argv) {
    let command = argv[2];
    let options = argv.slice(3);
    if (command === 'add') {
      if (options[0] === 'author') {
        Controller.createDataAuthor(options)
      } else {
        if (options[0] === 'article') {
          Controller.createDataArticle(options)
        } else {
          if (options[0] === 'tag') {
            Controller.createDataTag(options)
          }
        }
      }
    } else if (command === 'read_one') {
      if (options[0] === 'author') {
        Controller.findOneAuthor(options)
      } else {
        if (options[0] === 'article') {
          Controller.findOneArticle(options)
        } else {
          if (options[0] === 'tag') {
            Controller.findOneTag(options)
          }
        }
      }
    } else if (command === 'read_all') {
      if (options[0] === 'author') {
        Controller.findAllAuthors()
      } else {
        if (options[0] === 'article') {
          Controller.findAllArticles()
        } else {
          if (options[0] === 'tag') {
            Controller.findAllTag()
          }
        }
      }
    } else if (command === 'update') {
      if (options[0] === 'author') {
        Controller.updateAuthor(options)
      } else {
        if (options[0] === 'article') {
          Controller.updateArticle(options)
        } else {
          if (options[0] === 'tag') {
            Controller.updateTag(options)
          }
        }
      }
    } else if (command === 'delete') {
      if (options[0] === 'author') {
        Controller.deleteAuthor(options)
      } else {
        if (options[0] === 'article') {
          Controller.deleteArticle(options)
        } else {
          if (options[0] === 'tag') {
            Controller.deleteTag(options)
          }
        }
      }
    }
  }

  static createDataAuthor(options) {
    db.author.create({
      first_name: options[1],
      last_name: options[2],
      religion: options[3],
      gender: options[4],
      age: options[5],
    }).then(newAuthor => {
      View.displayAddAuthor(newAuthor);
    })
  }

  static findOneAuthor(options) {
    db.author.findOne({
      where : {
        id : options[1]
      },
      attributes: ['id','first_name', 'last_name']

    }).then(foundAuthor => {
      View.displayReadOneAuthor(foundAuthor);
    })
  }

  static findAllAuthors() {
    db.author.findAll({
      // attributes: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age']
    }).then(authors =>{
      View.displayReadAllAuthor(authors);
      // console.log(authors);
    });
  }

  static updateAuthor(options) {
    db.author.findOne({
      where : {
        id : options[1]
      },
      attributes: ['id', 'first_name', 'last_name', 'religion', 'gender', 'age']
    }).then(author => {
      author.update({
        first_name : options[2],
        last_name : options[3],
        religion : options[4],
        gender : options[5],
        age : options[6]
      });
      View.displayUpdateAuthor(author);
    })
  }

  static deleteAuthor(options) {
    db.author.findOne({
      where : {
        id : options[1]
      }
    }).then(author => {
      View.displayEraseAuthor(author)
      return author.destroy();
    })
  }

// ###############################################################

static createDataArticle(options) {
  db.article.create({
    title: options[1],
    body: options[2],
    id_author: options[3],
    id_tag: options[4]
  }).then(article => {
    View.displayAddArticle(article);
  })
}

static findOneArticle(options) {
  db.article.findOne({
    where : {
      id : options[1]
    },
    attributes: ['id', 'title']

  }).then(article => {
    View.displayReadOneArticle(article);
  })
}

static findAllArticles() {
  db.article.findAll({
    // attributes: ['id', 'title', 'body', 'id_author', 'id_tag']
  }).then(articles =>{
    View.displayReadAllArticle(articles)
  });
}

static updateArticle(options) {
  db.article.findOne({
    where : {
      id : options[1]
    },
    attributes: ['id', 'title', 'body', 'id_author', 'id_tag']
  }).then(article => {
    article.update({
      title : options[2],
      body : options[3],
      id_author : options[4],
      id_tag : options[5]
    });
    View.displayUpdateArticle(article);
  })
}

static deleteArticle(options) {
  db.article.findOne({
    where : {
      id : options[1]
    }
  }).then(article => {
    View.displayEraseArticle(article);
    return article.destroy();
  })
}

// ##################################################################


static createDataTag(options) {
  db.tag.create({
    name: options[1]
  }).then(tag => {
    View.displayAddTag(tag);
  })
}

static findOneTag(options) {
  db.tag.findOne({
    where : {
      id : options[1]
    },
    attributes: ['id','name']

  }).then(tag => {
    View.displayReadOneTag(tag);
  })
}

static findAllTag() {
  db.tag.findAll({
    // attributes: ['id', 'name']
  }).then(tags =>{
    View.displayReadAllTag(tags);
  });
}

static updateTag(options) {
  db.article.findOne({
    where : {
      id : options[1]
    },
    attributes: ['id', 'name']
  }).then(tag => {
    tag.update({
      name : options[2]
    });
    View.displayUpdateTag(tag);
  })
}

static deleteTag(options) {
  db.tag.findOne({
    where : {
      id : options[1]
    }
  }).then(tag => {
    View.displayEraseTag(tag);
    return tag.destroy();
  })
}

}

module.exports = Controller
