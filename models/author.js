'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});

  author.association = function(models){
      author.hasMany(models.article,{
          foreignKey: 'id_author'
      })
      
      author.belongsToMany(models.tag,{
        foreignKey: 'id_author',
        through: 'article'
      })
  }

  return author;
};