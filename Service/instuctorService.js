// const models = require("../models/index");
const { models } = require("../models/index");
const teacher = require("../models/shemas/InstructorSceema");
// const student = require("../models/shemas/studentScheema");

module.exports = {
  getTeacher: async () => {
    // console.log("in student service");
    const teachers = await teacher.findAll({ include: models.user });
    // console.log("found users", users);
    return teachers;
  },
  addTeacher: async (data) => {
    // console.log(models);
    const teachers = await teacher.create(data);
    return teachers;
  },
  updtTeacher: async (teacherId, updateTeacherData) => {
    console.log(teacherId);
    const teachers = await models.teacher.update(updateTeacherData, {
      where: {
        id: teacherId,
      },
    });
    return teachers;
  },
  deleteTeacher: async (teacherId) => {
    const teachers = await models.teacher.findByPk(teacherId);
    if (teachers) {
      teachers.destroy();
      return "Student Delete Succfull";
    }
    return null;
  },
};
