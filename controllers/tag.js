const {tag} = require('../models')
const View_tag = require ('../views/tag')

class Controller_tag{
  constructor(){
  }

  static command(input,data){
    if(input === 'read_all'){
      tag.findAll().then(function(dataAll){
        // console.log(dataAll)
        let arrData = []
        dataAll.map(dataTag=>{
          arrData.push(dataTag.dataValues)
        })
        View_tag.showAll(arrData)
        process.exit()
      }) 
    }
    else if(input === 'add'){
      // console.log(data.join(''))
      let objData ={
        name : data.join('')
      }
      tag.create(objData).then(function(){
        View_tag.showAdd(objData)
        process.exit()
      })
    }
    else if(input === 'read_one'){
      tag.findOne({where: {id:data}}).then(function(listData){
        // console.log(listData)
        View_tag.showOne(listData.dataValues)
        process.exit()
      })
    }
    else if(input === 'update'){
      let inputEdit = data[0].split(',')
        let objData ={
            name : inputEdit[0]
          }
          tag.update(objData,{where:{id:data[1]}}).then(()=>{
            View_tag.showUpdate(data[1])
            process.exit()
          })
    
    }
    else if(input === 'delete'){
      tag.destroy({where:{id:data}}).then(datanya=>{
        View_tag.showDelete(data)
        process.exit()
      })
    }
  }

}

module.exports = Controller_tag