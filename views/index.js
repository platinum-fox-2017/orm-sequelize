const Table = require("cli-table");
const chalk = require("chalk");

const Models = require('../models');

class Views {
    constructor() {
    }

    static showHelp() {
        console.log('author add         -> add<space> "data yang ingin dimasukkan"');
        console.log('author read_one    -> read_one<space> "masukkan id author"');
        console.log('author read_all    -> read_all');
        console.log('author update      -> update<space> "masukkan id author"');
        console.log('author delete      -> delete<space> "masukkan id author"');
        console.log('==================================================================')
        console.log('tag add            -> add<space> "data yang ingin dimasukkan"');
        console.log('tag read_one       -> read_one<space> "masukkan id tag"');
        console.log('tag read_all       -> read_all');
        console.log('tag update         -> update<space> "masukkan id tag"');
        console.log('tag delete         -> delete<space> "masukkan id tag"');
        console.log('==================================================================')
        console.log('article add        -> add<space> "data yang ingin dimasukkan"');
        console.log('article read_one   -> read_one<space> "masukkan id article"');
        console.log('article read_all   -> read_all');
        console.log('article update     -> update<space> "masukkan id article"');
        console.log('article delete     -> delete<space> "masukkan id article"');
    }

    static readAll(tableName) {
        if (tableName == 'author') {

            var table = new Table({
                head: ['ID','FirstName', 'LastName', 'Religion', 'Gender', 'Age']
                // ,colWidths: [20, 20, 20, 20, 20, 20]
            });

            Models.author.findAll({raw:true}).then(project => {
                // console.log(project)
                for (var i = 0; i < project.length; i++) {
                    table.push([project[i].id, project[i].first_name, project[i].last_name, project[i].religion, project[i].gender, project[i].age]
                    );
                }
                console.log(chalk.cyan(table.toString()));
            })

        } else if (tableName == 'article') {

            var table = new Table({
                head: ['ID','Title', 'Body', 'ID_Author', 'ID_Tag']
                ,colWidths: [5, 40, 50, 10, 10]
            });

            Models.article.findAll({raw:true}).then(project => {
                for (var i = 0; i < project.length; i++) {
                    table.push([project[i].id, project[i].title, project[i].body, project[i].id_author, project[i].id_tag]
                    );
                }
                console.log(chalk.cyan(table.toString()));
            })

        } else if (tableName == 'tag') {

            var table = new Table({
                head: ['ID','Name']
                // ,colWidths: [5, 30]
            });

            Models.tag.findAll({raw:true}).then(project => { 
                for (var i = 0; i < project.length; i++) {
                    table.push([project[i].id, project[i].name]
                    );
                }
                console.log(chalk.cyan(table.toString()));
            })
        }
    }

    static readOne(tableName,id) {       
        if (tableName == 'author') {

            var table = new Table({
                head: ['ID','FirstName', 'LastName', 'Religion', 'Gender', 'Age']
                // ,colWidths: [20, 20, 20, 20, 20, 20]
            });         

            Models.author.findById(id,{raw:true}).then(project => {
                table.push(
                    [project.id, project.first_name, project.last_name, project.religion, project.gender, project.age]
                );
                console.log(chalk.cyan(table.toString()));
            })

        } else if (tableName == 'article') {

            var table = new Table({
                head: ['ID','Title', 'Body', 'ID_Author', 'ID_Tag']
                // ,colWidths: [5, 40, 50, 10, 10]
            });

            Models.article.findById(id,{raw:true}).then(project => {
                table.push(
                    [project.id, project.title, project.body, project.id_author, project.id_tag]
                );
                console.log(chalk.cyan(table.toString()));
            })

        } else if (tableName == 'tag') {

            var table = new Table({
                head: ['ID','Name']
                // ,colWidths: [5, 30]
            });

            Models.tag.findById(id,{raw:true}).then(project => {
                table.push(
                    [project.id, project.name]
                );
                console.log(chalk.cyan(table.toString()));
            })            
        }   
    }

    static addAuthor(arrOptions) {
        
        //  Models.author.create({ first_name: arrOptions[1], last_name: arrOptions[2], religion: arrOptions[3], gender: arrOptions[4], age: arrOptions[5] }, { fields: [ 'id' ] }).then(user => {
        //     // let's assume the default of isAdmin is false:
        //     console.log(user.get({
        //       plain: true
        //     })) // => { username: 'barfooz', isAdmin: false }
        //   })
        
        Models.author.create({ first_name: arrOptions[1], last_name: arrOptions[2], religion: arrOptions[3], gender: arrOptions[4], age: arrOptions[5] })
            .then(() => Models.author.findOrCreate({where: {first_name: arrOptions[1]}, defaults: {}}))
            .spread((author, created) => {
                console.log(author.get({
                plain: true
                }))
            console.log(created)
        })

    }

    static addArticle(arrOptions) {
        Models.article.create({ title: arrOptions[1], body: arrOptions[2], id_author: arrOptions[3], id_tag: arrOptions[4] })
            .then(() => Models.article.findOrCreate({where: {title: arrOptions[1]}, defaults: {}}))
            .spread((article, created) => {
                console.log(article.get({
                plain: true
                }))
            console.log(created)
        })
    }

    static addTag(arrOptions) {
        Models.tag.create({ name: arrOptions[1] })
            .then(() => Models.tag.findOrCreate({where: {name: arrOptions[1]}, defaults: {}}))
            .spread((tag, created) => {
                console.log(tag.get({
                plain: true
                }))
            console.log(created)
        })
    }

    static updateAuthor(arrOptions) {
        var updateObj = {};
        updateObj[arrOptions[1]] = arrOptions[2]; 
        // console.log(updateObj);

        // Models.author.findById(arrOptions[3],{raw:true}).then(foundAuthor => { foundAuthor.update({religion: arrOptions[2] }) })
        Models.author.update(updateObj, {where: {id:arrOptions[3]}}).then(() => { console.log('Successfully update') })
    }

    static updateArticle(arrOptions) {
        var updateObj = {};
        updateObj[arrOptions[1]] = arrOptions[2]; 
        Models.article.update(updateObj, {where: {id:arrOptions[3]}}).then(() => { console.log('Successfully update') })
    }

    static updateTag(arrOptions) {
        var updateObj = {};
        updateObj[arrOptions[1]] = arrOptions[2]; 
        Models.tag.update(updateObj, {where: {id:arrOptions[3]}}).then(() => { console.log('Successfully update') })
    }

    static deleteAuthor(arrOptions) {
        Models.author.destroy({where: {id:arrOptions[1]}}).then(() => { console.log('Successfully deleted') })
    }

    static deleteArticle(arrOptions) {
        Models.article.destroy({where: {id:arrOptions[1]}}).then(() => { console.log('Successfully deleted') })
    }

    static deleteTag(arrOptions) {
        Models.tag.destroy({where: {id:arrOptions[1]}}).then(() => { console.log('Successfully deleted') })
    }


}


module.exports = Views;