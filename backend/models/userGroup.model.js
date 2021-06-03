const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require("./user.model");
require("./group.model");

const userGroupSchema = new Schema(
  {
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    userId: {
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
