const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require("./user.model");

const messageSchema = new Schema({
  senderID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recieverID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subject: { type: String, default: null },
  sendTime: { type: Date, required: true, default: new Date().getTime() },
  receivedTime: { type: Date, default: null },
  messageText: { type: String, required: true },
  parentMsgId: { type: Schema.Types.ObjectId, ref: "Message", default: null },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
