const { DataTypes } = require("sequelize");
const database = require("../../common/dbconnection");

const course = database.define(
  "course",
  {
    courseID: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    courseName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // credit: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = course;
