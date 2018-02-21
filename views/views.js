const Table = require('cli-table')
const Chalk = require('chalk')

class View{
  constructor(){

  }

  static showHelp(){
    var t = new Table({
      head : ['No.','Function List','Usage' ]
    });

    t.push(
      [Chalk.blue("1."),Chalk.red("node todo.js"),Chalk.green("help")],
      ['2.','node todo.js list','showing all of your task'],
      ['3.','node todo.js add(task content)','add task'],
      ['4.','node todo.js findByID(id)','show your searched task by id'],
      ['5.','node todo.js delete(task_id)','delete your task by id'],
      ['6.','node todo.js complete(task_id)','complete your task by id'],
      ['7.','node todo.js uncomplete(task_id)','uncomplete your task by id'],
      ['8.','node todo.js list:sortAsc','sort ascending'],
      ['9.','node todo.js list:sortDesc','sort descending'],
      ['10.','node todo.js showComplete','show completed task'],
      ['11.','node todo.js showUncomplete','show uncomplete task']
    )

    console.log("" + t);
  }

  static showAuthor(data){
    var t = new Table({
      head : ['ID.','First Name','Last Name','Religion','Gender','Age'],

    })
    for(let i = 0;i<data.length;i++){
        t.push([Chalk.blue(data[i].id),
                Chalk.magenta(data[i].first_name),
                Chalk.yellow(data[i].last_name),
                Chalk.grey(data[i].religion),
                Chalk.blue(data[i].gender),
                Chalk.green(data[i].age)])
      }
    console.log("" + t)
  }

  static showArticle(data){
    var t = new Table({
      head : ['ID.','Title','Body','ID_Author','ID_Tag'],
      colWidths:[5,20,20,15,10]
    })
    for(let i = 0;i<data.length;i++){
        t.push([Chalk.blue(data[i].id),
                Chalk.magenta(data[i].title),
                Chalk.yellow(data[i].body),
                Chalk.grey(data[i].id_author),
                Chalk.blue(data[i].id_tag)]
              )
      }
    console.log(t.toString())
  }

  static showTags(data){
    var t = new Table({
      head : ['ID.','Name'],

    })
    for(let i = 0;i<data.length;i++){
        t.push([Chalk.blue(data[i].id),
                Chalk.magenta(data[i].name)])
      }
    console.log("" + t)
  }

}

module.exports = View
