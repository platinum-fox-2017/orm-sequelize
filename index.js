const Author = require('./controller/author.js')
const Tag = require('./controller/tags.js')
const Article = require('./controller/article.js')

class Index{
    constructor(){}

    static author(data){
        let command = data[0]
        let datas = data.slice(1,data.length)
        let id = data[1]
        let edit = data.slice(2,data.length)
        if(command === 'add'){
            Author.add(datas)
        }else if(command === 'showOne'){
            Author.showOne(datas)
        }else if(command === 'showAll'){
            Author.showAll()
        }else if(command === 'edit'){
            Author.edit(id,edit)
        }else if(command === 'delete'){
            Author.delete(datas)
        }
    }

    static tags(data){
        let command = data[0]
        let datas = data.slice(1)
        let id = data[1]
        let edit = data.slice(2)
        if(command === 'add'){
            Tag.add(datas)
        }else if(command === 'showOne'){
            Tag.showOne(datas)
        }else if(command === 'showAll'){
            Tag.showAll()
        }else if(command === 'edit'){
            Tag.edit(id,edit)
        }else if(command === 'delete'){
            Tag.delete(datas)
        }
    }

    static article(data){
        let command = data[0]
        let datas = data.slice(1,data.length)
        let id = data[1]
        let edit = data.slice(2,data.length)
        if(command === 'add'){
            Article.add(datas)
        }else if(command === 'showOne'){
            Article.showOne(datas)
        }else if(command === 'showAll'){
            Article.showAll()
        }else if(command === 'edit'){
            Article.edit(id,edit)
        }else if(command === 'delete'){
            Article.delete(datas)
        }
    }
}

let argv = process.argv.slice(2,process.argv.length)
let command = argv[0]
let data = argv.slice(1,process.length)

switch(command) {
    case 'author':
        Index.author(data)
        break;
    case 'tags':
        Index.tags(data)
        break;
    case 'article':
        Index.article(data)
        break;
}
