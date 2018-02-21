'use strict';
module.exports = (sequelize, DataTypes) => {
    const articles = sequelize.define('articles', {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        id_author: DataTypes.INTEGER,
        id_tag: DataTypes.INTEGER
    });

    return articles
};