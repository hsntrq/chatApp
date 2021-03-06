const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const {
  getAllMessages,
  getMessagesUser,
  getChatUser,
  addMessage,
  deleteMessage,
  updateMessage,
} = require("../controllers/messageController");
router.get("/:userid", catchErrors(getMessagesUser));
router.get("/chat/:userid", catchErrors(getChatUser)); //aik user k saare messages//aik user k saare messages
router.get("/", catchErrors(getAllMessages));
router.post("/add", auth, catchErrors(addMessage));
router.delete("/:id", auth, catchErrors(deleteMessage));
router.put("/edit/:id", auth, catchErrors(updateMessage));

module.exports = router;
