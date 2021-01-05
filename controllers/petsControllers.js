const PetsDb = require("../models/petsModel");
const petsDb = new PetsDb();

const getAllPets = async (req, res) => {
  const data = await petsDb.getAllData();
  res.json(data);
};

const addPet = async (req, res) => {
  const result = await petsDb.addNewPet(req.body);
  res.json(result);
};

const searchPetsByParameters = async (req, res) => {
  console.log("this is searchPetsByParameters in controller");
  const parameters = req.params.parameters;

  const result = await petsDb.searchPetsByParameters(parameters);
  res.json(result);
};
const editPet = async (req, res) => {
  const result = await petsDb.editPet(req.body);
  res.json(result);
};

module.exports = { getAllPets, searchPetsByParameters, addPet, editPet };
