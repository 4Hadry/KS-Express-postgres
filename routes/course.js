var express = require("express");
const contro = require("../Controller/courseController");
var router = express.Router();

/* GET users listing. */
router.get("/", contro.getCourses);
router.post("/add-course", contro.addCourse);
router.patch("/update-course/:courseID", contro.UpdateCourse);
router.delete("/del-course/:courseID", contro.deleteCourse);

module.exports = router;
