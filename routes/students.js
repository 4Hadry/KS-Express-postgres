var express = require("express");
const contro = require("../Controller/UserController");
var router = express.Router();

/* GET users listing. */
router.get("/", contro.myStudents);
router.post("/add-student", contro.addStudent);
router.patch("/update-student/:RollNo", contro.UpdateStudent);
router.delete("/del-student/:RollNo", contro.delStudent);
// router.delete("/delUser/:id", contro.delUserr);

module.exports = router;
