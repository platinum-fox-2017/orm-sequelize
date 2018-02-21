'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("articles", {
      title: DataTypes.STRING,
      body: DataTypes.TEXT
    })
  }
