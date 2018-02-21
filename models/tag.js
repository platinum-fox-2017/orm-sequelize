'use strict'
module.exports = (sequelize, DataTypes) => {
  let tag = sequelize.define('tag', {
    name: DataTypes.STRING
  });
  return tag;
};
