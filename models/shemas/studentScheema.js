const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");

const student = database.define(
  "student",
  {
    RollNo: {
      primaryKey: true,
      //   autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FatherName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = student;
