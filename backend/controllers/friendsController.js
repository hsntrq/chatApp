let Friends = require("../models/friends.model");

exports.getFriends = async (req, res) => {
  await Friends.find({
    $or: [{ user1: req.params.userid }, { user2: req.params.userid }],
  })
    .find({ status: true })
    .then((connection) => res.json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.requestsReceived = async (req, res) => {
  await Friends.find({ user2: req.params.userid })
    .find({ status: false })
    .then((connection) => res.json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.requestsSent = async (req, res) => {
  await Friends.find({ user1: req.params.userid })
    .find({ status: false })
    .then((connection) => res.json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.sendRequest = async (req, res) => {
  const newConnection = new Friends({
    user1: req.body.user1,
    user2: req.body.user2,
  });
  console.log(newConnection.user1 + " " + newConnection.user2);
  newConnection
    .save()
    .then(() => res.json("request sent!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.acceptRequest = async (req, res) => {
  await Friends.findByIdAndUpdate(
    req.params.id,
    { $set: { status: true } },
    (err, doc) => {
      if (!err) res.json("Request Accepted!");
      else res.status(400).json("Error: " + err);
    }
  );
};

exports.deleteFriend = async (req, res) => {
  await Friends.findByIdAndDelete(req.params.id)
    .then(() => res.json("Connection deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
};
