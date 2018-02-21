const Index = require('./controllers/help')
const Author = require('./controllers/author')
const Tag = require('./controllers/tag')
const Article = require('./controllers/article')

if(process.argv[2] === 'author'){
    if(process.argv[3] === 'add'){
        Author.add(process.argv[4])
    }else if(process.argv[3] === 'read_one'){
        Author.read_one(process.argv[4])
    }else if(process.argv[3] === 'read_all'){
        Author.read_all()
    }else if(process.argv[3] === 'update'){
        Author.update(process.argv[4], process.argv[5])
    }else if(process.argv[3] === 'delete'){
        Author.delete(process.argv[4])
    }else{
        Index.showHelp()
    }
}else if(process.argv[2] === 'tag'){
    if(process.argv[3] === 'add'){
        Tag.add(process.argv[4])
    }else if(process.argv[3] === 'read_one'){
        Tag.read_one(process.argv[4])
    }else if(process.argv[3] === 'read_all'){
        Tag.read_all()
    }else if(process.argv[3] === 'update'){
        Tag.update(process.argv[4], process.argv[5])
    }else if(process.argv[3] === 'delete'){
        Tag.delete(process.argv[4])
    }else{
        Index.showHelp()
    }
}else if(process.argv[2] === 'article'){
    if(process.argv[3] === 'add'){
        Article.add(process.argv[4])
    }else if(process.argv[3] === 'read_one'){
        Article.read_one(process.argv[4])
    }else if(process.argv[3] === 'read_all'){
        Article.read_all()
    }else if(process.argv[3] === 'update'){
        Article.update(process.argv[4], process.argv[5])
    }else if(process.argv[3] === 'delete'){
        Article.delete(process.argv[4])
    }else{
        Index.showHelp()
    }
}else{
    Index.showHelp()
}