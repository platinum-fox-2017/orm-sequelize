const Sequelize = require('sequelize');
const {tags} = require('../models');
const View_tags = require('../views/tags');

class Controller_tags {
    static add(new_tag){
        tags.create({
            name:new_tag[0],
        }).then((data)=> {
            View_tags.show(data.dataValues);
            process.exit();
        });
    }
    static read_one(new_tag){
        tags.findById(new_tag[0]).then((data)=> {
            View_tags.show(data.dataValues);
            process.exit();
        });
    }
    static read_all(){
        tags.findAll().then((data)=> {
            data = data.map((v)=>{
                return (v.dataValues);
            });
            View_tags.show_multiple(data);
            process.exit();
        });
    }
    static update(new_tag){
        tags.update({
            name:new_tag[1]
        },{
            where:{
                id:new_tag[0]
            }
        }).then((data)=> {
            process.exit();
        });
    }
    static erase(new_tag){
        tags.destroy({
            where: {
                id:new_tag[0]
            }
        }).then((data)=> {
            process.exit();
        });
    }
}

module.exports = Controller_tags;