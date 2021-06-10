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
    .then((connection) => res.status(200).json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.requestsSent = async (req, res) => {
  await Friends.find({ user1: req.params.userid })
    .find({ status: false })
    .then((connection) => res.status(200).json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.sendRequest = async (req, res) => {
  const isFriend = await friends.find(
    $or[
      ({ user1: req.body.user1, user2: req.body.user1 },
      { user1: req.body.user2, user2: req.body.user2 })
    ]
  );
  if (isFriend) throw "Already Friends";
  const newConnection = new Friends({
    user1: req.body.user1,
    user2: req.body.user2,
  });
  console.log(newConnection.user1 + " " + newConnection.user2);
  newConnection
    .save()
    .then(() => res.status(201).json("request sent!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.acceptRequest = async (req, res) => {
  if (!(await Friends.findById(req.params.id)))
    res.status(404).json("Error: Request does not exist anymore");
  await Friends.findByIdAndUpdate(
    req.params.id,
    { $set: { status: true } },
    (err, doc) => {
      if (!err) res.status(200).json("Request Accepted!");
      else res.status(400).json("Error: " + err);
    }
  );
};

exports.deleteFriend = async (req, res) => {
  if (!(await Friends.findById(req.params.id)))
    res
      .status(404)
      .json(
        "Error: Request does not exist anymore. It has laready been deleted"
      );
  await Friends.findByIdAndDelete(req.params.id)
    .then(() => res.json("Connection deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
};
