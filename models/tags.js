'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tags = sequelize.define('tags', {
    name: DataTypes.STRING
  }, {});
  Tags.associate = function(models) {
    // associations can be defined here
  };
  return Tags;
};