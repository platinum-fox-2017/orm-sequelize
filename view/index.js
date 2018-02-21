const Controller = require('../controller/index.js');
const CliTable = require('cli-table');
const chalk = require('chalk')


class View {
  constructor() {

  }

  static displayAddAuthor(newAuthor){
    console.log(`New author ${chalk.blue(newAuthor.first_name)} ${chalk.blue(newAuthor.last_name)} with id: ${chalk.yellow(newAuthor.id)} has been created`);
  }

  static displayReadOneAuthor(foundAuthor){
    console.log(`Found author ${chalk.blue(foundAuthor.first_name)} ${chalk.blue(foundAuthor.last_name)} with id: ${chalk.yellow(foundAuthor.id)}`);
  }

  static displayReadAllAuthor(authors){
    console.log('Found all authors');
    let cliTable = new CliTable({
        head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
        colWidths: [10, 20, 20, 20, 20, 20]
    });
    for (var i = 0; i < authors.length; i++) {
      let tableContents = [];
      tableContents.push(authors[i].id)
      tableContents.push(authors[i].first_name)
      tableContents.push(authors[i].last_name)
      tableContents.push(authors[i].religion)
      tableContents.push(authors[i].gender)
      tableContents.push(authors[i].age)
      cliTable.push(tableContents)
    }
    console.log(chalk.green(cliTable.toString()));

  }

  static displayUpdateAuthor(author){
    console.log(`Data updated : `);
    console.log(author.dataValues);
  }

  static displayEraseAuthor(){
    console.log(`deleting ${author}`);
  }

  // ########################################

  static displayAddArticle(article){
    console.log(`New article ${article.title} body: ${article.body} with id: ${article.id}, author_id: ${article.id_author}, id_tag: ${article.id_tag} has been created`);
  }

  static displayReadOneArticle(article){
  console.log(`Found article ${article.title} with id: ${article.id}`);
  }

  static displayReadAllArticle(articles){
    console.log('Found all articles');
    for (let i = 0; i < articles.length; i++) {
      // console.log(`id: ${articles[i].id} title: ${articles[i].title} body: ${articles[i].body} id_author: ${articles[i].id_author} id_tag: ${articles[i].id_tag}`);
      console.log(articles[i]);
    }
  }

  static displayUpdateArticle(article){
    console.log(`Data updated : `);
    // console.log(article.dataValues);
    console.log(article);
  }

  static displayEraseArticle(article){
    console.log(`deleting ${article}`);
  }

  // ########################################

  static displayAddTag(tag){
    console.log(`New tag ${tag.name} with id: ${tag.id} has been created`);
  }

  static displayReadOneTag(tag){
    console.log(`Found tag ${tag.name} with id: ${tag.id}`);
  }

  static displayReadAllTag(tags){
    console.log('Found all tags');
    for (let i = 0; i < tags.length; i++) {
      // console.log(`id: ${tags[i].id} name: ${tags[i].name}`);
      console.log(tags[i]);
    }
  }

  static displayUpdateTag(tag){
    console.log(`Data updated : `);
    // console.log(tag.dataValues);
    console.log(tag);
  }

  static displayEraseTag(tag){
    console.log(`deleting ${tag}`);
  }

}

module.exports = View
