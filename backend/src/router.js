const express = require("express");

const router = express.Router();

const studentControllers = require("./controllers/studentControllers");
const userControllers = require("./controllers/userControllers");
const { getUserByEmail, verifyPassword } = require("./middleware/UserCheck");

router.get("/student", studentControllers.find);
router.get("/student/:id", studentControllers.read);
router.put("/student/:id", studentControllers.edit);
router.post("/student", studentControllers.add);
router.delete("/student/:id", studentControllers.destroy);

router.post(
  "/login",
  getUserByEmail,
  verifyPassword,
  userControllers.checkUser
);

module.exports = router;
