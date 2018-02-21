class Help {
    static printHelp() {
        console.log(`==== documentation ================================
author add -> add<space> "data yang ingin dimasukan"
author read_one -> read_one<space> "masukkan id author"
author read_all -> read_all
author update -> update<space> "masukkan data yang ingin di update dan idnya" ex: "data1,,,data4,data5" id
author delete -> delete<space> "masukkan id author"
tag add -> add<space> "data yang ingin dimasukan"
tag read_one -> read_one<space> "masukkan id tag"
tag read_all -> read_all
tag update -> update<space> "masukkan data yang ingin di update dan idnya" ex: "name tag" id
tag delete -> delete<space> "masukkan id author"
article add -> add<space> "data yang ingin dimasukan"
article read_one -> read_one<space> "masukkan id article"
article read_all -> read_all
article update -> update<space> "masukkan data yang ingin di update dan idnya"
article delete -> delete<space> "masukkan id author"
`)

    }
}

module.exports = Help