const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");

const teacher = database.define(
  "tracher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    experience: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = teacher;
