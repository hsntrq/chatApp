const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require("./user.model");

const friendsSchema = new Schema({
  user1: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user2: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: { type: String, default: "Under Process" },
  dateOfApproval: { type: Date, default: new Date().getTime() },
});

const Friends = mongoose.model("Friends", friendsSchema);

module.exports = Friends;
