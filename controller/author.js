const sequelize = require('sequelize')
const View = require('../views/views.js')
const {author} = require('../models')

class Author {
  constructor() {
  }

static showAll(){
  author.findAll()
  .then(function(data){
    let arr = [];
    for(let i=0;i<data.length;i++){
      arr.push(data[i].dataValues);
    }
    View.showList(arr);
    process.exit()
  }).catch(function(err){
    console.log('error pada saat baca data author');
    process.exit();
  })
}

static showOne(data){
  author.findOne({
    where:{
      id:data
    }
  }).then(function(data){
    View.showList([data.dataValues])
    process.exit()
  }).catch(function(err){
    console.log('error pas baca nyari data satu author');
    process.exit()
  })
}

static add(data){
  let objAuthor = {};
  objAuthor.first_name = data[0];
  objAuthor.last_name = data[1];
  objAuthor.religion = data[2];
  objAuthor.gender = data[3];
  objAuthor.age = data[4];
  author.create(objAuthor)
  .then(function(data){
    console.log('isi data author sukses');
    process.exit();
  }).catch(function(err){
    console.log('error pas masukin data');
    process.exit();
  })
}

static edit(target,data){
  let objAuthor = {};
  objAuthor.first_name = data[0];
  objAuthor.last_name = data[1];
  objAuthor.religion = data[2];
  objAuthor.gender = data[3];
  objAuthor.age = data[4];
  author.update(objAuthor,{
    where:{
      id:target
    }
  })
  .then(function(data){
    console.log('edit data author sukses');
    process.exit()
  }).catch(function(err){
    console.log('error pas edit data');
    process.exit()
  })
}

static showOne(data){
  author.destroy({
    where:{
      id:data
    }
  }).then(function(data){
    console.log('data berhasil di delete');
    process.exit()
  }).catch(function(err){
    console.log('error pas baca nyari data satu author');
    process.exit()
  })
}

}

module.exports = Author
