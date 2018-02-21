class View {
    static readAll(dataArticle){
        console.log(dataArticle)
    }
    static commentAdded(){
        console.log('data article baru berhasil ditambahkan')
    }
    static findById(data){
        console.log(data)
    }
    static commentUpdated(id){
        console.log(`data article dengan id ${id} telah diupdate`)
    }
    static commentDeleted(id){
        console.log(`data article dengan id ${id} telah dihapus`)
    }
}
module.exports = View