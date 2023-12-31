const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");

const teacher = database.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    experience: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = teacher;
