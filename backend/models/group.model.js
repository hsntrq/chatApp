const mongoose = require("mongoose");

const Schema = mongoose.Schema;
require("./user.model");

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageIcon: {
    type: String,
    default: null,
  },
  timeCreated: { type: Date, default: new Date().getTime() },
  isActive: { type: Boolean, default: true },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
