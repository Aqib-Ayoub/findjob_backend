const router = require("express").Router();
const {
  verifyToken,
  verifyAgent,
  verifyAndAuth,
} = require("../middleware/verifyToken");

const bookmarkController = require("../controllers/bookmarkController");

//Create Bookmark Route
router.post("/", verifyAndAuth, bookmarkController.createBookmark);

//Delete Bookmark Route
router.delete("/:id", verifyAndAuth, bookmarkController.deleteBookmark);

//Get Bookmarks Route
router.get("/", verifyAndAuth, bookmarkController.getAllBookmark);

//Get Bookmark Route
router.get("/bookmark/:id", bookmarkController.getBookmark);

module.exports = router;
