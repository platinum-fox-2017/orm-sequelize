const Author = require('./views/author');
const Article = require('./views/article');
const Tag = require('./views/tag');

class View {
    static help(){
        console.log('==================˜= documentation =======================');
        console.log('author add -> add<space>"data yang ingin dimasukan dengan format <parameter>:<value>,<parameter2>:<value2>,<parameter3>:<value3>"');
        console.log('author read_all -> read_one<space>"id author"');
        console.log('author read_all -> read_all');
        console.log('author update -> update<space>"masukkan data yang ingin di update dan idnya dengan format <id>,<parameter>:<value>,<parameter2>:<value2>...."');
        console.log('author delete -> delete<space>"id author"');

        console.log('tag add -> add<space>"data yang ingin dimasukan dengan format <parameter>:<value>,<parameter2>:<value2>,<parameter3>:<value3>"');
        console.log('tag read_all -> read_one<space>"id tag"');
        console.log('tag read_all -> read_all');
        console.log('tag update -> update<space>"masukkan data yang ingin di update dan idnya dengan format <id>,<parameter>:<value>,<parameter2>:<value2>...."');
        console.log('tag delete -> delete<space>"id tag"');

        console.log('article add -> add<space>"data yang ingin dimasukan dengan format <parameter>:<value>,<parameter2>:<value2>,<parameter3>:<value3>"');
        console.log('article read_all -> read_one<space>"id article"');
        console.log('article read_all -> read_all');
        console.log('article update -> update<space>"masukkan data yang ingin di update dan idnya dengan format <id>,<parameter>:<value>,<parameter2>:<value2>...."');
        console.log('article delete -> delete<space>"id article"');

    }

    static author(data){
        Author.print_table(data);
    }

    static article(data){
        Article.print_table(data);
    }

    static tag(data){
        Tag.print_table(data);
    }
}

module.exports = View;
