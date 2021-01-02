const bcrypt = require("bcrypt");

const encryptPassword = async (obj) => {
  const hashedPassword = await bcrypt.hash(obj.password, 10);
  let newObject = obj;
  newObject.password = hashedPassword;
  return newObject;
};

const comparePasswords = async (testPassword, userDbPassword) => {
  const isPasswordCorrect = await bcrypt.compare(testPassword, userDbPassword);
  console.log(isPasswordCorrect);
  return isPasswordCorrect;
};

module.exports = { encryptPassword, comparePasswords };
