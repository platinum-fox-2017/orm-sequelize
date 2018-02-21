const Table = require('cli-table');
const chalk = require('chalk');

class Views {
  static viewAuthor(input, input1){
    if(input==='update'){
      console.log(`Data Author pada id ${input1} telah diperbarui`);
    } else if(input==='delete'){
      console.log(`Data Author pada id ${input1} telah dihapus`);
    } else {
      var tableAuthor = new Table({ head: ['ID','First Name','Last Name','Religion','Gender','Age'] });
      for(let i=0; i<input.length; i++){
        let id = chalk.green(input[i].id);
        let firstName = chalk.blue(input[i].first_name);
        let lastName = chalk.red(input[i].last_name);
        let religion = chalk.yellow(input[i].religion);
        let gender = chalk.magenta(input[i].gender);
        let age = chalk.blue(input[i].age);
        tableAuthor.push([id,firstName,lastName,religion,gender,age]);
      }
      console.log(tableAuthor.toString());
    }
  }
  static viewTag(input,input1){
    if(input==='update'){
      console.log(`Data Tag pada id ${input1} telah diperbarui`);
    } else if(input==='delete'){
      console.log(`Data Tag pada id ${input1} telah dihapus`);
    } else {
      var tableTag = new Table({ head: ['ID','Name'] });
      for(let i=0; i<input.length; i++){
        let id = chalk.blue(input[i].id);
        let name = chalk.green(input[i].name);
        tableTag.push([id,name]);
      }
      console.log(tableTag.toString());
    }
  }
  static viewArticle(input,input1){
    if(input==='update'){
      console.log(`Data Article pada id ${input1} telah diperbarui`);
    } else if(input==='delete'){
      console.log(`Data Article pada id ${input1} telah dihapus`);
    } else {
      var tableArticle = new Table({ head: ['ID','Title','Body','id_Author','id_Tag'],
      colWidths: [5,25,25,10,10]});
      for(let i=0; i<input.length; i++){
        let id = chalk.magenta(input[i].id);
        let title = chalk.blue(input[i].title);
        let body = chalk.green(input[i].body);
        let idAuthor = chalk.red(input[i].id_author);
        let idTag = chalk.white(input[i].id_tag);
        tableArticle.push([id,title,body,idAuthor,idTag]);
      }
      console.log(tableArticle.toString());
    }
  }
}

module.exports = Views;
