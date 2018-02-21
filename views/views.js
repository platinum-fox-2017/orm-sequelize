const Table = require('cli-table')
const Chalk = require('chalk')

class View{
  constructor(){

  }

  static showHelp(){
    var z = new Table({
      head : ['HEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLPPPPPPPPPPPPPPPP']
    });

    var t = new Table({
      head : ['No.','Function List','Author','Article','Tags']
    });

    t.push(
      ['1.','showAll','show all Author','show all Article','show all Tags'],
      ['2.','showOne(id)','show one Author by Id','show one Article by Id','show one Tags by Id'],
      ['3.','add','add Author(firstname,lastname,religion,gender,age)','add Article(text,body,idAuthor,idTags)','add Tags(name)'],
      ['4.','edit','edit Author(firstname,lastname,religion,gender,age)','edit Article(text,body,idAuthor,idTags)','edit Tags(name)'],
      ['5.','delete','delete Author','delete Article','delete Tags'])

    console.log("" + z)  
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
