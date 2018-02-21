const model = require('./models')
const viewAuthor = require('./views/view-author.js')
const viewTag = require('./views/view-tag.js')
const viewArticle = require('./views/view-article.js')

class Controller {
    constructor(){

    }
    static manageCommand(option, act, value){
        if(option === 'author' && act === 'add'){  
            // title, body, id_author, id_tag
            model.author.create({
                first_name: value[0],
                last_name: value[1],
                religion: value[2],
                gender: value[3],
                age: value[4]
            })
            .then(addAuthor =>{
                viewAuthor.notifAdd(addAuthor)
            })

        } else if(option === 'author' && act === 'read_one'){
            model.author.findById(value[0],{raw:true})
            .then(readOneAuthor => {
                // console.log(readOneAuthor)
                viewAuthor.showOneRow(readOneAuthor)
            })

        } else if(option === 'author' && act === 'read_all'){
            model.author.findAll({raw:true})
            .then(readAllAuthor => {
                // console.log(readAllAuthor)
                viewAuthor.showTable(readAllAuthor, 'Table Author')
            })
                      
        } else if(option === 'author' && act === 'update'){
            model.author.update({
                first_name: value[1],
                last_name: value[2],
                religion: value[3],
                gender: value[4],
                age: value[5]
              }, {where: {id: value[0]}
              })
              .then(updateAuthor => {
                viewAuthor.notifUpdate(updateAuthor)
              })
        } else if(option === 'author' && act === 'delete'){
            // console.log('Ini conroller delete')
            model.author.destroy({
                where: {id: value[0]}
            })
            .then(deleteAuthor =>{
                viewAuthor.notifDelete(deleteAuthor)
            })
        } else if(option === 'tag' && act === 'add'){
            // 
            model.tag.create({
                name: value[0]
            })
            .then(function(addTag){
                viewTag.notifAdd(addTag)
            })
        } else if(option === 'tag' && act === 'read_one'){
            model.tag.findById(value[0],{raw:true})
            .then(readOneTag => {
                viewTag.showOneRow(readOneTag)
            })
        } else if(option === 'tag' && act === 'read_all'){
            model.tag.findAll({raw:true})
            .then(readAllTag => {
                viewTag.showTable(readAllTag)
            })
        } else if(option === 'tag' && act === 'update'){
            model.tag.update({
                name: value[1]
              }, {where: {id: value[0]}
              })
              .then(updateTag => {
                viewTag.notifUpdate(updateTag)
              })
        } else if(option === 'tag' && act === 'delete'){
            model.tag.destroy({
                where: {id: value[0]}
            })
            .then(deleteTag =>{
                viewTag.notifDelete(deleteTag)
            })
        } else if(option === 'article' && act === 'add'){
            model.article.create({
                title: value[0],
                body: value[1],
                id_author: value[2],
                id_tag: value[3]
            })
            .then(function(addArticle){
                viewArticle.notifAdd(addArticle)
            })

        } else if(option === 'article' && act === 'read_one'){
            model.article.findById(value[0],{raw:true})
            .then(readOneArticle => {
                // console.log(readOneArticle)
                viewArticle.showOneRow(readOneArticle)
            })

        } else if(option === 'article' && act === 'read_all'){
            model.article.findAll({raw:true})
            .then(readAllArticle => {
                viewArticle.showTable(readAllArticle)
            })

        } else if(option === 'article' && act === 'update'){
            model.article.update({
                title: value[1],
                body: value[2],
                id_author: value[3],
                id_tag: value[4]
              }, {where: {id: value[0]}
              })
              .then(updateArticle => {
                viewArticle.notifUpdate(updateArticle)
              })

        } else if(option === 'article' && act === 'delete'){
            model.article.destroy({
                where: {id: value[0]}
            })
            .then(deleteArticle =>{
                viewArticle.notifDelete(deleteArticle)
            })

        } else if(option === 'help'){
            console.log('author add -> add<space> "data yang ingin dimasukan"');
            console.log('author read_all -> read_one<space> "masukan id author"');
            console.log('author read_all -> read_all');
            console.log('author update -> update <spce> "masukkan data yang ingin di update dan idnya"');
            console.log('athor delete -> delete<space> "masukan id author"');
            console.log('tag add -> add<space> "data yang ingin dimasukan"');
            console.log('tag read_one -> read_one<space> "masukkan id tag"');
            console.log('tag readl_all -> read_all');
            console.log('tag update -> update<space> "masukkan data yang ingin di update dan idnya"');
            console.log('tag delete -> delete<space> "masukkan id author"');
            console.log('article add -> add<space> "data yang ingin dimasukan"');
            console.log('article read_one -> read_one<space> "masukan id article"');
            console.log('article read_all -> read_all');
            console.log('article update -> update<space> "masukkan data yang ingin di update dan idnya"');
            console.log('article delete -> delete<space> "masukkan id author"');
        }
    }
}

module.exports = Controller
