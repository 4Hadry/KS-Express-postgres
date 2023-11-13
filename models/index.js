const database = require("../common/dbconnection");
const teacher = require("./shemas/InstructorSceema");
const course = require("./shemas/courseSceema");
const student = require("./shemas/studentScheema");
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
user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});

student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
    unique: true,
  },
});
student.belongsToMany(course, {
  through: "student_course",
  foreignKey: { name: "studentID" },
});
course.belongsToMany(student, {
  through: "student_course",
  foreignKey: { name: "courseID" },
});
teacher.belongsToMany(course, {
  through: "teacher_course",
  foreignKey: { name: "teacherID" },
});
course.belongsToMany(teacher, {
  through: "teacher_course",
  foreignKey: { name: "courseID" },
});
const models = database.models;
// console.log("student", models.student);
module.exports = { database, models };
