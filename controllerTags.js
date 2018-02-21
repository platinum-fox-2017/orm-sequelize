const sequelize = require ('sequelize')
const {tags} = require ('./models')


class Tags{
    static commandManage(command){
        if(command[1] === 'add'){
            let addData = command.slice(2)
            let obj ={
                name : addData[0]
            }
            tags.create(obj).then(result=>{
                console.log(result.dataValues)
                process.exit()
            })
        }else if (command[1] === 'read_one'){
            let id = Number(command.slice(2))
            tags.findById(id).then(result=>{
                console.log(result.dataValues)
                process.exit()
            })
        }else if(command[1] === 'read_all'){
            tags.findAll().then(data =>{
                data.map(result=>{
                    console.log(result.dataValues)
                    process.exit()
                })
            })
        }else if(command[1] === 'update'){
            let id = command [2]
            let newData = command.slice(3)
            tags.findById(id).then(data=>{
                tags.update({
                    name: newData[0] === '.' ? data.name : newData[0]
                },{where:{id:id}}).then(data2=>{
                    console.log(`data berhasil di update`)
                    process.exit()
                })
            })
        }else if (command[1] === 'delete'){
            let id = command [2]
            tags.destroy({where:{id:id}}).then(result=>{
                process.exit()
            })
        }
    }
}

module.exports = Tags
