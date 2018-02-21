class TagView {
    static read_one(data){
        console.log(data)
    }
    static read_all(data){
        for (let i = 0; i < data.length; i++){
            console.log(data[i])
        }
    }
}

module.exports = TagView