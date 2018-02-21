'use strict';
module.exports = (sequelize, DataTypes) => {
    var author = sequelize.define('author', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        religion: DataTypes.STRING,
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER
    });

    return author
};