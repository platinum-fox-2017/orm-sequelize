const Table = require('cli-table');
const chalk = require('chalk');

class View {
    static dislayTableArticle(data){
        var table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                   , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                   , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                   , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });
          for(let i=0; i<data.length; i++){
              if(i==0){
                table.push(
                    ['id', 'title', 'body', 'id_author', 'id_tag'],
                    [data[i].id, data[i].title, data[i].body, data[i].id_author, data[i].id_tag]
                );
              }else{
                table.push([data[i].id, data[i].title, data[i].body, data[i].id_author, data[i].id_tag])
              }
          }
           
          console.log(chalk.cyan(table.toString())); 
    }

    static dislayTableAuthor(data){
        var table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                   , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                   , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                   , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });
          for(let i=0; i<data.length; i++){
              if(i==0){
                table.push(
                    ['id', 'first_name', 'last_name', 'religion', 'gender', 'age'],
                    [data[i].id, data[i].first_name, data[i].last_name, data[i].religion, data[i].gender, data[i].age]
                );
              }else{
                table.push([data[i].id, data[i].first_name, data[i].last_name, data[i].religion, data[i].gender, data[i].age])
              }
          }
          console.log(chalk.cyan(table.toString())); 
    }
    
    static dislayTableTag(data){
        var table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                   , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                   , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                   , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });
          for(let i=0; i<data.length; i++){
              if(i==0){
                table.push(
                    ['id', 'name'],
                    [data[i].id, data[i].name]
                );
              }else{
                table.push([data[i].id, data[i].name])
              }
          }
           
          console.log(chalk.cyan(table.toString()));  
    }

    static dislayStatus(data){
        console.log(chalk.yellow(data));
    }
}

module.exports = View;