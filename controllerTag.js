const sequelize = require('sequelize')
const {tag} = require('./models')

class Controller{
    constructor(){}

    static add(data){
        let obj = {
            name: data[0],
        }

        tag.create(obj).then(hasil=>{
            console.log(hasil.dataValues)
            process.exit()
        })
    }

    static read_one(name){
        tag.findOne({
            where:{name: name[0]}
        }).then(result=>{
            console.log(result.dataValues)
            process.exit()
        })
    }

    static read_all(){
        tag.findAll().then(data=>{
            const read = data.map(each=>{
                return each.dataValues
            })
            console.log(read)
            process.exit()
        })
    }

    static findById(id,cb){
        tag.findById(id).then(result=>{
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
        tag.findOne({where:{id: Number(id)}}).then(result=>{
            tag.update({
                name: obj.name || result.name, 
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
        tag.destroy({where:{name: name}}).then(result =>{
            console.log(result)
            process.exit()
        })
    }

}

module.exports = Controller