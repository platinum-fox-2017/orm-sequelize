const Author = require('./controllers/author')
const Help = require('./controllers/help')
const Tag = require('./controllers/tag')
const Article = require('./controllers/article')

if (process.argv[2] === 'help') {
    Help.printHelp()
} else if (process.argv[2] === 'author') {
    if (process.argv[3] === 'add') {
        Author.addAuthor(process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8])
    } else if (process.argv[3] === 'read_one') {
        Author.readAuthor(process.argv[4])
    } else if (process.argv[3] === 'read_all') {
        Author.readAllAuthor()
    } else if (process.argv[3] === 'update') {
        let datas = process.argv[4].split(',')
        Author.updateAuthor(datas, process.argv[5])
    } else if (process.argv[3] === 'delete') {
        Author.deleteAuthor(process.argv[4])
    }
} else if (process.argv[2] === 'tag') {
    if (process.argv[3] === 'add') {
        Tag.addTag(process.argv.slice(4).join(' '))
    } else if (process.argv[3] === 'read_one') {
        Tag.readTag(process.argv[4])
    } else if (process.argv[3] === 'read_all') {
        Tag.readAllTag()
    } else if (process.argv[3] === 'update') {
        let data = process.argv[4].split(',')
        Tag.updateTag(data, process.argv[5])
    } else if (process.argv[3] === 'delete') {
        Tag.deleteTag(process.argv[4])
    }
} else if (process.argv[2] === 'article') {
    if (process.argv[3] === 'add') {
        Article.addArticle(process.argv[4], process.argv[5], process.argv[6], process.argv[7])
    } else if (process.argv[3] === 'read_one') {
        Article.readOne(process.argv[4])
    } else if (process.argv[3] === 'read_all') {
        Article.readAll()
    } else if (process.argv[3] === 'update') {
        let datas = process.argv[4].split(',')
        Article.updateArticle(datas, process.argv[5])
    } else if (process.argv[3] === 'delete') {
        Article.deleteArticle(process.argv[4])
    }
}