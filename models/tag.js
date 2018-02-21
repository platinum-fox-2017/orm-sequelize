'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};
