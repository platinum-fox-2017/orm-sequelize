const {tag} = require('../models')
const View = require('../views/v_tag')

class Tag{
    static add(data){
        let dataTag = data.split(',')
        let objTag = {
            name : data
        }
        tag.create(objTag).then(()=>{
            View.commentAdded()
            process.exit()
        }).catch(err=>console.log(err))
    }
    static read_one(idTag){
        tag.findById(idTag).then(tagData=>{
            View.findById(tagData.dataValues)
            process.exit()
        }).catch(err=>console.log(err))
    }
    static read_all(){
        tag.findAll().then(tagData=>{
            tagData.map(data=>{
                View.readAll(data.dataValues)
            })
            process.exit()
        }).catch(err=>console.log(err))
    }
    static update(data, idTag){
        let dataTag = data.split(',')
        let objTag = {
            name : data
        }
        tag.update(objTag,{ where :{id:idTag}}).then(()=>{
            View.commentUpdated(idTag)
            process.exit()
        }).catch(err=>console.log(err))
    }
    static delete(idTag){
        tag.destroy({where :{id : idTag}}).then(()=>{
            View.commentDeleted(idTag)
            process.exit()
        }).catch(err=>console.log(err))
    }
}

module.exports = Tag