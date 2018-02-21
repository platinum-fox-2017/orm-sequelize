const {author} = require('../models')
const View_author = require ('../views/author')

class Controller_author{
  constructor(){
  }

  static command(input,data){
    if(input === 'read_all'){
      author.findAll().then(function(dataAll){
        // console.log(dataAll)
        let arrData = []
        dataAll.map(dataAuthor=>{
          arrData.push(dataAuthor.dataValues)
        })
        View_author.showAll(arrData)
        process.exit()
      }) 
    }
    else if(input === 'add'){
      let split = data[0].split(',')
      let objData ={
        first_name : split[0],
        last_name : split[1],
        religion : split[2],
        gender : split[3],
        age : Number(split[4])
      }
      // console.log(objData)
      author.create(objData).then(function(){
        View_author.showAdd(objData)
        process.exit()
      })
    }
    else if(input === 'read_one'){
      author.findOne({where: {id:data}}).then(function(listData){
        // console.log(listData)
        View_author.showOne(listData.dataValues)
        process.exit()
      })
    }
    else if(input === 'update'){
      // console.log(data[0].split(','))
      let inputEdit = data[0].split(',')
      // console.log(inputEdit)
      author.findById(data[1]).then(datanya=>{
        // console.log(datanya.dataValues)
        let objData ={
          first_name : inputEdit[0] === '' ? datanya.dataValues.first_name:inputEdit[0],
          last_name : inputEdit[1]  === '' ? datanya.dataValues.last_name:inputEdit[1],
          religion : inputEdit[2]  === '' ? datanya.dataValues.religion:inputEdit[2],
          gender : inputEdit[3]  === '' ? datanya.dataValues.gender:inputEdit[3],
          age : Number(inputEdit[4])  === '' ? datanya.dataValues.age:inputEdit[4]
        }
        author.update(objData,{where:{id:data[1]}}).then(()=>{
          View_author.showUpdate(data[1])
          process.exit()
        })
      })
    }
    else if(input === 'delete'){
      author.destroy({where:{id:data}}).then(datanya=>{
        View_author.showDelete(data)
        process.exit()
      })
    }
  }

}

module.exports = Controller_author

