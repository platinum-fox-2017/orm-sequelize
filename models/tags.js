'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("tags", {
      name: DataTypes.STRING,
    })
  }

//   CREATE TABLE tags (
//     id integer NOT NULL,
//     name character varying(255),
//     "createdAt" timestamp with time zone NOT NULL,
//     "updatedAt" timestamp with time zone NOT NULL
// );