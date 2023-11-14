const studentService = require("../Service/studentService");
const userService = require("../Service/userService");
const userValidation = require("./userValidation");
// const userSheema = require("./userSheema");

const MyUser = async (req, res, next) => {
  // res.send("UserControler");
  const userData = await userService.getUser();

  res.send(userData);
};

const userData = (req, res) => {
  const user = userService.getUser();
  res.send(user);
};
const addUser = async (req, res) => {
  const { error, value } = userValidation.createUser.validate(req.body);
  const user = await userService.creatUser(req.body);
  res.send(user);
  return user;
};
const UpdateUser = (req, res) => {
  let userId = req.params.id;
  let updateUserData = req.body;
  const data = userService.updtUser(userId, updateUserData);

  res.send(data);
};

const delUserr = (req, res) => {
  let userId = req.params.id;
  console.log(userId);
  const newData = userService.deleteUser(userId);

  //   let updateUserData = req.body;

  res.send(newData);
};

const myStudents = async (req, res) => {
  console.log("in controller");
  const studentsData = await studentService.getStudent();
  console.log("back in controller");
  console.log("student data", studentsData);
  res.send(studentsData);
};
const addStudent = (req, res) => {
  // const { error, value } = userSheema.createUser.validate(req, body);
  let data = req.body;
  console.log(data);
  const user = studentService.addStudent(data);
  res.send(user);
};
const UpdateStudent = (req, res) => {
  let studentId = req.params.RollNo;
  let updateStudentData = req.body;
  const data = studentService.updtstudent(studentId, updateStudentData);
  // studentService;
  res.send(data);
};

const delStudent = (req, res) => {
  let studentId = req.params.RollNo;
  console.log(studentId);
  const newData = studentService.deleteStudent(studentId);

  //   let updateUserData = req.body;

  res.send(newData);
};
module.exports = {
  MyUser,
  userData,
  addUser,
  UpdateUser,
  delUserr,
  myStudents,
  addStudent,
  UpdateStudent,
  delStudent,
};
