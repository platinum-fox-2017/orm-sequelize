const sequelize = require('sequelize')
const View = require('../views/views.js')
const {tags} = require('../models')

class Tags{
  constructor() {
  }

static showAll(){
  tags.findAll()
  .then(function(data){
    let arr = [];
    for(let i=0;i<data.length;i++){
      arr.push(data[i].dataValues);
    }
    View.showTags(arr);
    process.exit()
  }).catch(function(err){
    console.log('error pada saat baca data tags');
    process.exit();
  })
}

static showOne(data){
  tags.findOne({
    where:{
      id:data
    }
  }).then(function(data){
    View.showTags([data.dataValues])
    process.exit()
  }).catch(function(err){
    console.log('error pas baca nyari data satu tags');
    process.exit()
  })
}

static add(data){
  let objTags = {};
  objTags.name = data[0];
  tags.create(objTags)
  .then(function(data){
    console.log('isi data tags sukses');
    process.exit();
  }).catch(function(err){
    console.log('error pas masukin data');
    process.exit();
  })
}

static edit(target,edit){
  let objTags = {
    name : edit[0]
  }
  tags.update(objTags,{
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
  tags.destroy({
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

module.exports = Tags
