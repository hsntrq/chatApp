let UserGroup = require("../models/userGroup.model");
let User = require("../models/user.model");
let Group = require("../models/group.model");

exports.getAll = async (req, res) => {
  await UserGroup.find()
    .then((userGroups) => res.status(200).json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
};

// get all groups in which user is a member(may aswell be an admin)
exports.memberOf = async (req, res) => {
  await UserGroup.find({ userID: req.params.userid })
    .then((userGroups) => res.status(200).json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
};

// get all groups in which a user is the admin
exports.isAdminOf = async (req, res) => {
  await UserGroup.find({ userID: req.params.userid })
    .find({ isAdmin: true })
    .then((userGroups) => res.status(200).json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
};

// user joins a group
exports.joinGroup = async (req, res) => {
  const userID = req.body.userID;
  const groupID = req.body.groupID;
  const isAdmin = req.body.isAdmin;
  const groupExists = await Group.findById(groupID);
  const userExists = await User.findById(userID);
  if (!groupExists)
    res.status(404).json("Error:Group does not exist in the database");
  if (!userExist)
    res.status(404).json("Error:User does not exist in the database");

  const userGroupExists = await UserGroup.findOne(
    { userID: userID },
    { groupID: groupID }
  );
  if (userGroupExists)
    res.status(400).json("Error:User is already in this Group");

  const newConnection = new UserGroup({
    userID: req.body.userID,
    groupID: req.body.groupID,
    isAdmin: req.body.isAdmin,
  });
  console.log(newConnection.userID);
  newConnection
    .save()
    .then(() => res.status(201).json("User has joined the group!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// user exits from a group
exports.exitGroup = async (req, res) => {
  if (!(await UserGroup.findById(req.params.id)))
    res.status(404).json("Error:User is not in this Group");
  await UserGroup.findByIdAndDelete(req.params.id)
    .then(() => res.status(201).json("User removed from group!"))
    .catch((err) => res.status(400).json("Error: " + err));
};
