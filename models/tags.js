module.exports = (sequelize,DataTypes)=>{
    const tags = sequelize.define('tags',{
        name : DataTypes.STRING
    })
    return tags
}