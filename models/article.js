module.exports = (sequelize, DataTypes) => {
    let article = sequelize.define('article', {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      id_author: DataTypes.INTEGER,
      id_tag: DataTypes.INTEGER
    });

    return article;
  };