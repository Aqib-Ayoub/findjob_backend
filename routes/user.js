const router = require("express").Router();

const {
  verifyToken,
  verifyAgent,
  verifyAndAuth,
} = require("../middleware/verifyToken");
const userController = require("../controllers/userController");

//Get user
router.get("/", verifyAndAuth, userController.getUser);
//Delete user
router.delete("/:id", verifyAndAuth, userController.deleteUser);
//Update user
router.put("/", verifyAndAuth, userController.updateUser);

//Add skills
router.post("/skills", verifyAndAuth, userController.addSkills);

//Get skills
router.get("/skills", verifyAndAuth, userController.getSkills);

//Delete skills
router.delete("/skills/:id", verifyAndAuth, userController.deleteSkill);

module.exports = router;
