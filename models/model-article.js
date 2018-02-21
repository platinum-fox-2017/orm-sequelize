'use strict';
module.exports = (sequelize, DataTypes) => {
    var articles = sequelize.define('articles', {
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.STRING
        },
        id_author: {
            type: DataTypes.INTEGER
        },
        id_tag: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });
    return articles;
};