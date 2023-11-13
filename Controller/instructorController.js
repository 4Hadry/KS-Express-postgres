const instuctorService = require("../Service/instuctorService");

const getTeacher = async (req, res) => {
  console.log("in controller");
  const teacherData = await instuctorService.getTeacher();
  // console.log("back in controller");
  // console.log("student data", studentsData);
  res.send(teacherData);
};
const addTeacher = (req, res) => {
  // const { error, value } = userSheema.createUser.validate(req, body);
  let data = req.body;
  console.log(data);
  const user = instuctorService.addTeacher(data);
  res.send(user);
};
// instuctorService
const UpdateTeacher = (req, res) => {
  let teacherId = req.params.id;
  let updateTeacherData = req.body;
  const data = instuctorService.updtTeacher(teacherId, updateTeacherData);
  // studentService;
  res.send(data);
};

const deleteTeacher = (req, res) => {
  let teacherId = req.params.id;
  console.log(teacherId);
  const newData = instuctorService.deleteTeacher(teacherId);

  //   let updateUserData = req.body;

  res.send(newData);
};

module.exports = {
  getTeacher,
  addTeacher,
  UpdateTeacher,
  deleteTeacher,
};
