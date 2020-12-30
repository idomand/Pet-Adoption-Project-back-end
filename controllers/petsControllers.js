const PetsDb = require("../models/petsModel");
const petsDb = new PetsDb();

const getAllPets = (req, res) => {
  console.log("this is pets get data");
  console.log(petsDb);
  const data = petsDb.getAllData();
  res.json(data);
};

const getPetsByType = (req, res) => {
  console.log("this is getPetsByType in petsControllers");
  const { type } = req.params;
  console.log(type);
  const result = petsDb.getPetsByType(type);
  console.log("==========");
  console.log(result);
  console.log("==========");
  res.json(result);
};

module.exports = { getAllPets, getPetsByType };
