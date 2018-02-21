class View {
    static readAll(dataAuthor){
        console.log(dataAuthor)
    }
    static commentAdded(){
        console.log('data author baru berhasil ditambahkan')
    }
    static findById(data){
        console.log(data)
    }
    static commentUpdated(id){
        console.log(`data author dengan id ${id} telah diupdate`)
    }
    static commentDeleted(id){
        console.log(`data author dengan id ${id} telah dihapus`)
    }
}
module.exports = View