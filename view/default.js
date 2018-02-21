let list = [   '==== documentation ==============================================', 
    'author add <data yang ingin dimasukkan>',
    'author read_one <masukkan id author>',
    'author read_all',
    'author update <masukkan data yang ingin di update dan idnya>',
    'author delete <masukkan id author>',
    'tag add <data yang ingin dimasukkan>',
    'tag read_one <masukkan id tag>',
    'tag update <masukkan data yang ingin di update dan idnya>',
    'tag delete <masukkan id author>',
    'article add <data yang ingin dimasukkan>',
    'article read_one <masukkan id article>',
    'article read_all',
    'article update <masukkan data yang ingin di update dan idnya>',
    'article delete <masukkan id author>',
    '=================================================================']

class DefaultView {
    static default (){
        for (let i = 0; i < list.length; i++){
            console.log(list[i])
        }
    }
}

module.exports = DefaultView