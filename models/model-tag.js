'use strict';
module.exports = (sequelize, DataTypes) => {
    var tags = sequelize.define('tags', {
        name: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });
    return tags;
};