let GroupMessage = require("../models/groupMessage.model");



exports.getAllMessages = async(req, res) => {
    const groupMessages = await GroupMessage.find()
    if (!groupMessages) throw "no messages found"
    res.json(groupMessages)
}

exports.addMessage = async(req, res) => {
    const { senderID, recieverID, messageText, parentMsgId } = req.body;
    const groupMessage = new GroupMessage({
        senderID,
        recieverID,
        messageText,
        parentMsgId,
        groupID
    })
    if (!groupMessage) throw "empty message"

    await groupMessage.save();

    res.json("Message added")

}

exports.deleteMessage = async(req, res) => {
    const groupMessage = await GroupMessage.findByIdAndDelete(req.params.id)

    if (!groupMessage) throw "message not found against this id"

    res.json("Message deleted")
}

exports.updateMessage = async(req, res) => {
    var updatedRecord = {
        sendTime: new Date().getTime(),
        messageText: req.body.messageText,
    };

    const groupMessage = await GroupMessage.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, (err, doc) => {
        if (!err) res.json("Message Edited.");
        else res.status(400).json("Error: " + err);
    });
}