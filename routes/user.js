const router = require("express").Router();

const {
  verifyToken,
  verifyAgent,
  verifyAndAuth,
} = require("../middleware/verifyToken");
const userController = require("../controllers/userController");

//Get user
router.get("/", verifyToken, userController.getUser);
//Delete user
router.delete("/:id", verifyToken, userController.deleteUser);
//Update user
router.put("/", verifyToken, userController.updateUser);
module.exports = router;
