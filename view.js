const Table = require('cli-table')
const Chalk = require('chalk')

class View{
    constructor(){

    }

    static viewAuthor(data){
        var table = new Table({
            head : ['ID','First Name','Last Name','Religion','Gender','Age'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                      Chalk.blue(data[i].first_name),
                      Chalk.red(data[i].last_name),
                      Chalk.yellow(data[i].religion),
                      Chalk.magenta(data[i].gender),
                      Chalk.cyan(data[i].age)])
            }
      console.log("" + table)
    //   console.log(data.length)
    }

    static viewAuthorOne(data){
        var table = new Table({
            head : ['ID','First Name','Last Name','Religion','Gender','Age'],
      
          })
              table.push([Chalk.green(data.id),
                      Chalk.blue(data.first_name),
                      Chalk.red(data.last_name),
                      Chalk.yellow(data.religion),
                      Chalk.magenta(data.gender),
                      Chalk.cyan(data.age)])
      console.log("" + table)
    }

    static viewTag(data){
        var table = new Table({
            head : ['ID','Tag Name'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                    Chalk.blue(data[i].name)])
            }
      console.log("" + table)
    }

    static viewTagOne(data){
        var table = new Table({
            head : ['ID','Tag Name'],
      
          })
              table.push([Chalk.green(data.id),
                    Chalk.blue(data.name)])
      console.log("" + table)
    }

    static viewArticle(data){
        var table = new Table({
            head : ['ID','Title','Body','ID Author','ID Tag'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                      Chalk.blue(data[i].title),
                      Chalk.red(data[i].body),
                      Chalk.yellow(data[i].id_author),
                      Chalk.magenta(data[i].id_tag)])
            }
      console.log("" + table)
    }

    static viewArticleOne(data){
        var table = new Table({
            head : ['ID','Title','Body','ID Author','ID Tag'],
      
          })
              table.push([Chalk.green(data.id),
                      Chalk.blue(data.title),
                      Chalk.red(data.body),
                      Chalk.yellow(data.id_author),
                      Chalk.magenta(data.id_tag)])
      console.log("" + table)
    }

}

module.exports = View