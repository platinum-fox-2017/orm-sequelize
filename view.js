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
        if(typeof data != 'string')
            Author.print_table(data);
        else
            Author.print_notification(data);
    }

    static article(data){
        if(typeof data != 'string')
            Article.print_table(data);
        else
            Article.print_notification(data);
    }

    static tag(data){
        if(typeof data != 'string')
            Tag.print_table(data);
        else
            Tag.print_notification(data);
    }

    static error(err){
        console.log(`[Error] ${err}`);
    }
}

module.exports = View;
