const router = require("express").Router();
let User = require("../models/user.model");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

router.route("/").get((req, res) => {
  let query = req.query.q;

  if (!query) query = ".*";

  User.find({
    $or: [
      { userName: { $regex: query, $options: "i" } },
      { firstName: { $regex: query, $options: "i" } },
      { lastName: { $regex: query, $options: "i" } },
      { email: { $regex: query + ".*(?=@)", $options: "i" } },
    ],
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  const userName = req.body.userName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const email = req.body.email;
  const gender = req.body.gender;

  const newUser = new User({
    userName: userName,
    firstName: firstName,
    lastName: lastName,
    password: sha256(password + process.env.SALT),
    email: email,
    gender: gender,
  });

  newUser
    .save()
    .then(() => res.json("User  [" + userName + "] added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post((req, res) => {
  const { email, password, firstName } = req.body;
  // Error Handling
  User.findOne({
    email,
    password: sha256(password + process.env.SALT),
  })
    .then((user) => {
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      res.json("User [" + email + "] logged in successfully");
    })
    .catch((err) =>
      res.status(400).json(" Email and Password Incorrect Error: " + err)
    );
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/status/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user.status))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/update/:id", (req, res) => {
  var updatedRecord = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    gender: req.body.gender,
    image: req.body.image,
    phoneNo: req.body.phoneNo,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address,
    description: req.body.description,
  };
  User.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, (err, doc) => {
    if (!err) res.json("User UPDATED.");
    else res.status(400).json("Error: " + err);
  });
});

module.exports = router;
