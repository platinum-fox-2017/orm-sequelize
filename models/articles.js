'use strict';
module.exports = (sequelize, DataTypes) => {
  var Articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    id_author: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};
