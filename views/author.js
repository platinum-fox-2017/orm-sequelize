class Author {

    static showAddedData(data) {
        console.log(data)
        process.exit()
    }

    static printById(data) {
        console.log(`=== your result ===========`);
        console.log(data);
        process.exit();
    }

    static printAllAuthor(datas) {
        datas.map((data) => {
            console.log(data.dataValues)
        })
        process.exit();
    }
}

module.exports = Author;