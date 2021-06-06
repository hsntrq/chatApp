const router = require("express").Router();
let Message = require("../models/message.model");

router.route("/").get((req, res) => {
  Message.find()
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const senderID = req.body.senderID;
  const recieverID = req.body.recieverID;
  const messageText = req.body.messageText;
  const parentMsgId = req.body.parentMsgId;

  const newMessage = new Message({
    senderID: senderID,
    recieverID: recieverID,
    messageText: messageText,
    parentMsgId: parentMsgId,
  });

  newMessage
    .save()
    .then(() => res.json("Message added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.json("Message deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/update/:id", (req, res) => {
  var updatedRecord = {
    sendTime: new Date().getTime(),
    messageText: req.body.messageText,
  };
  Message.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    (err, doc) => {
      if (!err) res.json("Message Edited.");
      else res.status(400).json("Error: " + err);
    }
  );
});
module.exports = router;
