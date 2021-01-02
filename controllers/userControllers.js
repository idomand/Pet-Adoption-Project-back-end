const e = require("express");
const UserDb = require("../models/userModel");
const userDb = new UserDb();

const getData = async (req, res) => {
  const foo = await userDb.getAllData();
  res.send(foo);
};

const signUpNewUser = async (req, res) => {
  const isUnique = await userDb.checkUniqueEmail(req.body.email);
  if (isUnique) {
    userDb.signUpNewUser(req.body);
    res.send("ok");
  } else {
    res.send("Email already in use");
  }
};

const loginUser = async (req, res) => {
  console.log("req.body", req.body);
  const isUserExist = await userDb.loginUser(req.body);
  if (isUserExist === "incorrect password") {
    res.send("incorrect password");
  } else if (isUserExist === "unknown Email") {
    res.send("unknown Email");
  } else if (isUserExist.commend === "password is correct") {
    res.send(isUserExist);
  }
};

module.exports = { getData, signUpNewUser, loginUser };
