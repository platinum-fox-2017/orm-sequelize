const sequelize = require ('sequelize')
const {authors} = require ('./models')
const chalk = require('chalk');
const Table = require('cli-table');


class Authors{
    static commandManage(command){
        if(command[1] === 'add'){
            let addData = command.slice(2)
            let obj ={
                first_name : addData[0],
                last_name : addData[1],
                religion : addData[2],
                gender : addData[3],
                age : addData[4]
            }
            authors.create(obj).then(result=>{
                console.log(result.dataValues)
                process.exit()
            })
        }else if (command[1] === 'read_one'){
            let id = Number(command.slice(2))
            authors.findById(id).then(result=>{
                var table = new Table({
                    head: ['id','First Name','Last Name','Religion','Gender','Age']
                  , colWidths: [20, 20,20,20,20,20]
                });
                
                table.push(
                    [result.dataValues.id,result.dataValues.first_name, result.dataValues.last_name,
                        result.dataValues.religion,result.dataValues.gender,result.dataValues.age]
                );
                 
                console.log(table.toString());
                process.exit()
            })
        }else if(command[1] === 'read_all'){
            authors.findAll().then(data =>{
                var table = new Table({
                    head: ['id','First Name','Last Name','Religion','Gender','Age']
                  , colWidths: [20, 20,20,20,20,20]
                });
                data.map(result=>{ 
                    table.push(
                        [result.dataValues.id,result.dataValues.first_name, result.dataValues.last_name,
                            result.dataValues.religion,result.dataValues.gender,result.dataValues.age]
                    );
                })
                console.log(table.toString());
                process.exit()
            })
        }else if(command[1] === 'update'){
            let id = command [2]
            let newData = command.slice(3)
            authors.findById(id).then(data=>{
                authors.update({
                    first_name: newData[0] === '.' ? data.first_name : newData[0],
                    last_name : newData[1] === '.' ? data.last_name : newData[1],
                    religion : newData[2]  === '.' ? data.religion : newData[2],
                    gender : newData[3]  === '.' ? data.gender : newData[3],
                    age : newData[4]  === '.' ? data.age : newData[4]
                },{where:{id:id}}).then(data2=>{
                    console.log(`data berhasil di update`)
                    process.exit()
                })
            })
        }else if (command[1] === 'delete'){
            let id = command [2]
            authors.destroy({where:{id:id}}).then(result=>{
                process.exit()
            })
        }
    }
}

module.exports = Authors