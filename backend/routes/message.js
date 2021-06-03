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

  const newMessage = new Message({
    senderID: senderID,
    recieverID: recieverID,
    messageText: messageText,
  });

  newMessage
    .save()
    .then(() => res.json("Message added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
