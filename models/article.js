'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    id_author: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  });
  article.associate = models => {
    article.belongsTo(models.author, {
      foreignKey: 'id_author'
    })
  }
  article.associate = models => {
    article.belongsTo(models.tag, {
      foreignKey: 'id_tag'
    })
  }
  return article;
};
