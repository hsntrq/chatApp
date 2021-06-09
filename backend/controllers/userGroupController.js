const mongoose = require("mongoose");
const router = require("express").Router();
let UserGroup = require("../models/userGroup.model");

exports.getAll = async (req, res) => {
  UserGroup.find()
    .then((userGroups) => res.json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
};

// get all groups in which user is a member(may aswell be an admin)
exports.memberOf = async (req, res) => {
  UserGroup.find({ userID: req.params.userid })
    .then((userGroups) => res.json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
};

// get all groups in which a user is the admin
exports.isAdminOf = async (req, res) => {
  UserGroup.find({ userID: req.params.userid })
    .find({ isAdmin: true })
    .then((userGroups) => res.json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
};

// user joins a group
exports.joinGroup = async (req, res) => {
  const newConnection = new UserGroup({
    userID: req.body.userID,
    groupID: req.body.groupID,
    isAdmin: req.body.isAdmin,
  });
  console.log(newConnection.userID);
  newConnection
    .save()
    .then(() => res.json("User has joined the group!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// user exits from a group
exports.exitGroup = async (req, res) => {
  UserGroup.findByIdAndDelete(req.params.id)
    .then(() => res.json("User removed from group!"))
    .catch((err) => res.status(400).json("Error: " + err));
};
