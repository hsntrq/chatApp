let Message = require("../models/message.model");


exports.getAllMessages = async(req, res) => {
    const messages = await Message.find()
    if (!messages) throw "no messages found"
    res.json(messages)
}

exports.addMessage = async(req, res) => {
    const { senderID, recieverID, messageText, parentMsgId } = req.body;
    const message = new Message({
        senderID,
        recieverID,
        messageText,
        parentMsgId
    })
    if (!message) throw "empty message"

    await message.save();

    res.json("Message added")

}

exports.deleteMessage = async(req, res) => {
    const message = await Message.findByIdAndDelete(req.params.id)

    if (!message) throw "message not found against this id"

    res.json("Message deleted")
}

exports.updateMessage = async(req, res) => {
    var updatedRecord = {
        sendTime: new Date().getTime(),
        messageText: req.body.messageText,
    };

    const message = await Message.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, (err, doc) => {
        if (!err) res.json("Message Edited.");
        else res.status(400).json("Error: " + err);
    });
}