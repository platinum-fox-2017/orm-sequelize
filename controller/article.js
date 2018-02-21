const sequelize = require('sequelize')
const View = require('../views/views.js')
const {article} = require('../models')

class Article {
  constructor() {
  }

static showAll(){
  article.findAll()
  .then(function(data){
    let arr = [];
    for(let i=0;i<data.length;i++){

      arr.push(data[i].dataValues);
    }
    View.showArticle(arr);
    process.exit()
  }).catch(function(err){
    console.log('error pada saat baca data article');
    process.exit();
  })
}

static showOne(data){
  article.findOne({
    where:{
      id:data
    }
  }).then(function(data){
    View.showArticle([data.dataValues])
    process.exit()
  }).catch(function(err){
    console.log('error pas baca nyari data satu article');
    process.exit()
  })
}

static add(data){
  let objArticle = {};
  objArticle.title = data[0];
  objArticle.body = data[1];
  objArticle.id_author = data[2];
  objArticle.id_tag = data[3];
  article.create(objArticle)
  .then(function(data){
    console.log('isi data article sukses');
    process.exit();
  }).catch(function(err){
    console.log('error pas masukin data');
    process.exit();
  })
}

static edit(target,edit){
  let objArticle = {};
  objArticle.title = edit[0];
  objArticle.body = edit[1];
  objArticle.id_author = edit[2];
  objArticle.id_tag = edit[3];
  article.create(objArticle)
  article.update(objArticle,{
    where:{
      id:target
    }
  })
  .then(function(data){
    console.log(data);
    console.log('edit data tags sukses');
    process.exit()
  }).catch(function(err){
    console.log('error pas edit data');
    process.exit()
  })
}

static delete(data){
  article.destroy({
    where:{
      id:data
    }
  }).then(function(data){
    console.log('data berhasil di delete');
    process.exit()
  }).catch(function(err){
    console.log('error pas baca nyari data satu tags');
    process.exit()
  })
}
}

module.exports = Article
