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

//Add agent
router.post("/agents", verifyAndAuth, userController.addAgent);

//Update agent
router.put("/agents/:id", verifyAndAuth, userController.updateAgent);

//Get single agent
router.get("/agents/:id", verifyAndAuth, userController.getAgent);

//Get Multiple agents
router.get("/agents", verifyAndAuth, userController.getAgents);

module.exports = router;
