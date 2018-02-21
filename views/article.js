class Article {

    static showAddedArticle(data) {
        console.log(data)
        process.exit()
    }

    static printById(data) {
        console.log(data)
        process.exit()
    }

    static printAll(datas) {
        datas.map((data) => {
            console.log(data.dataValues)
        })
        process.exit()
    }
}
module.exports = Article