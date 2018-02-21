const Controller_articles = require('./controllers/articles');
const Controller_authors = require('./controllers/authors');
const Controller_tags = require('./controllers/tags');

let args = process.argv.slice(2);
let table = args[0];
let command = args[1];

let new_article = process.argv.slice(4);
let new_author = process.argv.slice(4);
let new_tag = process.argv.slice(4);

if(table === 'help'){
    console.log(`================================documentation================================`);
    console.log(`articles add -> add <space> "data yang ingin dimasukan"`)
    console.log(`articles read_one -> read_one <space> "masukan id articles"`)
    console.log(`articles read_all -> read_all`)
    console.log(`articles update -> update <space> "masukan data yang ingin diupdate dan idnya"`)
    console.log(`articles delete -> delete <space> "masukan id author"`)
    
    console.log(`authors add -> add <space> "data yang ingin dimasukan"`)
    console.log(`authors read_one -> read_one <space> "masukan id article"`)
    console.log(`authors read_all -> read_all`)
    console.log(`authors update -> update <space> "masukan data yang ingin diupdate dan idnya"`)
    console.log(`authors delete -> delete <space> "masukan id article"`)

    console.log(`tags add -> add <space> "data yang ingin dimasukan"`)
    console.log(`tags read_one -> read_one <space> "masukan id tag"`)
    console.log(`tags read_all -> read_all`)
    console.log(`tags update -> update <space> "masukan data yang ingin diupdate dan idnya"`)
    console.log(`tags delete -> delete <space> "masukan id tag"`)
    console.log(`=============================================================================`);

}

if(table === 'articles'){
    if(command === 'add')Controller_articles.add(new_article);
    if(command === 'read_one')Controller_articles.read_one(new_article);
    if(command === 'read_all')Controller_articles.read_all(new_article);
    if(command === 'update')Controller_articles.update(new_article);
    if(command === 'erase')Controller_articles.erase(new_article);
}
if(table === 'authors'){
    if(command === 'add')Controller_authors.add(new_author);
    if(command === 'read_one')Controller_authors.read_one(new_author);
    if(command === 'read_all')Controller_authors.read_all(new_author);
    if(command === 'update')Controller_authors.update(new_author);
    if(command === 'erase')Controller_authors.erase(new_author);
}
if(table === 'tags'){
    if(command === 'add')Controller_tags.add(new_tag);
    if(command === 'read_one')Controller_tags.read_one(new_tag);
    if(command === 'read_all')Controller_tags.read_all(new_tag);
    if(command === 'update')Controller_tags.update(new_tag);
    if(command === 'erase')Controller_tags.erase(new_tag);
}