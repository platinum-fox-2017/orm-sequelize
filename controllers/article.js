const {article} = require('../models')
const View_article = require ('../views/article')


class Controller_article{
  constructor(){

  }

  static command(input,data){
    if(input === 'read_all'){
      article.findAll().then(function(dataAll){
        // console.log(dataAll)
        let arrData = []
        dataAll.map(dataArticle=>{
          arrData.push(dataArticle.dataValues)
        })
        View_article.showAll(arrData)
        process.exit()
      }) 
    }
    else if(input === 'add'){
      // console.log(data[0].split(','))
      // console.log(data[1])
      let textInput = data[0].split(',')
      let objData ={
        title : textInput[0],
        body : textInput[1],
        id_author : Number(data[1]),
        id_tag : Number(data[2])
      }
      // console.log(objData)
      article.create(objData).then(function(){
        View_article.showAdd(objData)
        process.exit()
      })
    }
    else if(input === 'read_one'){

      article.findOne({where: {id:data}}).then(function(listData){
        // console.log(listData)
        View_article.showOne(listData.dataValues)
        process.exit()
      })
    }
    else if(input === 'update'){
      article.findById(data[1]).then(datanya=>{
        let textInput = data[0].split(',')
        let objData ={
        title : textInput[0] === '' ? datanya.dataValues.title:textInput[0],
        body : textInput[1] === '' ? datanya.dataValues.body:textInput[1],
        id_author : textInput[2] === '' ? datanya.dataValues.id_author:textInput[2],
        id_tag : textInput[3] === '' ? datanya.dataValues.id_tag:textInput[3]
        }
        article.update(objData,{where:{id:data[1]}}).then(()=>{
          View_article.showUpdate(data[1])
          process.exit()
        })
      })
    }
    else if(input === 'delete'){
      article.destroy({where:{id:data}}).then(datanya=>{
        View_article.showDelete(data)
        process.exit()
      })
    }
  }
}

module.exports = Controller_article