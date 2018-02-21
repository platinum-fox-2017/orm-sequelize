const sequelize = require('sequelize')
const {article} = require('./models')

class Controller{
    constructor(){}

    static add(data){
        let obj = {
            title: data[0],
            body: data[1],
            id_author: Number(data[2]),
            id_tag: Number(data[3])
        }

        article.create(obj).then(hasil=>{
            console.log(hasil.dataValues)
            process.exit()
        })
    }

    static read_one(name){
        article.findOne({
            where:{first_name: name[0]}
        }).then(result=>{
            console.log(result.dataValues)
            process.exit()
        })
    }

    static read_all(){
        article.findAll().then(data=>{
            const read = data.map(each=>{
                return each.dataValues
            })
            console.log(read)
            process.exit()
        })
    }

    static findById(id,cb){
        article.findById(id).then(result=>{
            cb(result.dataValues)
            process.exit()
        })
    }

    static update(id,datas){
        let obj ={}
        for(let i = 0; i < datas.length; i++){
            let split =datas[i].split(" ")
            obj[split[0]] = split[1]
        }
        let name = datas[0]
        article.findOne({where:{id: Number(id)}}).then(result=>{
            article.update({
                title: obj.title || result.title,
                body: obj.body || result.body,
                id_author: Number(obj.id_author) || result.id_author,
                id_tag: Number(obj.id_tag) || result.id_tag,
            },{
                where: {
                    id: id
                }
            }).then(result=>{
                Controller.findById(Number(id),(data)=>{
                    console.log(data)
                    process.exit()
                })
            })
        })
    }

    static delete(datas){
        let name = datas[0]
        article.destroy({where:{first_name: name}}).then(result =>{
            console.log(result)
            process.exit()
        })
    }

}

module.exports = Controller