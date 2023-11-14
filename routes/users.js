var express = require("express");
const contro = require("../Controller/UserController");
const login = require("../Controller/common/authenticationController");
var router = express.Router();

/* GET users listing. */
// router.get("/", contro.MyUser);
router.get("/", login.veriftToken, contro.MyUser);
router.post("/login", login.login);
router.get("/data", contro.userData);
router.post("/addUser", contro.addUser);
router.put("/updateUser/:id", contro.UpdateUser);
router.delete("/delUser/:id", contro.delUserr);

module.exports = router;
