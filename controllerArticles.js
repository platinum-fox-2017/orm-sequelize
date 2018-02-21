const sequelize = require ('sequelize')
const {articles} = require ('./models')

class Articles{
    static commandManage(command){
        if(command[1] === 'add'){
            let addData = command.slice(2)
            let obj ={
                title : addData[0],
                body : addData[1],
                id_author : addData[2],
                id_tag : addData[3]
            }
            articles.create(obj).then(result=>{
                console.log(result.dataValues)
                process.exit()
            })
        }else if (command[1] === 'read_one'){
            let id = Number(command.slice(2))
            articles.findById(id).then(result=>{
                console.log(result.dataValues)
                process.exit()
            })
        }else if(command[1] === 'read_all'){
            articles.findAll().then(data =>{
                data.map(result=>{
                    console.log(result.dataValues)
                })
                process.exit()
            })
        }else if(command[1] === 'update'){
            let id = command [2]
            let newData = command.slice(3)
            articles.findById(id).then(data=>{
                articles.update({
                    first_name: newData[0] === '.' ? data.title : newData[0],
                    last_name : newData[1] === '.' ? data.body : newData[1],
                    religion : newData[2]  === '.' ? data.id_author : newData[2],
                    gender : newData[3]  === '.' ? data.id_tag : newData[3]
                },{where:{id:id}}).then(data2=>{
                    console.log(`data berhasil di update`)
                    process.exit()
                })
            })
        }else if (command[1] === 'delete'){
            let id = command [2]
            articles.destroy({where:{id:id}}).then(result=>{
                process.exit()
            })
        }
    }
}

module.exports = Articles