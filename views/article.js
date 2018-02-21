const Controller_article = require ('../controllers/tag')

class View_article{
  constructor(){

  }
  static showAll(dataAll){
    console.log(dataAll)
  }
  static showAdd(objInput){
    console.log('Success added new data with detail:')
    console.log(objInput)
  }
  static showOne(dataArticle){
    console.log(dataArticle)
  }
  static showUpdate(idUpdate){
    console.log(`Data with id : ${idUpdate} is successfully updated`)
  }
  static showDelete(idDelete){
    console.log(`Data with id : ${idDelete} successfully removed from database`)

  }
}

module.exports = View_article