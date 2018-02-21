const models = require('../models')
// const models = require('./view')
class Controller{
  constructor(input2,input3,input4,input5){
    this.input2=input2
    this.input3=input3
    this.input4=input4
    this.input5=input5

  }
  showData(){
      if(this.input2==='help'){
       console.log('=== documentation ============================================================');
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
       console.log('===============================================================================');
      }
      else if(this.input3==='add'){
        var obj={};
        var newData=this.input4
        var pisah= newData.split(',')

        if(seconds==='author'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='first_name'){
              obj.first_name=titikDua[1]
            }
            else if (titikDua[0]==='last_name') {
              obj.last_name=titikDua[1]
            }
            else if (titikDua[0]==='religion') {
              obj.religion=titikDua[1]
            }
            else if (titikDua[0]==='gender') {
              obj.age=titikDua[1]
            }
          }
          models.authors.create(obj);
        }
        else if(this.input2==='article'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='title'){
              obj.title=titikDua[1]
            }
            else if (titikDua[0]==='body') {
              obj.body=titikDua[1]
            }
            else if (titikDua[0]==='id_author') {
              obj.id_author=titikDua[1]
            }
            else if (titikDua[0]==='id_tag') {
              obj.id_tag=titikDua[1]
            }
          }
          models.articles.create(obj);
        }
        else if(this.input2==='tag'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='name'){
              obj.name=titikDua[1]
            }
          }
          models.tags.create(obj);
        }
      }
      else if(this.input3==='read_one'){
        if(this.input2==='author'){
          models.authors.findAll({
            raw:true,
            where: {
              id: this.input4
            }
          }).then(articlesData => {
             console.log(articlesData)
          });
        }
        else if(input2==='article'){
          models.articles.findAll({
            raw:true,
            where: {
              id: this.input4
            }
          }).then(articlesData => {
             console.log(articlesData)
          });
        }
        else if(this.input2==='tag'){
          models.tags.findAll({
            raw:true,
            where: {
              id: this.input4
            }
          }).then(articlesData => {
             console.log(articlesData)
          });
        }
      }
      else if(this.input3==='read_all'){
        if(this.input2==='author'){
          models.authors.findAll({
            raw:true,
          }).then(articlesData => {
             console.log(articlesData)
          });
        }
        else if(this.input2==='article'){
          models.articles.findAll({
            raw:true,
          }).then(articlesData => {
             console.log(articlesData)
          });
        }
        else if(this.input2==='tag'){
          models.tags.findAll({
            raw:true,
          }).then(articlesData => {
             console.log(articlesData)
          });
        }
      }

      else if(this.input3==='update'){
        var obj={};
        var newData=input5
        var pisah= newData.split(',')

        if(this.input2==='author'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='first_name'){
              obj.first_name=titikDua[1]
            }
            else if (titikDua[0]==='last_name') {
              obj.last_name=titikDua[1]
            }
            else if (titikDua[0]==='religion') {
              obj.religion=titikDua[1]
            }
            else if (titikDua[0]==='gender') {
              obj.age=titikDua[1]
            }
          }
          models.authors.update(
            obj, {
            where: {
              id: this.input3
            }
          });
        }
        else if(this.input2==='article'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='title'){
              obj.title=titikDua[1]
            }
            else if (titikDua[0]==='body') {
              obj.body=titikDua[1]
            }
            else if (titikDua[0]==='id_author') {
              obj.id_author=titikDua[1]
            }
            else if (titikDua[0]==='id_tag') {
              obj.id_tag=titikDua[1]
            }
          }
          models.articles.update(
            obj, {
            where: {
              id: this.input4
            }
          });
        }
        else if(this.input2==='tag'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='name'){
              obj.name=titikDua[1]
            }
          }
          models.tags.update(
            obj, {
            where: {
              id: this.input4
            }
          });
        }
      }


      else if(this.input3==='delete'){
        if(this.input2==='author'){
          models.authors.destroy({
            where: {
              id: this.input4
            }
          });
        }
        else if(this.input2==='article'){
            models.articles.destroy({
              where: {
                id: this.input4
              }
            });
        }
        else if(this.input2==='tag'){
            models.tags.destroy({
              where: {
                id: this.input4
              }
            });
        }
      }

    }
  }


module.exports = Controller


// models.articles.findAll({raw:true}).then(articlesData => {
//    console.log(articlesData)
// })
