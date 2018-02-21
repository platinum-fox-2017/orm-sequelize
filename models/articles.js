module.exports = (sequelize,DataTypes)=>{
    const articles = sequelize.define('articles',{
        title : DataTypes.STRING,
        body : DataTypes.STRING,
        id_author : DataTypes.INTEGER,
        id_tag : DataTypes.INTEGER,
    })
    return articles
}