class View {
    static readAll(dataTag){
        console.log(dataTag)
    }
    static commentAdded(){
        console.log('data tag baru berhasil ditambahkan')
    }
    static findById(data){
        console.log(data)
    }
    static commentUpdated(id){
        console.log(`data tag dengan id ${id} telah diupdate`)
    }
    static commentDeleted(id){
        console.log(`data tag dengan id ${id} telah dihapus`)
    }
}
module.exports = View