'use strict';
module.exports = (sequelize, DataTypes) => {
  var authors = sequelize.define('authors', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  authors.associate = function(models) {
    // associations can be defined here
  };
  return authors;
};