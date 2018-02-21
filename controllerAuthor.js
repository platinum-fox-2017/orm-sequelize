const sequelize = require('sequelize')
const {author} = require('./models')
const Table = require('cli-table');
const chalk = require('chalk');

const table = new Table({
    head: ['First Name', 'Last Name', 'Religion', 'Gender', 'Age']
});

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
            let array = []
            Object.keys(hasil.dataValues).forEach((key,index)=>{
                if(key !== 'id' && key !== 'createdAt' && key !== 'updatedAt'){
                    if(index % 2 === 0){
                        array.push(chalk.blue(hasil.dataValues[key]))   
                    }else if(index % 3 === 0){
                        array.push(chalk.magenta(hasil.dataValues[key]))  
                    }else{
                        array.push(chalk.cyanBright(hasil.dataValues[key]))  
                    }
                    
                }  
            })
            table.push(array)
            console.log(chalk.blue(table.toString()))
            process.exit()
            process.exit()
        })
    }

    static read_one(name){
        author.findOne({
            where:{first_name: name[0]}
        }).then(result=>{
            let array = []
            Object.keys(result.dataValues).forEach((key,index)=>{
                if(key !== 'id' && key !== 'createdAt' && key !== 'updatedAt'){
                    if(index % 2 === 0){
                        array.push(chalk.yellowBright(result.dataValues[key]))   
                    }else if(index % 3 === 0){
                        array.push(chalk.magenta(result.dataValues[key]))  
                    }else{
                        array.push(chalk.cyanBright(result.dataValues[key]))  
                    }
                }  
            })
            table.push(array)
            console.log(table.toString())
            process.exit()
        })
    }

    static read_all(){
        author.findAll().then(data=>{
            const read = data.map(each=>{
                let array = []
                Object.keys(each.dataValues).forEach((key,index)=>{
                    if(key !== 'id' && key !== 'createdAt' && key !== 'updatedAt'){
                        if(index % 2 === 0){
                            array.push(chalk.yellowBright(each.dataValues[key]))   
                        }else if(index % 3 === 0){
                            array.push(chalk.magenta(each.dataValues[key]))  
                        }else{
                            array.push(chalk.cyanBright(each.dataValues[key]))  
                        }
                    }
                })
                table.push(array)
                return
            })
            console.log(table.toString())
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
                    let array = []
                    Object.keys(data).forEach((key,index)=>{
                        if(key !== 'id' && key !== 'createdAt' && key !== 'updatedAt'){
                            if(index % 2 === 0){
                                array.push(chalk.magentaBright(data[key]))   
                            }else if(index % 3 === 0){
                                array.push(chalk.greenBright(data[key]))   
                            }else {
                                array.push(chalk.cyan(data[key]))   
                            }
                            
                        }
                    })
                    table.push(array)
                    console.log(table.toString())
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