const express = require("express");

const router = express.Router();

const studentControllers = require("./controllers/studentControllers");

router.get("/student", studentControllers.find);
router.get("/student/:id", studentControllers.read);
router.put("/student/:id", studentControllers.edit);
router.post("/student", studentControllers.add);
router.delete("/student/:id", studentControllers.destroy);

module.exports = router;
