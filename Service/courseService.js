// const models = require("../models/index");
const { models } = require("../models/index");
const course = require("../models/shemas/courseSceema");

module.exports = {
  getCourses: async () => {
    // console.log("in student service");
    const courses = await course.findAll({ include: models.student });
    // console.log("found users", users);
    return courses;
  },
  addCourse: async (data) => {
    // console.log(models);
    const courses = await course.create(data);
    return courses;
  },
  updtCourse: async (courseId, updateCourseData) => {
    console.log(courseId);
    const course = await models.course.update(updateCourseData, {
      where: {
        courseID: courseId,
      },
    });
    return course;
  },
  deleteCourse: async (courseId) => {
    const courses = await models.course.findByPk(courseId);
    if (courses) {
      courses.destroy();
      return "Course Delete Succfully";
    }
    return null;
  },
};
