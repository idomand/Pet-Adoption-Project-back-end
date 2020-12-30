// const fs = require("fs");
const { checkUniqueEmail } = require("../utils/validate");

const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();

module.exports = class UserData {
  constructor() {
    const username = process.env.DB_username;
    const password = process.env.DB_password;
    const url = `mongodb+srv://${username}:${password}@cluster0.v3cxr.mongodb.net/<dbname>?retryWrites=true&w=majority`;
    const client = new MongoClient(url, { useUnifiedTopology: true });
    this.user_collection = "";
    client.connect().then(async (response) => {
      if (response.topology.s.state) {
        console.log("Status: " + response.topology.s.state);
        const db = client.db("myPetProject");
        this.user_collection = db.collection("users");
      } else {
        console.log("Problem connecting to MongoDB");
      }
    });
  }

  getAllData = async () => {
    console.log("this is user model get all data");
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

  signUp = async (obj) => {
    checkUniqueEmail(this.db, obj);

    let id = this.db.length;
    const newObject = {};
    newObject[id] = obj;
    this.db.push(newObject);
    fs.writeFileSync(filePath, JSON.stringify(this.db));
  };
};

// app.get("/users", (req, res) => {
//

// const fs = require("fs");
// const { checkUniqueEmail } = require("../utils/validate");

// const filePath = "./userData.json";

// module.exports = class UserData {
//   constructor() {
//     this.db = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   }

//   getAllData = () => {
//     console.log("this is user model get all data");
//     return this.db;
//   };

//   signUp = async (obj) => {
//     checkUniqueEmail(this.db, obj);

//     let id = this.db.length;
//     const newObject = {};
//     newObject[id] = obj;
//     this.db.push(newObject);
//     fs.writeFileSync(filePath, JSON.stringify(this.db));
//   };
// };

// // app.get("/users", (req, res) => {
// //   try {
// //     // Get all users from Mongo
// //     all_db_users = user_collection
// //       .find()
// //       .toArray()
// //       .then((users) => {
// //         console.log("users!!!!!!");
// //         console.log(users);
// //         res.send(users);
// //       });
// //   } catch (err) {
// //     res.send(
// //       `We have error: ${err.stack}. Sorry. We appreciate your patience while we work this out.`
// //     );
// //   }
// // });
