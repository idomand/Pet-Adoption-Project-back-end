const e = require("express");
const UserDb = require("../models/userModel");
const userDb = new UserDb();

const getData = async (req, res) => {
  try {
    const foo = await userDb.getAllData();
    res.send(foo);
  } catch (error) {
    console.error(error);
  }
};

const signUpNewUser = async (req, res) => {
  try {
    const isUnique = await userDb.checkUniqueEmail(req.body.email);
    if (isUnique) {
      await userDb.signUpNewUser(req.body);
      res.send("ok");
    } else {
      res.send("Email already in use");
    }
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const isUserExist = await userDb.loginUser(req.body);
    if (isUserExist === "incorrect password") {
      res.send("incorrect password");
    } else if (isUserExist === "unknown Email") {
      res.send("unknown Email");
    } else if (isUserExist.commend === "password is correct") {
      res.send(isUserExist);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getData, signUpNewUser, loginUser };
