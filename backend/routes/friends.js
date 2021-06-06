const router = require("express").Router();
let Friends = require("../models/friends.model");

router.route("/:userid").get((req, res) => {
  Friends.find({
    $or: [{ user1: req.params.userid }, { user2: req.params.userid }],
  })
    .find({ status: true })
    .then((connection) => res.json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/requests/received/:userid").get((req, res) => {
  Friends.find({ user2: req.params.userid })
    .find({ status: false })
    .then((connection) => res.json(connection))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/requests/sent/:userid").get((req, res) => {
    Friends.find({ user1: req.params.userid })
      .find({ status: false })
      .then((connection) => res.json(connection))
      .catch((err) => res.status(400).json("Error: " + err));
  });

router.route("/request/").post((req, res) => {
  const newConnection = new Friends({
    user1: req.body.userid1,
    user2: req.body.userid2,
  });
  newConnection
    .save()
    .then(() => res.json("request sent!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/accept/:id").put((req, res) => {
    Friends.findByIdAndUpdate(req.params.id, { $set: {status: true} }, (err, doc) => {
        if (!err) res.json("Request Accepted!");
        else res.status(400).json("Error: " + err);
      });
  });

router.route("/delete/:id").delete((req, res) => {
  Friends.findByIdAndDelete(req.params.id)
    .then(() => res.json("Connection deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
