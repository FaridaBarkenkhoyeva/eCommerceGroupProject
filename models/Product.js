const sequelize = require("../db/db");
const { DataTypes } = require("sequelize");

const product = sequelize.define(
  "product",

  {
    id: {
      type: DataTypes.INTEGER,
    //   autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }
);


module.exports = product