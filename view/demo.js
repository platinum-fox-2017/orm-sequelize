class View {
  static help() {
    console.log('==== documentation =======================');
    console.log('author add -> add<space> first_name:<first-name>,last_name:<last-name>,religion:<religion>,gender:<gender>,age:<age>');
    console.log('author read_all -> read_one<space> "masukan id author"');
    console.log('author read_all -> read_all');
    console.log('author update -> update<space> id<space> <key_yg_diupdate:update-details,key_yg_diupdate2:update-details>');
    console.log('athor delete -> delete<space> "masukan id author"');
    console.log('tag add -> add<space> name:<tag-name>');
    console.log('tag read_one -> read_one<space> "masukkan id tag"');
    console.log('tag readl_all -> read_all');
    console.log('tag update -> update<space> id<space> <key_yg_diupdate:update-details,key_yg_diupdate2:update-details>');
    console.log('tag delete -> delete<space> "masukkan id author"');
    console.log('article add -> add<space> title:<title-name>,body:<body-description>,id_author:<id_author>,id_tag:<id_tag>,age:<age>');
    console.log('article read_one -> read_one<space> "masukan id article"');
    console.log('article read_all -> read_all');
    console.log('article update -> update<space> id<space> <key_yg_diupdate:update-details,key_yg_diupdate2:update-details>');
    console.log('article delete -> delete<space> "masukkan id author"');
  }

  static authorAdd(data) {
    console.log(data)
  }

  static authorReadAll(dataArticles) {
    console.log(dataArticles)
  }

  static authorFindById(data) {
    console.log(data)
  }

  static authorUpdate() {
    console.log(`update succeeded`)
  }

  static authorDelete(id) {
    console.log(`Delete id ${id} succeeded`)
  }

  static tagAdd(data) {
    console.log(data)
  }

  static tagReadAll(dataArticles) {
    console.log(dataArticles)
  }

  static tagFindById(data) {
    console.log(data)
  }

  static tagUpdate() {
    console.log(`update succeeded`)
  }

  static tagDelete(id) {
    console.log(`Delete id ${id} succeeded`)
  }

  static articleAdd(data) {
    console.log(data)
  }

  static articleReadAll(dataArticles) {
    console.log(dataArticles)
  }

  static articleFindById(data) {
    console.log(data)
  }

  static articleUpdate() {
    console.log(`update succeeded`)
  }

  static articleDelete(id) {
    console.log(`Delete id ${id} succeeded`)
  }
}

module.exports = View