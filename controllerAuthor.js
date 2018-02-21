const sequelize = require('sequelize')
const {author} = require('./models')

class Controller{
    constructor(){}

    static add(data){
        let obj = {
            first_name: data[0],
            last_name: data[1],
            religion: data[2],
            gender: data[3],
            age: Number(data[4])
        }

        author.create(obj).then(hasil=>{
            console.log(hasil.dataValues)
            process.exit()
        })
    }

    static read_one(name){
        author.findOne({
            where:{first_name: name[0]}
        }).then(result=>{
            console.log(result.dataValues)
            process.exit()
        })
    }

    static read_all(){
        author.findAll().then(data=>{
            const read = data.map(each=>{
                return each.dataValues
            })
            console.log(read)
            process.exit()
        })
    }

    static findById(id,cb){
        author.findById(id).then(result=>{
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
        author.findOne({where:{id: Number(id)}}).then(result=>{
            author.update({
                first_name: obj.first_name || result.first_name,
                last_name: obj.last_name || result.last_name,
                religion: obj.religion || result.religion,
                gender: obj.gender || result.gender,
                age: obj.age || result.age,
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
        author.destroy({where:{first_name: name}}).then(result =>{
            console.log(result)
            process.exit()
        })
    }
}

module.exports = Controller