const models = require('./models/')



class Controller{
    constructor(){

    }

    static command(syntax, option, option2){
        if(syntax == 'help'){
            let result = [
                '=============== documentation =================================================',
                '$ node index.js author add -> add<space> "data yang ingin dimasukan"',
                '$ node index.js author read_one -> read_one<space> "masukan id author"',
                '$ node index.js author read_all -> read_all',
                '$ node index.js author update -> update <space> "first_name last_name religion gender age" <space> id',
                '$ node index.js athor delete -> delete<space> "masukan id author"',
                '$ node index.js tag add -> add<space> "data yang ingin dimasukan"',
                '$ node index.js tag read_one -> read_one<space> "masukkan id tag"',
                '$ node index.js tag readl_all -> read_all',
                '$ node index.js tag update -> update<space> "name" <space> id',
                '$ node index.js tag delete -> delete<space> "masukkan id author"',
                '$ node index.js article add -> add<space> "data yang ingin dimasukan"',
                '$ node index.js article read_one -> read_one<space> "masukan id article"',
                '$ node index.js article read_all -> read_all',
                '$ node index.js article update -> update<space> "title body id_author id_tag" <space> id',
                '$ node index.js article delete -> delete<space> "masukkan id author"',
                '================================================================================'                   
            ]
            result = result.join('\n')
            return console.log(result)
        }
        else if(syntax == 'author' && option == 'add'){
            models.authors.create({ 
                first_name:option2[0], 
                last_name:option2[1],
                religion:option2[2],
                gender:option2[3],
                age:option2[4] 
            }).then(authors => {
                console.log(authors.get({
                  plain: true
                }))
              })
        }
        else if(syntax == 'author' && option == 'read_one'){
            models.authors.findOne({
                where:{
                    id:option2[0]
                },raw:true
            }).then(authorsData => {
                console.log(authorsData)
            })
        }
        else if(syntax == 'author' && option == 'read_all'){
            models.authors.findAll({raw:true}).then(authorsData => {
                console.log(authorsData)
            })
        }
        else if(syntax == 'author' && option == 'update'){
            models.authors.update({ 
                first_name:option2[0], 
                last_name:option2[1],
                religion:option2[2],
                gender:option2[3],
                age:option2[4] 
            }, {where:{
                id:option2[5]
            }}).then(() => {

            })
        }      
        else if(syntax == 'author' && option == 'delete'){
            models.authors.destroy({
                where:{
                    id:option2[0]
                } 
            })
        }      
        else if(syntax == 'tag' && option == 'add'){
            models.tags.create({ 
                name:option2[0], 
            }).then(tags => {
                console.log(tags.get({
                  plain: true
                }))
              })
        }
        else if(syntax == 'tag' && option == 'read_one'){
            models.tags.findOne({
                where:{
                    id:option2[0]
                },raw:true
            }).then(tagsData => {
                console.log(tagsData)
            })
        }
        else if(syntax == 'tag' && option == 'read_all'){
            models.tags.findAll({raw:true}).then(tagsData => {
                console.log(tagsData)
            })
        }
        else if(syntax == 'tag' && option == 'update'){
            models.tags.update({ 
                name:option2[0], 
            }, {where:{
                id:option2[1]
            }}).then(() => {

            })
        }  
        else if(syntax == 'tag' && option == 'delete'){
            models.tags.destroy({
                where:{
                    id:option2[0]
                } 
            })
        }    
        else if(syntax == 'article' && option == 'add'){
            models.articles.create({ 
                title:option2[0], 
                body:option2[1],
                id_author:option2[2],
                id_tag:option2[3]
            }).then(articles => {
                console.log(articles.get({
                  plain: true
                }))
              })
        }
        else if(syntax == 'article' && option == 'read_one'){
            models.articles.findOne({
                where:{
                    id:option2[0]
                },raw:true
            }).then(articlesData => {
                console.log(articlesData)
            })
        }
        else if(syntax == 'article' && option == 'read_all'){
            models.articles.findAll({raw:true}).then(articlesData => {
                console.log(articlesData)
            })
        }
        else if(syntax == 'article' && option == 'update'){
            models.articles.update({ 
                title:option2[0], 
                body:option2[1],
                id_author:option2[2],
                id_tag:option2[3]
            }, {where:{
                id:option2[4]
            }}).then(() => {

            })
        }  
        else if(syntax == 'article' && option == 'delete'){
            models.articles.destroy({
                where:{
                    id:option2[0]
                } 
            })
        }
        else{
            console.log('you will call "help"')
        }      
    }

}

module.exports = Controller