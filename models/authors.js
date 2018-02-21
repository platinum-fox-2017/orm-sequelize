'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("authors", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      religion: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER
    })
  }