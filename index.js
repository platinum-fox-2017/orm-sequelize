const Author = require('./controllerAuthor.js')
const Tag = require('./controllerTag.js')
const Article = require('./controllerArticle.js')

class Index{
    constructor(){}

    static author(data){
        let command = data[0]
        let datas = data.slice(1,data.length)
        let id = data[1]
        let update = data.slice(2,data.length)
        if(command === 'add'){
            Author.add(datas)
        }else if(command === 'read_one'){
            Author.read_one(datas)
        }else if(command === 'find_all'){
            Author.read_all()
        }else if(command === 'update'){
            Author.update(id,update)
        }else if(command === 'delete'){
            Author.delete(datas)
        }
    }

    static tag(data){
        let command = data[0]
        let datas = data.slice(1,data.length)
        let id = data[1]
        let update = data.slice(2,data.length)
        if(command === 'add'){
            Tag.add(datas)
        }else if(command === 'read_one'){
            Tag.read_one(datas)
        }else if(command === 'find_all'){
            Tag.read_all()
        }else if(command === 'update'){
            Tag.update(id,update)
        }else if(command === 'delete'){
            Tag.delete(datas)
        }
    }

    static article(data){
        let command = data[0]
        let datas = data.slice(1,data.length)
        let id = data[1]
        let update = data.slice(2,data.length)
        if(command === 'add'){
            Article.add(datas)
        }else if(command === 'read_one'){
            Article.read_one(datas)
        }else if(command === 'find_all'){
            Article.read_all()
        }else if(command === 'update'){
            Article.update(id,update)
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
    case 'tag':
        Index.tag(data)
        break;
    case 'article':
        Index.article(data)
        break;
}


