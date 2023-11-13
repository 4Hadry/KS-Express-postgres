var express = require("express");
const contro = require("../Controller/instructorController");
var router = express.Router();

/* GET users listing. */
router.get("/", contro.getTeacher);
router.post("/add-teacher", contro.addTeacher);
router.patch("/update-teacher/:id", contro.UpdateTeacher);
router.delete("/del-teacher/:id", contro.deleteTeacher);
// router.delete("/delUser/:id", contro.delUserr);

module.exports = router;
