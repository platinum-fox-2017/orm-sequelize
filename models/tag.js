'use strict';
module.exports = (sequelize, DataTypes) => {
    var tags = sequelize.define('tags', {
        name: DataTypes.STRING
    });

    return tags
};