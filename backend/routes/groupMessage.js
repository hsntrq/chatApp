const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const {
  getAllMessages,
  addMessage,
  deleteMessage,
  updateMessage,
} = require("../controllers/groupmessageController");

router.get("/", catchErrors(getAllMessages));
router.post("/add", auth, catchErrors(addMessage));
router.delete("/:id", auth, catchErrors(deleteMessage));
router.put("/edit/:id", auth, catchErrors(updateMessage));

module.exports = router;
