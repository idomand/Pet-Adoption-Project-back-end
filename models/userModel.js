const {
  encryptPassword,
  comparePasswords,
} = require("../utils/passwordEncryption");
const { MongoClient, ObjectID } = require("mongodb");
const { response } = require("express");
require("dotenv").config();

module.exports = class UserModel {
  constructor() {
    const username = process.env.DB_username;
    const password = process.env.DB_password;
    const url = `mongodb+srv://${username}:${password}@cluster0.v3cxr.mongodb.net/<dbname>?retryWrites=true&w=majority`;
    const client = new MongoClient(url, { useUnifiedTopology: true });
    this.user_collection = "";
    client.connect().then(async (response) => {
      if (response.topology.s.state) {
        console.log("Status: " + response.topology.s.state + " to user model");
        const db = client.db("myPetProject");
        this.user_collection = db.collection("users");
      } else {
        console.log("Problem connecting to MongoDB");
      }
    });
  }

  getAllUsers = async () => {
    let result;
    try {
      const all_db_users = this.user_collection
        .find()
        .toArray()
        .then((users) => {
          return users;
        });
      return all_db_users;
    } catch (err) {
      console.error(err);
    }
  };

  checkUniqueEmail = async (newEmail) => {

    try {
      const isUnique = await this.user_collection.findOne({
        email: { $eq: newEmail },
      });
      if (isUnique) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  signUpNewUser = async (obj) => {
    const newObject = await encryptPassword(obj);
    try {
      await this.user_collection.insertOne(newObject);
    } catch (err) {
      console.error(err);
    }
  };
  getAllUsers = async () => {
    const listOfAllUsers = await this.user_collection.find().toArray();
    return listOfAllUsers;
  };

  loginUser = async (loginObject) => {

    const targetUser = await this.user_collection.findOne({
      email: { $eq: loginObject.email },
    });
    if (targetUser) {
      const isPasswordCorrect = await comparePasswords(
        loginObject.password,
        targetUser.password
      );
      if (isPasswordCorrect) {
        let returnUserObject = {
          isLogin: true,
          isAdmin: true,
          name: targetUser.name,
          email: targetUser.email,
          phoneNumber: targetUser.phoneNumber,
          id: targetUser.id,
          commend: "password is correct",
        };

        return returnUserObject;
      } else {
        return "incorrect password";
      }
    } else {
      return "unknown Email";
    }
  };
  checkUniqueEmail = async (newEmail) => {

    try {
      const isUnique = await this.user_collection.findOne({
        email: { $eq: newEmail },
      });
      if (isUnique) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };
};
