// const models = require('./models/')

const argv = process.argv
const syntax = argv[2]
const option = argv[3]
const option2 = argv.slice(4)
const option3 = option2[0].split(':')
const perintah = option2[0].split(' ')

console.log(syntax)
console.log(option)
console.log(option2)
console.log(option2[0])
console.log(perintah[0])
console.log(option3[1])


// class Controller{
//     constructor(){

//     }

//     static command(syntax, option){
//         switch(syntax){
//             default: 
//                 console.log('you will call "help"')
//                 break
//             case 'help':
//                 let result = [
//                     '=============== documentation =================================================',
//                     '$ node index.js author add -> add<space> "data yang ingin dimasukan"',
//                     '$ node index.js author read_all -> read_one<space> "masukan id author"',
//                     '$ node index.js author read_all -> read_all',
//                     '$ node index.js author update -> update <spce> "masukkan data yang ingin di update dan idnya"',
//                     '$ node index.js athor delete -> delete<space> "masukan id author"',
//                     '$ node index.js tag add -> add<space> "data yang ingin dimasukan"',
//                     '$ node index.js tag read_one -> read_one<space> "masukkan id tag"',
//                     '$ node index.js tag readl_all -> read_all',
//                     '$ node index.js tag update -> update<space> "masukkan data yang ingin di update dan idnya"',
//                     '$ node index.js tag delete -> delete<space> "masukkan id author"',
//                     '$ node index.js article add -> add<space> "data yang ingin dimasukan"',
//                     '$ node index.js article read_one -> read_one<space> "masukan id article"',
//                     '$ node index.js article read_all -> read_all',
//                     '$ node index.js article update -> update<space> "masukkan data yang ingin di update dan idnya"',
//                     '$ node index.js article delete -> delete<space> "masukkan id author"',
//                     '================================================================================'                   
//                 ]
//                 result = result.join('\n')
//                 return console.log(result)
//                 break
//             case 'author' && 'add':
//                 return console.log('tambahkan author add')
//                 break
//         }
//     }
// }

// models.articles.findAll({raw:true}).then(articlesData => {
//     console.log(articlesData)
// })


// module.exports = Controller