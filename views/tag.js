class Tag {
    static showAddedData(data) {
        console.log(data)
        process.exit()
    }

    static printById(data) {
        console.log(data)
        process.exit()
    }

    static printAllTag(datas) {
        datas.map((data) => {
            console.log(data.dataValues)
        })
        process.exit()
    }


}

module.exports = Tag