const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require("./user.model");
require("./group.model");

const userGroupSchema = new Schema(
  {
    groupID: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const UserGroup = mongoose.model("UserGroup", userGroupSchema);

module.exports = UserGroup;
