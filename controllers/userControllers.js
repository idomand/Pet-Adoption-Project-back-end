const UserDb = require("../models/userModel");
const userDb = new UserDb();

const getData = async (req, res) => {
  console.log("this is get data");
  const foo = await userDb.getAllData();
  // console.log("foo", foo);
  res.send(foo);
};

const signUpNewUser = (req, res) => {
  // run(req.body);
};

// const signUpNewUser = (req, res) => {
//   // console.log(req.body);
//   console.log("this is signUpNewUser in userControllers");
//   userDb.signUp(req.body);
// };

module.exports = { getData, signUpNewUser };
