const Sequelize = require('sequelize');
const {articles} = require('../models');
const View_articles = require('../views/articles');

class Controller_articles {
    static add(new_article){
            articles.create({
            title:new_article[0],
            body:new_article[1],
        }).then((data)=> {
            View_articles.show(data.dataValues);
            process.exit();
        });
    }
    static read_one(new_article){
        articles.findById(new_article[0]).then((data)=> {
            View_articles.show(data.dataValues);
            process.exit();
        });
    }
    static read_all(){
        articles.findAll().then((data)=> {
            data = data.map((v)=>{
                return (v.dataValues);
            });
            View_articles.show_multiple(data);
            process.exit();
        });
    }
    static update(new_article){
        articles.update({
            title:new_article[1],
            body:new_article[2],
        },{
            where:{
                id:new_article[0]
            }
        }).then((data)=> {
            process.exit();
        });
    }
    static erase(new_article){
        articles.destroy({
            where: {
                id:new_article[0]
            }
        }).then((data)=> {
            process.exit();
        })
    }
}

module.exports = Controller_articles;