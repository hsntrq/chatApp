const router = require("express").Router();
const auth = require("../middlewares/auth");

const { catchErrors } = require("../handlers/errorHandlers");
const messagecontroller = require("../controllers/messageController");

router.get("/", auth, catchErrors(messagecontroller.getAllMessages));
router.post("/add", auth, catchErrors(messagecontroller.addMessage));
router.delete("/:id", auth, catchErrors(messagecontroller.deleteMessage));
router.put("/edit/:id", auth, catchErrors(messagecontroller.updateMessage));

module.exports = router;
