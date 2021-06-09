const router = require("express").Router();
let Message = require("../models/message.model");

const { catchErrors } = require("../handlers/errorHandlers");
const messagecontroller = require("../controllers/messageController");

router.get("/", catchErrors(messagecontroller.getAllMessages))
router.post("/add", catchErrors(messagecontroller.addMessage))
router.delete("/:id", catchErrors(messagecontroller.deleteMessage))
router.put("/edit/:id", catchErrors(messagecontroller.updateMessage))

module.exports = router;