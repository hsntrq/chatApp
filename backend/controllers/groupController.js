const Group = require("../models/group.model");

exports.getGroups = async (req, res) => {
  await Group.find()
    .then((groups) => res.status(200).json(groups))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.createGroup = async (req, res) => {
  const name = req.body.name;
  if (!name) throw "Name is required";
  const groupExist = await Group.findOne({ name });
  if (groupExist)
    res.status(400).json("Error: Group with this name already exists!");
  const newGroup = new Group({ name: name });

  newGroup
    .save()
    .then(() => res.status(201).json(" " + newGroup.name + " group created!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Find group by Id
exports.findGroup = async (req, res) => {
  await Group.findById(req.params.id)
    .then((group) => res.json(group))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Get status of the group is it active or deactivated
exports.status = async (req, res) => {
  await Group.findById(req.params.id)
    .then((group) => res.json(group.isActive))
    .catch((err) => res.status(404).json("Error: " + err));
};

// Delete the group
exports.deleteGroup = async (req, res) => {
  await Group.findByIdAndDelete(req.params.id)
    .then(() => res.json("Group deleted."))
    .catch((err) => res.status(404).json("Error: " + err));
};

//Update Group Name and Status
exports.updateGroup = async (req, res) => {
  var updatedRecord = {
    name: req.body.name,
    imageIcon: req.body.imageIcon,
    isActive: req.body.isActive,
  };
  if (!Group.findById(req.params.id))
    res.status(404).json("Error: Group with this name doesnt exists!");

  await Group.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    (err, doc) => {
      if (!err) res.json("Group UPDATED.");
      else res.status(400).json("Error: " + err);
    }
  );
};
