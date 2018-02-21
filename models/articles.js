'use strict';
module.exports = (sequelize, DataTypes) => {
  var articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    id_author: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return articles;
};