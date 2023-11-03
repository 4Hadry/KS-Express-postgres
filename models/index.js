const database = require("../common/dbconnection");
const teacher = require("./shemas/InstructorSceema");
const user = require("./shemas/userSchema");

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
const models = database.models;
console.log(models);
module.exports = { database, models };
