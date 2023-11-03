var express = require("express");
const contro = require("../Controller/UserController");
var router = express.Router();

/* GET users listing. */
router.get("/", contro.myStudents);
router.get("/add-student", contro.addStudent);
// router.post("/addUser", contro.addUser);
// router.put("/updateUser/:id", contro.UpdateUser);
// router.delete("/delUser/:id", contro.delUserr);

module.exports = router;
