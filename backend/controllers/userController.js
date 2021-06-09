const mongoose = require("mongoose");
const User = require("../models/user.model");
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
