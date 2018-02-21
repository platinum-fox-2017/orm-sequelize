const Sequelize = require('sequelize');
const {authors} = require('../models');
const View_authors = require('../views/authors');

class Controller_authors {
    static add(new_author){
        authors.create({
            first_name:new_author[0],
            last_name:new_author[1],
            religion:new_author[2],
            gender:new_author[3],
            age:new_author[4]
        }).then((data)=> View_authors.show(data.dataValues));
    }
    static read_one(new_author){
        authors.findById(new_author[0]).then((data)=> {
            View_authors.show(data.dataValues)
            process.exit();
        });
    }
    static read_all(){
        authors.findAll().then((data)=> {
            data = data.map((v)=>{
                return (v.dataValues);
            });
            View_authors.show_multiple(data);
            process.exit();
        });
    }
    static update(new_author){
        authors.update({
            first_name:new_author[1],
            last_name:new_author[2],
            religion:new_author[3],
            gender:new_author[4],
            age:new_author[5],
        },{
            where:{
                id:new_author[0]
            }
        }).then((data)=> {
            process.exit();
        });
    }
    static erase(new_author){
        authors.destroy({
            where: {
                id:new_author[0]
            }
        }).then((data)=> {
            process.exit();
        });
    }
}

module.exports = Controller_authors;