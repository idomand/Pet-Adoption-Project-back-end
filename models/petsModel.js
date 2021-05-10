const {
  encryptPassword,
  comparePasswords,
} = require("../utils/passwordEncryption");
const { MongoClient, ObjectID } = require("mongodb");
const { response } = require("express");
require("dotenv").config();

module.exports = class PetsModel {
  constructor() {
    const username = process.env.DB_username;
    const password = process.env.DB_password;
    const url = `mongodb+srv://${username}:${password}@cluster0.v3cxr.mongodb.net/<dbname>?retryWrites=true&w=majority`;
    const client = new MongoClient(url, { useUnifiedTopology: true });
    this.pets_collection = "";
    client.connect().then(async (response) => {
      if (response.topology.s.state) {
        console.log("Status: " + response.topology.s.state + " to pets model");
        const db = client.db("myPetProject");
        this.pets_collection = db.collection("pets");
      } else {
        console.log("Problem connecting to MongoDB database");
      }
    });
  }

  editPet = async (petObject) => {
    const targetId = petObject._id;
    const result = await this.pets_collection.replaceOne(
      {
        _id: ObjectID(targetId),
      },
      petObject.newPetObject
    );
    return result.ops;
  };

  getAllData = async () => {
    let result;
    try {
      const alPets = this.pets_collection
        .find()
        .toArray()
        .then((pets) => {
          return pets;
        });
      return alPets;
    } catch (err) {
      console.error(err);
    }
  };

  searchPetsByParameters = async (parameters) => {
    let result;
    if (parameters[0] == "{") {
      const {
        petName,
        typeOfAnimal,
        adoptionStatus,
        breed,
        petHeight,
        petWeight,
      } = JSON.parse(parameters);
    } else {
      if (parameters == "anyType") {
        const allPets = await this.pets_collection.find();
        result = [];
        await allPets.forEach((element) => {
          result.push(element);
        });
      } else {
        result = await this.pets_collection
          .find({
            typeOfAnimal: { $eq: `${parameters}` },
          })
          .toArray();
      }
    }
    return result;
  };
  addNewPet = async (obj) => {
    await this.pets_collection.insertOne(obj);
  };
};
