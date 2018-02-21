const {article} = require('../models')
const View = require('../views/v_article')

class Article{
    static add(data){
        let dataArticle = data.split(',')
        let objArticle = {
            title : dataArticle[0],
            body : dataArticle[1],
            id_author : dataArticle[2],
            id_tag : dataArticle[3]
        }
        article.create(objArticle).then(()=>{
            View.commentAdded()
            process.exit()
        }).catch(err=>{
            console.log(err)
            process.exit()
        })
    }
    static read_one(idArticle){
        article.findById(idArticle).then(articleData=>{
            View.findById(articleData.dataValues)
            process.exit()
        }).catch(err=>{
            console.log(err)
            process.exit()
        })
    }
    static read_all(){
        article.findAll().then(articleData=>{
                View.readAll(articleData)
            process.exit()
        }).catch(err=>{
            console.log(err)
            process.exit()
        })
    }
    static update(data, idArticle){
        let dataArticle = data.split(',')
        article.findById(idArticle).then(articleData=>{
            let objArticle = {
                title : dataArticle[0] === '' ? articleData.dataValues.title : dataArticle[0],
                body : dataArticle[1] === '' ? articleData.dataValues.body : dataArticle[1],
                id_author : dataArticle[2] === '' ? articleData.dataValues.id_author : dataArticle[2],
                id_tag : dataArticle[3] === '' ? articleData.dataValues.id_tag : dataArticle[3],
            }
            article.update(objArticle,{ where :{id:idArticle}}).then(()=>{
                View.commentUpdated(idArticle)
                process.exit()
            }).catch(err=>{
                console.log(err)
                process.exit()
            })
        }).catch(err=>{
            console.log(err)
            process.exit()
        })
    }
    static delete(idArticle){
        article.destroy({where :{id : idArticle}}).then(()=>{
            View.commentDeleted(idArticle)
            process.exit()
        }).catch(err=>{
            console.log(err)
            process.exit()
        })
    }
}

module.exports = Article