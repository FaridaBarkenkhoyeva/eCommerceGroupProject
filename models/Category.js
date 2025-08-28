const sequelize = require("../db/db");
const { DataTypes } = require("sequelize");

const category = sequelize.define(
  "category",

  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);


module.exports = category