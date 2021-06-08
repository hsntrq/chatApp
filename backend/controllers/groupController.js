const mongoose = require("moongoose");
const Group = require("../models/group.model");

exports.getGroups = async (req, res) => {
  Group.find()
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.createGroup = async (req, res) => {
  const newGroup = new Group({ name: req.body.name });
  await newGroup
    .save()
    .then(() => res.json(" " + newGroup.name + " group created!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Find group by Id
exports.findGroup = async (req, res) => {
  Group.findById(req.params.id)
    .then((group) => res.json(group))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Get status of the group is it active or deactivated
exports.status = async (req, res) => {
  Group.findById(req.params.id)
    .then((group) => res.json(group.isActive))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Delete the group
exports.deleteGroup = async (req, res) => {
  Group.findByIdAndDelete(req.params.id)
    .then(() => res.json("Group deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

//Update Group Name and Status
exports.updateGroup = async (req, res) => {
  var updatedRecord = {
    name: req.body.name,
    imageIcon: req.body.imageIcon,
    isActive: req.body.isActive,
  };
  Group.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    (err, doc) => {
      if (!err) res.json("Group UPDATED.");
      else res.status(400).json("Error: " + err);
    }
  );
};
