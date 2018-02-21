var model = require('../models/index.js')
var View = require('../view/index.js')
class Controller{
  constructor(pilihan,tabel,data){
    this.jalan=this.run(pilihan,tabel,data)
  }

  run(pilihan,tabel,data){

    switch (pilihan) {
      case 'help':
          console.log('====================== documentation =======================');
          console.log('author add -> add<space> "data yang ingin dimasukan"');
          console.log('author read_one -> read_one<space> "masukan id author"');
          console.log('author read_all -> read_all');
          console.log('author update -> update <spce> "masukkan data yang ingin di update dan idnya"');
          console.log('athor delete -> delete<space> "masukan id author"');
          console.log('tag add -> add<space> "data yang ingin dimasukan"');
          console.log('tag read_one -> read_one<space> "masukkan id tag"');
          console.log('tag readl_all -> read_all');
          console.log('tag update -> update<space> "masukkan data yang ingin di update dan idnya"');
          console.log('tag delete -> delete<space> "masukkan id author"');
          console.log('article add -> add<space> "data yang ingin dimasukan"');
          console.log('article read_one -> read_one<space> "masukan id article"');
          console.log('article read_all -> read_all');
          console.log('article update -> update<space> "masukkan data yang ingin di update dan idnya"');
          console.log('article delete -> delete<space> "masukkan id author"');
          console.log('============================================================');
          break;
      case 'author':
          switch (tabel) {
            case 'add':
              var value=[]
              var attributvalue = data.split(',')
              for (let i=0;i<attributvalue.length;i++){
                var sementara = attributvalue[i].split(':')
                value.push(sementara[1])
              }
              model.author.create({first_name:value[0],last_name:value[1],religion:value[2],gender:value[3],age:value[4]}).then(task => {
                View.print(task)
              })
            break;
            case 'read_one':
              model.author.findById(data,{raw:true}).then(project => {
                View.keren([project])
              })
            break;
            case 'read_all':
              model.author.findAll({raw:true}).then(dataall => {
                View.keren(dataall)
              });
            break;
            case 'update':
            var obj={}
              var pilah=data.split('-')
              var pilahkoma = pilah[0].split(',')
              for(let i=0;i<pilahkoma.length;i++){
                var pilahtitik = pilahkoma[i].split(':')
                switch(pilahtitik[0]){
                  case 'first_name' : obj.first_name=pilahtitik[1];break;
                  case 'last_name' : obj.last_name=pilahtitik[1];break;
                  case 'religion' : obj.religion=pilahtitik[1];break;
                  case 'gender' : obj.gender=pilahtitik[1];break;
                  case 'age' : obj.age=pilahtitik[1];break;
                }
              }
              model.author.update(obj, { where: { id: Number(pilah[1])} }).then(function(){
              View.print('berhasil')
              })
            break;
            case 'delete':
              model.author.destroy({ where: { id: data } }).then(function(){
              View.print('berhasil')
            })
            break;
          }
      break;

      //tags

      case 'tag':
      switch (tabel) {
        case 'add':
          var value
          var sementara = data.split(':')
          value = sementara[1]
          model.tag.create({name:value}).then(task => {
            View.print(task)
          })
        break;
        case 'read_one':
          model.tag.findById(data,{raw:true}).then(project => {
            View.print([project])
          })
        break;
        case 'read_all':
          model.tag.findAll({raw:true}).then(dataall => {
            View.print(dataall)
          });
        break;
        case 'update':
        var obj={}
          var pilah=data.split('-')
          var pilahkoma = pilah[0].split(',')
          for(let i=0;i<pilahkoma.length;i++){
            var pilahtitik = pilahkoma[i].split(':')
            switch(pilahtitik[0]){
              case 'name' : obj.name=pilahtitik[1];break;
            }
          }
          model.tag.update(obj, { where: { id: Number(pilah[1])} }).then(function(){
          View.print('berhasil')
          })
        break;
        case 'delete':
          model.tag.destroy({ where: { id: data } }).then(function(){
          View.print('berhasil')
        })
        break;
      }
      break;

      //articles


      case 'article':
      switch (tabel) {
        case 'add':
        var value=[]
        var attributvalue = data.split(',')
        for (let i=0;i<attributvalue.length;i++){
          var sementara = attributvalue[i].split(':')
          value.push(sementara[1])
        }
        model.article.create({title:value[0],body:value[1],id_author:value[2],id_tag:value[3]}).then(task => {
          View.print(task)
        })
        break;
        case 'read_one':
          model.article.findById(data,{raw:true}).then(project => {
            View.print([project])
          })
        break;
        case 'read_all':
          model.article.findAll({raw:true}).then(dataall => {
            View.print(dataall)
          });
        break;
        case 'update':
        var obj={}
          var pilah=data.split('-')
          var pilahkoma = pilah[0].split(',')
          for(let i=0;i<pilahkoma.length;i++){
            var pilahtitik = pilahkoma[i].split(':')
            switch(pilahtitik[0]){
              case 'title' : obj.title=pilahtitik[1];break;
              case 'body' : obj.body=pilahtitik[1];break;
              case 'id_author' : obj.id_author=pilahtitik[1];break;
              case 'id_tag' : obj.id_tag=pilahtitik[1];break;
            }
          }
          model.article.update(obj, { where: { id: Number(pilah[1])} }).then(function(){
          View.print('berhasil')
          })
        break;
        case 'delete':
          model.article.destroy({ where: { id: data } }).then(function(){
          View.print('berhasil')
        })
        break;
      }
      break;
      default:
        var text = pilihan+"gak ada coy";
    }
  }

}

module.exports = Controller
