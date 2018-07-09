'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    id_author: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};