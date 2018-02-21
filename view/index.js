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

    let cliTable = new CliTable({
        head: ['ID', 'First Name', 'Last Name'],
        colWidths: [10, 20, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(foundAuthor.id))
    tableContents.push(foundAuthor.first_name)
    tableContents.push(foundAuthor.last_name)
    cliTable.push(tableContents)

    console.log(chalk.green(cliTable.toString()));
  }

  static displayReadAllAuthor(authors){
    console.log('Found all authors');
    let cliTable = new CliTable({
        head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
        colWidths: [10, 20, 20, 20, 20, 20]
    });
    for (var i = 0; i < authors.length; i++) {
      let tableContents = [];
      tableContents.push(chalk.yellow(authors[i].id))
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
    let cliTable = new CliTable({
        head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
        colWidths: [10, 20, 20, 20, 20, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(author.id))
    tableContents.push(author.first_name)
    tableContents.push(author.last_name)
    tableContents.push(author.religion)
    tableContents.push(author.gender)
    tableContents.push(author.age)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

  static displayEraseAuthor(){
    console.log(`deleting ${author}`);
    let cliTable = new CliTable({
        head: ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
        colWidths: [10, 20, 20, 20, 20, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(author.id))
    tableContents.push(author.first_name)
    tableContents.push(author.last_name)
    tableContents.push(author.religion)
    tableContents.push(author.gender)
    tableContents.push(author.age)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));


  }

  // ########################################

  static displayAddArticle(article){
    console.log(`New article ${chalk.cyan(article.title)} body: ${chalk.magenta(article.body)} with id: ${chalk.yellow(article.id)}, author_id: ${chalk.yellow(article.id_author)}, id_tag: ${chalk.yellow(article.id_tag)} has been created`);
  }

  static displayReadOneArticle(article){
    console.log(`Found article ${chalk.cyan(article.title)} with id: ${chalk.yellow(article.id)}`);
    let cliTable = new CliTable({
        head: ['ID', 'Title'],
        colWidths: [10, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(article.id))
    tableContents.push(article.title)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

  static displayReadAllArticle(articles){
    console.log('Found all articles');
    let cliTable = new CliTable({
        head: ['ID', 'Title', 'Body', 'ID Author', 'ID Tag'],
        colWidths: [4, 35, 80, 10, 10]
    });
    for (var i = 0; i < articles.length; i++) {
      let tableContents = [];
      tableContents.push(chalk.yellow(articles[i].id))
      tableContents.push(chalk.redBright(articles[i].title))
      tableContents.push(articles[i].body)
      tableContents.push(chalk.yellow(articles[i].id_author))
      tableContents.push(chalk.yellow(articles[i].id_tag))
      cliTable.push(tableContents)
    }
    console.log(chalk.green(cliTable.toString()));
  }

  static displayUpdateArticle(article){
    console.log(`Data updated : `);
    // console.log(article.dataValues);
    // console.log(article);
    let cliTable = new CliTable({
        head: ['ID', 'Title', 'Body', 'ID Author', 'ID Tag'],
        colWidths: [10, 20, 40, 20, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(article.id))
    tableContents.push(article.title)
    tableContents.push(article.body)
    tableContents.push(article.id_author)
    tableContents.push(article.id_tag)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

  static displayEraseArticle(article){
    console.log(`deleting ${article}`);
    let cliTable = new CliTable({
        head: ['ID', 'Title', 'Body', 'ID Author', 'ID Tag'],
        colWidths: [10, 20, 40, 20, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(article.id))
    tableContents.push(article.title)
    tableContents.push(article.body)
    tableContents.push(article.id_author)
    tableContents.push(article.id_tag)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

  // ########################################

  static displayAddTag(tag){
    console.log(`New tag ${chalk.blue(tag.name)} with id: ${chalk.yellow(tag.id)} has been created`);
  }

  static displayReadOneTag(tag){
    console.log(`Found tag ${chalk.blue(tag.name)} with id: ${chalk.blue(tag.id)}`);
    let cliTable = new CliTable({
        head: ['ID', 'Name'],
        colWidths: [10, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(tag.id))
    tableContents.push(tag.name)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

  static displayReadAllTag(tags){
    console.log('Found all tags');
    let cliTable = new CliTable({
        head: ['ID', 'Name'],
        colWidths: [10, 20]
    });
    for (var i = 0; i < tags.length; i++) {
      let tableContents = [];
      tableContents.push(chalk.yellow(tags[i].id))
      tableContents.push(tags[i].name)
      cliTable.push(tableContents)
    }
    console.log(chalk.green(cliTable.toString()));
  }

  static displayUpdateTag(tag){
    console.log(`Data updated : `);
    let cliTable = new CliTable({
        head: ['ID', 'Name'],
        colWidths: [10, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(tag.id))
    tableContents.push(tag.name)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

  static displayEraseTag(tag){
    console.log(`deleting ${tag}`);
    let cliTable = new CliTable({
        head: ['ID', 'Name'],
        colWidths: [10, 20]
    });
    let tableContents = [];
    tableContents.push(chalk.yellow(tag.id))
    tableContents.push(tag.name)
    cliTable.push(tableContents)
    console.log(chalk.green(cliTable.toString()));
  }

}

module.exports = View
