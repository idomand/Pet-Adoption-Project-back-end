const express = require("express");
const app = express();
const port = 5555;
const bodyParser = require("body-parser");

const cors = require("cors");
const userRouter = require("./routes/userRouter");
const petsRouter = require("./routes/petsRouter");

// const { MongoClient, ObjectID } = require("mongodb");
// require("dotenv").config();

// const username = process.env.DB_username;
// const password = process.env.DB_password;

// const url = `mongodb+srv://${username}:${password}@cluster0.v3cxr.mongodb.net/<dbname>?retryWrites=true&w=majority`;

// const client = new MongoClient(url, { useUnifiedTopology: true });

// let user_collection = "";
// // ===================

// client.connect().then(async (response) => {
//   if (response.topology.s.state) {
//     console.log("Status: " + response.topology.s.state);
//     const db = client.db("myPetProject");
//     user_collection = db.collection("users");
//   } else {
//     console.log("Problem connecting to MongoDB");
//   }
// });

// ==============
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/users", userRouter);
app.use("/pets", petsRouter);

// app.get("/user", (req, res) => res.send("this is user[GET] in backend-server"));

app.listen(port, () => console.log(`Listening on port 5555!`));
