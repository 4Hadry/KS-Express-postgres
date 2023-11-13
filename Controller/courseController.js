const courseService = require("../Service/courseService");
const getCourses = async (req, res) => {
  console.log("in controller");
  const courseData = await courseService.getCourses();
  // console.log("back in controller");
  // console.log("student data", studentsData);
  res.send(courseData);
};
const addCourse = (req, res) => {
  // const { error, value } = userSheema.createUser.validate(req, body);
  let data = req.body;
  console.log(data);
  const course = courseService.addCourse(data);
  res.send(course);
};
// instuctorService
const UpdateCourse = (req, res) => {
  let courseId = req.params.courseID;
  let updateCourseData = req.body;
  const data = courseService.updtCourse(courseId, updateCourseData);
  // studentService;
  res.send(data);
};

const deleteCourse = (req, res) => {
  let courseId = req.params.courseID;
  //   console.log(teacherId);
  const newData = courseService.deleteCourse(courseId);

  //   let updateUserData = req.body;

  res.send(newData);
};

module.exports = {
  getCourses,
  addCourse,
  UpdateCourse,
  deleteCourse,
};
