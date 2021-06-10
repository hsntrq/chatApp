let User = require("../models/user.model");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { userName, firstName, lastName, email, password, gender, isAdmin } =
    req.body;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passRegex.test(password))
    throw "Password must contain alteast one lower-case, upper-case and atleast 8 digits ";
  if (!emailRegex.test(email)) throw "Email is not supported from your domain";
  if (typeof firstName !== "string")
    throw "firstname must contain only alphabets";
  if (typeof lastName !== "string")
    throw "lastname must contain only alphabets";

  const userExists = await User.findOne({
    email,
    userName,
  });
  if (userExists) throw "User with same username and email already exists";

  const user = new User({
    userName,
    firstName,
    lastName,
    email,
    password: sha256(password + process.env.SALT),
    gender,
    isAdmin,
  });

  await user.save();

  res.json({
    message: "User [" + firstName + "] registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { userName, password, email } = req.body;
  console.log(userName + " " + password + " " + email);
  const user = await User.findOne({
    $or: [{ email: email }, { userName: userName }],
    password: sha256(password + process.env.SALT),
  });

  if (!user) throw "incorrect username and password entered";

  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully",
    token,
  });
};

exports.findAllUsers = async (req, res) => {
  let query = req.query.q;

  if (!query) query = ".*";
  const users = await User.find({
    $or: [
      { userName: { $regex: query, $options: "i" } },
      { firstName: { $regex: query, $options: "i" } },
      { lastName: { $regex: query, $options: "i" } },
      { email: { $regex: query + ".*(?=@)", $options: "i" } },
    ],
  });

  if (!users) throw "No users currently exist";
  res.json({
    users,
  });
};

exports.findUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw "No user exists with this id";
  res.json({ user });
};

exports.checkUserStatus = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw "No user exists with this id";
  res.json(user.status);
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) throw "User does not exist";
  res.json("User successfully deleted");
};

exports.updateUser = async (req, res) => {
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
    else res.status(404).json("Error: " + err);
  });
};
