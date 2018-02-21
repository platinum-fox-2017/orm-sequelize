const Table = require('cli-table');

class Views {
  static viewAuthor(input){
    var tableAuthor = new Table({ head: ['ID','First Name','Last Name','Religion','Gender','Age'] });
    for(let i=0; i<input.length; i++){
      tableAuthor.push([input[i].id,input[i].first_name,input[i].last_name,input[i].religion,input[i].gender,input[i].age]);
    }
    console.log(tableAuthor.toString());
  }
  static viewTag(input){
    var tableTag = new Table({ head: ['ID','Name'] });
    for(let i=0; i<input.length; i++){
      tableTag.push([input[i].id,input[i].name]);
    }
    console.log(tableTag.toString());
  }
  static viewArticle(input){
    var tableArticle = new Table({ head: ['ID','Title','Body','id_Author','id_Tag'],
    colWidths: [5,25,25,10,10]});
    for(let i=0; i<input.length; i++){
      tableArticle.push([input[i].id,input[i].title,input[i].body,input[i].id_author,input[i].id_tag]);
    }
    console.log(tableArticle.toString());
  }
}

module.exports = Views;
