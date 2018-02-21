'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    name: DataTypes.STRING,
  }, {});

  tag.associate = function (models){
      tag.hasMany(models.article,{
          foreignKey: 'id_tag'
      })

      tag.belongsToMany(models.author,{
        foreignKey: 'id_tag',
        through: 'article'
      })
  }

  return tag;
};