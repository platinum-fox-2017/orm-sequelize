const AuthorController = require('./authorController.js');
const TagController = require('./tagController.js');
const ArticleController = require('./articleController.js');
const argv = process.argv;

class Controller {
  static command(input1,input2,input3){
    if(input1==='help'){

    } else if(input1==='author'){
      if(input2==='add'){
        AuthorController.add(input3);
      } else if(input2==='read_one'){
        AuthorController.readOne(input3);
      } else if(input2==='read_all'){
        AuthorController.readAll();
      } else if(input2==='update'){
        AuthorController.update(input3);
      } else if(input2==='delete'){
        AuthorController.delete(input3);
      } else {
        console.log('Wrong command!');
      }
    } else if(input1==='tag'){
      if(input2==='add'){
        TagController.add(input3);
      } else if(input2==='read_one'){
        TagController.readOne(input3);
      } else if(input2==='read_all'){
        TagController.readAll();
      } else if(input2==='update'){
        TagController.update(input3);
      } else if(input2==='delete'){
        TagController.delete(input3);
      } else {
        console.log('Wrong command!');
      }
    } else if(input1==='article'){
      if(input2==='add'){
        ArticleController.add(input3);
      } else if(input2==='read_one'){
        ArticleController.readOne(input3);
      } else if(input2==='read_all'){
        ArticleController.readAll();
      } else if(input2==='update'){
        ArticleController.update(input3);
      } else if(input2==='delete'){
        ArticleController.delete(input3);
      } else {
        console.log('Wrong command!');
      }
    } else {
      console.log('Wrong command!');
    }
  }
}

module.exports = Controller;
