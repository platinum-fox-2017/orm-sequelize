class View_help {
  constructor(){

  }
  static showHelp(){
    console.log(`========================documentation==========================================`)
    console.log(`author add -> add<space> "data yang ingin dimasukan" => add "firstName,lastname,religion,gender,age"`)
    console.log(`author read_one -> read_one<space> "masukkan id author"=> read_one 1`)
    console.log(`author read_all -> read_all`)
    console.log(`author update -> update<space> "masukkan data yang ingin diupdate idnya"=> update ",lastname" 1`)
    console.log(`author delete -> delete<space> "masukkan id author =>delete 1"`)
    console.log(`tag add -> add<space> "data yang ingin dimasukan"=>add "name"`)
    console.log(`tag read_one -> read_one<space> "masukkan id tag"=> read_one 1`)
    console.log(`tag read_all -> read_all`)
    console.log(`tag update -> update<space> "masukkan data yang ingin diupdate idnya"=>update "name" 1`)
    console.log(`tag delete -> delete<space> "masukkan id tag"`)
    console.log(`article add -> add<space> "data yang ingin dimasukan(title,body)"=>add "title,body,idaut,idtag"`)
    console.log(`article read_one -> read_one<space> "masukkan id article"`)
    console.log(`article read_all -> read_all`)
    console.log(`article update -> update<space> "masukkan data yang ingin diupdate idnya"=>update ",,idaut" 1`)
    console.log(`article delete -> delete<space> "masukkan id article"`)
    console.log(`==========================================================================`)
  }
  
}

module.exports = View_help