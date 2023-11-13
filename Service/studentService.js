// const models = require("../models/index");
const { models } = require("../models/index");
const student = require("../models/shemas/studentScheema");

module.exports = {
  getStudent: async () => {
    // console.log("in student service");
    const users = await student.findAll();
    // console.log("found users", users);
    return users;
  },
  addStudent: async (data) => {
    // console.log(models);
    const users = await student.create(data);
    return users;
  },
  updtstudent: async (studentId, updateStudentData) => {
    console.log(studentId);
    const students = await models.student.update(updateStudentData, {
      where: {
        RollNo: studentId,
      },
    });
    return students;
  },
  deleteStudent: async (studentId) => {
    const students = await models.student.findByPk(studentId);
    if (students) {
      students.destroy();
      return "Student Delete Succfull";
    }
    return null;
  },
};
