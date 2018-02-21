class View {
  static showAllCommand(){
    console.log('====documentation============');
    console.log('author add -> add<space> "data yang ingin dimasukkan"');
    console.log('author read_one -> read_one<space> "masukkan id author"');
    console.log('author read_all -> read_all');
    console.log('author update -> update<space> "masukkan data yang ingin di update dan idnya"');
    console.log('author delete -> delete<space> "masukkan id author"');
    console.log('tag add -> add<space> "data yang ingin dimasukkan"');
    console.log('tag read_one -> read_one<space> "masukkan id tag"');
    console.log('tag read_all -> read_all');
    console.log('tag update -> update<space> "masukkan data yang ingin di update dan idnya"');
    console.log('tag delete -> delete<space> "masukkan id author"');
    console.log('article add -> add<space> "data yang ingin dimasukkan"');
    console.log('article read_one -> read_one<space> "masukkan id article"');
    console.log('article read_all -> read_all');
    console.log('article update -> update<space> "masukkan data yang ingin di update dan idnya"');
    console.log('article delete -> delete<space> "masukkan id author"');

  }
  static printResult(result){
    console.log(result);
  }
  static successToSave(tableName){
    console.log(`Berhasil Menyimpan Data ${tableName} `);
  }
  static failToSave(tableName){
    console.log(`Gagal Menyimpan Data ${tableName} `);
  }
  static successToUpdate(tableName){
    console.log(`Berhasil Mengubah Data ${tableName} `);
  }
  static failToUpdate(tableName){
    console.log(`Gagal Mengubah Data ${tableName} `);
  }
  static successToDelete(tableName){
    console.log(`Berhasil Menghapus Data ${tableName} `);
  }
  static failToDelete(tableName){
    console.log(`Gagal Menghapus Data ${tableName} `);
  }
}
module.exports = View;
