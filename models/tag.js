'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    name: DataTypes.STRING
  });
  tag.associate = models => {
    tag.hasMany(models.article, {
      foreignKey: 'id'
    })
  }
  return tag;
};
