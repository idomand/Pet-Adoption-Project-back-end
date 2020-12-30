// const { MongoClient, ObjectID } = require("mongodb");
// require("dotenv").config();

// const username = process.env.DB_username;
// const password = process.env.DB_password;

// const url = `mongodb+srv://${username}:${password}@cluster0.v3cxr.mongodb.net/<dbname>?retryWrites=true&w=majority`;

// const client = new MongoClient(url, { useUnifiedTopology: true });
// console.log(
//   "i hope i would not see this=========================================================="
// );
// const run = async (dataFromUser) => {
//   console.log("i am in mongoHandle");
//   try {
//     await client.connect();
//     console.log("i am connecting to the DATABASE");
//     const DB = client.db("PetProject");
//     const user_collection = DB.collection("users");

//     let newDocument = [
//       {
//         first_name: "dave",
//         last_name: "smith",
//         favorite_drink: "ice tea",
//         ArrayForFun: [3, 2, 3, 4],
//         objectForFun: { how: "let the dogs out" },
//       },
//       {
//         first_name: "bob",
//         last_name: "archer",
//         favorite_drink: "ice tea",
//         ArrayForFun: [3, 2, 3, 4],
//         objectForFun: { how: "let the dogs out" },
//       },
//       {
//         first_name: "pam",
//         last_name: "hitler",
//         favorite_drink: "ice tea",
//         ArrayForFun: [3, 2, 3, 4],
//         objectForFun: { how: "let the dogs out" },
//       },
//     ];
//     const foo = await user_collection.insertOne(dataFromUser);
//     console.log("===============");
//     console.log(foo);
//     console.log("===============");
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// };

// // module.exports = { run };
// // run().catch(console.dir);
