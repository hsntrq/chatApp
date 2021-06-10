const router = require("express").Router();
const auth = require("../middlewares/auth");
const { catchErrors } = require("../handlers/errorHandlers");
const groupmessagecontroller = require("../controllers/groupmessageController");
router.get("/", catchErrors(groupmessagecontroller.getAllMessages));
router.post("/add", auth, catchErrors(groupmessagecontroller.addMessage));
router.delete("/:id", auth, catchErrors(groupmessagecontroller.deleteMessage));
router.put(
  "/edit/:id",
  auth,
  catchErrors(groupmessagecontroller.updateMessage)
);

// router.route("/").get((req, res) => {
//     GroupMessage.find()
//         .then((groupMessages) => res.json(groupMessages))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/add").post((req, res) => {
//     const newGroupMessage = new groupMessage({
//         senderID: req.body.senderID,
//         groupID: req.body.groupID,
//         messageText: req.body.messageText,
//         parentMsgId: req.body.parentMsgId,
//     });

//     newGroupMessage
//         .save()
//         .then(() => res.json(" Group Message added!"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/:id").delete((req, res) => {
//     GroupMessage.findByIdAndDelete(req.params.id)
//         .then(() => res.json("Message deleted."))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

// router.put("/edit/:id", (req, res) => {
//     var updatedRecord = {
//         sendTime: new Date().getTime(),
//         messageText: req.body.messageText,
//     };
//     GroupMessage.findByIdAndUpdate(
//         req.params.id, { $set: updatedRecord },
//         (err, doc) => {
//             if (!err) res.json("Group Message Edited.");
//             else res.status(400).json("Error: " + err);
//         }
//     );
// });

module.exports = router;
