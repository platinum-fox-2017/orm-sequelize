const {author} = require('../models')
const View = require('../views/v_author')

class Author{
    static add(data){
        let dataAuthor = data.split(',')
        let objAuthor = {
            first_name : dataAuthor[0],
            last_name : dataAuthor[1],
            religion : dataAuthor[2],
            gender : dataAuthor[3],
            age : dataAuthor[4]
        }
        author.create(objAuthor).then(()=>{
            View.commentAdded()
            process.exit()
        }).catch(err=>console.log(err))
    }
    static read_one(idAuthor){
        author.findById(idAuthor).then(authorData=>{
            View.findById(authorData.dataValues)
            process.exit()
        }).catch(err=>console.log(err))
    }
    static read_all(){
        author.findAll().then(authorData=>{
            authorData.map(data=>{
                View.readAll(data.dataValues)
            })
            process.exit()
        }).catch(err=>console.log(err))
    }
    static update(data, idAuthor){
        let dataAuthor = data.split(',')
        author.findById(idAuthor).then(authorData=>{
            let objAuthor = {
                first_name : dataAuthor[0] === '' ? authorData.dataValues.first_name : dataAuthor[0],
                last_name : dataAuthor[1] === '' ? authorData.dataValues.last_name : dataAuthor[1],
                religion : dataAuthor[2] === '' ? authorData.dataValues.religion : dataAuthor[2],
                gender : dataAuthor[3] === '' ? authorData.dataValues.gender : dataAuthor[3],
                age : dataAuthor[4] === '' ? authorData.dataValues.age : dataAuthor[4]
            }
            author.update(objAuthor,{ where :{id:idAuthor}}).then(()=>{
                View.commentUpdated(idAuthor)
                process.exit()
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }
    static delete(idAuthor){
        author.destroy({where :{id : idAuthor}}).then(()=>{
            View.commentDeleted(idAuthor)
            process.exit()
        }).catch(err=>console.log(err))
    }
}

module.exports = Author