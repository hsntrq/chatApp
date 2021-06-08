const router = require("express").Router();
let UserGroup = require("../models/userGroup.model");

// get all groups in which user is a member(may aswell be an admin)
router.route("/:userid").get((req, res) => {
  UserGroup.find({ userID: req.params.userid })
    .then((userGroups) => res.json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all groups in which a user is the admin
router.route("/admin/:userid").get((req, res) => {
  UserGroup.find({ userID: req.params.userid })
    .find({ isAdmin: true })
    .then((userGroups) => res.json(userGroups))
    .catch((err) => res.status(400).json("Error: " + err));
});

// user joins a group
router.route("/join/").post((req, res) => {
  const newConnection = new UserGroup({
    userID: req.body.userID,
    groupID: req.body.groupID,
  });
  newConnection
    .save()
    .then(() => res.json("User has joined the group!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// user exits from a group
router.route("/exit/:id").delete((req, res) => {
  UserGroup.findByIdAndDelete(req.params.id)
    .then(() => res.json("User removed from group!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
