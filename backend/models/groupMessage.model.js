const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require("./user.model");
require("./group.model");

const groupMessageSchema = new Schema({
  senderID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  groupID: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  subject: { type: String, default: null },
  sendTime: { type: Date, required: true, default: new Date().getTime() },
  messageText: { type: String, required: true },
  parentMsgId: { type: Schema.Types.ObjectId, ref: "Message", default: null },
});

const GroupMessage = mongoose.model("GroupMessage", groupMessageSchema);

module.exports = GroupMessage;
