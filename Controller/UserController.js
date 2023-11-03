const userService = require("../Service/userService");
const userValidation = require("./userValidation");
// const userSheema = require("./userSheema");

const MyUser = (req, res, next) => {
  res.send("UserControler");
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

const myStudents = (req, res) => {
  const studentsData = userService.getStudent();
  res.send(studentsData);
};
const addStudent = (req, res) => {
  // const { error, value } = userSheema.createUser.validate(req, body);
  let data = req.body;
  const user = userService.addStudents(data);
  res.send(user);
};

module.exports = {
  MyUser,
  userData,
  addUser,
  UpdateUser,
  delUserr,
  myStudents,
  addStudent,
};
